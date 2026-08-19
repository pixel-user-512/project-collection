import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useTheme } from './useTheme'

/**
 * Composable that samples the background color behind elements and
 * determines if the background is dark or light, so text can adapt
 * for contrast.
 *
 * @param {Object} options
 * @param {Array<{ key: string, el: import('vue').Ref }>} options.elements - Elements to monitor
 * @param {number} [options.interval=150] - Sampling interval in ms
 */
export function useContrastSampler({ elements, interval = 150 }) {
  const { isDark } = useTheme()

  // Reactive state: true = background is dark (use light text), false = background is light (use dark text)
  const isDarkBackground = ref({})
  elements.forEach(({ key }) => {
    isDarkBackground.value[key] = false
  })

  let samplerTimer = null

  // Compute luminance from an RGB pixel
  const luminance = ({ r, g, b }) => {
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255
  }

  const sampleElement = (el) => {
    if (!el || !window.__blobSampler?.sampleScreenPixel) return null
    const rect = el.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) return null

    // Sample a few points across the element
    const points = [
      { x: rect.left + rect.width * 0.5, y: rect.top + rect.height * 0.5 },
      { x: rect.left + rect.width * 0.3, y: rect.top + rect.height * 0.3 },
      { x: rect.left + rect.width * 0.7, y: rect.top + rect.height * 0.3 },
      { x: rect.left + rect.width * 0.3, y: rect.top + rect.height * 0.7 },
      { x: rect.left + rect.width * 0.7, y: rect.top + rect.height * 0.7 },
    ]

    let totalLum = 0
    let count = 0

    for (const point of points) {
      const pixel = window.__blobSampler.sampleScreenPixel(point.x, point.y)
      if (pixel && pixel.a > 0) {
        totalLum += luminance(pixel)
        count++
      }
    }

    if (count === 0) return null
    return totalLum / count
  }

  const runSampling = () => {
    // Only sample in light mode - dark mode text is already white
    if (isDark.value) return

    const updates = {}
    let changed = false

    for (const { key, el } of elements) {
      const avgLum = sampleElement(el.value)
      if (avgLum === null) continue

      // Threshold: if average luminance is below 0.5, background is dark
      const isDarkBg = avgLum < 0.5
      if (isDarkBackground.value[key] !== isDarkBg) {
        updates[key] = isDarkBg
        changed = true
      }
    }

    if (changed) {
      isDarkBackground.value = { ...isDarkBackground.value, ...updates }
    }
  }

  onMounted(() => {
    // Initial sample after a short delay to let the blob renderer initialize
    setTimeout(runSampling, 300)
    samplerTimer = setInterval(runSampling, interval)
  })

  onUnmounted(() => {
    if (samplerTimer) clearInterval(samplerTimer)
  })

  // Re-sample when theme changes
  watch(isDark, () => {
    setTimeout(runSampling, 100)
  })

  return {
    isDarkBackground,
  }
}