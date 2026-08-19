import { onMounted, onBeforeUnmount, watch } from 'vue'
import { useTheme } from './useTheme'

/**
 * Per-segment adaptive text contrast.
 *
 * Splits an element's text into word-level <span> segments and, on a slow
 * tick, samples the actual rendered pixels of the animated blob canvas that
 * sit directly behind EACH segment. A segment whose local background has
 * become light flips to dark ink; a segment still sitting over a dark region
 * keeps its light ink. Segments are evaluated and mutated independently, so
 * only the portion of the sentence whose background actually changed will
 * change color - the rest of the line is left untouched.
 *
 * This replaces `mix-blend-mode: difference`, which inverted the hue of the
 * text (producing magenta/cyan artifacts over the emerald lava) instead of
 * producing a readable, deliberate contrast color.
 */

// Ink choices. Not pure black/white - slightly tempered so the flip reads as
// a deliberate design choice rather than a harsh strobe.
const INK_LIGHT = 'rgb(255, 255, 255)'
const INK_DARK = 'rgb(12, 10, 9)'

const SHADOW_LIGHT = '0 2px 8px rgba(0, 0, 0, 0.55)'
const SHADOW_DARK = '0 1px 6px rgba(255, 255, 255, 0.45)'

// Luminance switch points. The gap between them is hysteresis: a segment must
// travel meaningfully past the boundary to flip, so a blob edge hovering right
// at the threshold cannot make a word strobe back and forth.
const FLIP_TO_DARK_AT = 0.24
const FLIP_TO_LIGHT_AT = 0.15

// sRGB channel -> linear light
const toLinear = (c) => {
  const s = c / 255
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
}

// WCAG relative luminance
const relLuminance = (r, g, b) =>
  0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)

const parseRgb = (str, fallback) => {
  const m = /rgba?\(([^)]+)\)/.exec(str || '')
  if (!m) return fallback
  const parts = m[1].split(',').map((v) => parseFloat(v))
  if (parts.length < 3 || parts.some(Number.isNaN)) return fallback
  return [parts[0], parts[1], parts[2]]
}

/**
 * @param {Array<{ el: import('vue').Ref, border?: boolean }>} targets
 * @param {Object} [options]
 * @param {number} [options.interval=110] ms between sampling passes
 */
export function useAdaptiveTextContrast(targets, { interval = 110 } = {}) {
  const { isDark } = useTheme()

  /** @type {Array<{ root: HTMLElement, segments: Array<{el: HTMLElement, isLightBg: boolean|null}>, border: boolean }>} */
  let entries = []
  let rafId = null
  let lastRun = 0
  // Page color the translucent canvas composites over
  let baseColor = [28, 25, 23]

  const readBaseColor = () => {
    baseColor = parseRgb(getComputedStyle(document.body).backgroundColor, [28, 25, 23])
  }

  // Wrap every word of every direct text node in a span we can color
  // individually. Whitespace stays as plain text so wrapping is unaffected.
  const splitIntoSegments = (root) => {
    const segments = []
    const textNodes = []
    for (const node of Array.from(root.childNodes)) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) textNodes.push(node)
    }

    for (const node of textNodes) {
      const parts = node.textContent.split(/(\s+)/).filter((p) => p.length > 0)
      const frag = document.createDocumentFragment()

      for (const part of parts) {
        if (!part.trim()) {
          frag.appendChild(document.createTextNode(part))
          continue
        }
        const span = document.createElement('span')
        span.className = 'adaptive-seg'
        span.textContent = part
        frag.appendChild(span)
        segments.push({ el: span, isLightBg: null })
      }

      node.parentNode.replaceChild(frag, node)
    }

    return segments
  }

  const applyInk = (el, isLightBg) => {
    el.style.color = isLightBg ? INK_DARK : INK_LIGHT
    el.style.textShadow = isLightBg ? SHADOW_DARK : SHADOW_LIGHT
  }

  // Composite the sampled canvas pixel over the page background and return
  // its relative luminance. The canvas is drawn with premultiplied alpha, so
  // what the user actually sees is `pixel + base * (1 - alpha)`.
  const compositeLuminance = (px) => {
    if (!px) return null
    const a = px.a / 255
    const r = Math.min(255, px.r + baseColor[0] * (1 - a))
    const g = Math.min(255, px.g + baseColor[1] * (1 - a))
    const b = Math.min(255, px.b + baseColor[2] * (1 - a))
    return relLuminance(r, g, b)
  }

  const measure = () => {
    const sampler = window.__blobSampler
    if (!sampler?.samplePoints) return

    const vh = window.innerHeight

    for (const entry of entries) {
      const rootRect = entry.root.getBoundingClientRect()
      // Skip work entirely when the element has scrolled out of the hero
      if (rootRect.bottom < 0 || rootRect.top > vh || rootRect.width === 0) continue

      // Group segments into horizontal strips by their vertical center. All
      // points in a strip share one y, so each readPixels call only pulls a
      // 1px-tall band instead of the whole paragraph's bounding box.
      const rows = new Map()

      for (const seg of entry.segments) {
        const r = seg.el.getBoundingClientRect()
        if (r.width === 0 || r.height === 0) continue
        const y = Math.round(r.top + r.height * 0.5)
        if (!rows.has(y)) rows.set(y, [])
        rows.get(y).push({
          seg,
          xs: [r.left + r.width * 0.2, r.left + r.width * 0.5, r.left + r.width * 0.8],
        })
      }

      let lightCount = 0
      let sampledCount = 0

      for (const [y, items] of rows) {
        const points = []
        for (const item of items) {
          for (const x of item.xs) points.push({ x, y })
        }

        const pixels = sampler.samplePoints(points)
        if (!pixels || pixels.length !== points.length) continue

        let cursor = 0
        for (const item of items) {
          let total = 0
          let count = 0
          for (let i = 0; i < item.xs.length; i++) {
            const lum = compositeLuminance(pixels[cursor + i])
            if (lum !== null) {
              total += lum
              count++
            }
          }
          cursor += item.xs.length
          if (count === 0) continue

          const avg = total / count
          const prev = item.seg.isLightBg

          // Hysteresis: only cross the boundary decisively.
          let next = prev
          if (prev === null) next = avg > (FLIP_TO_DARK_AT + FLIP_TO_LIGHT_AT) / 2
          else if (prev === false && avg > FLIP_TO_DARK_AT) next = true
          else if (prev === true && avg < FLIP_TO_LIGHT_AT) next = false

          sampledCount++
          if (next) lightCount++

          // Only touch the DOM for the segments that actually changed - the
          // rest of the sentence keeps its current color.
          if (next !== prev) {
            item.seg.isLightBg = next
            applyInk(item.seg.el, next)
          }
        }
      }

      // Non-text chrome (the resume button's border) follows the majority so
      // the outline never disappears into the background.
      if (entry.border && sampledCount > 0) {
        const majorityLight = lightCount * 2 > sampledCount
        if (entry.borderIsLightBg !== majorityLight) {
          entry.borderIsLightBg = majorityLight
          entry.root.style.borderColor = majorityLight
            ? 'rgba(12, 10, 9, 0.85)'
            : 'rgba(255, 255, 255, 0.85)'
        }
      }
    }
  }

  const tick = (now) => {
    rafId = requestAnimationFrame(tick)
    if (document.hidden) return
    if (now - lastRun < interval) return
    lastRun = now
    measure()
  }

  const reset = () => {
    for (const entry of entries) {
      for (const seg of entry.segments) {
        seg.isLightBg = null
        seg.el.style.color = ''
        seg.el.style.textShadow = ''
      }
      entry.borderIsLightBg = undefined
      if (entry.border) entry.root.style.borderColor = ''
    }
  }

  onMounted(() => {
    readBaseColor()

    entries = targets
      .map(({ el, border = false }) => {
        const root = el?.value
        if (!root) return null
        return { root, segments: splitIntoSegments(root), border, borderIsLightBg: undefined }
      })
      .filter(Boolean)

    // Give the WebGL renderer a frame or two to produce something to read
    setTimeout(() => {
      measure()
      rafId = requestAnimationFrame(tick)
    }, 250)
  })

  watch(isDark, () => {
    readBaseColor()
    reset()
    setTimeout(measure, 60)
  })

  onBeforeUnmount(() => {
    if (rafId) cancelAnimationFrame(rafId)
  })

  return { refresh: measure }
}