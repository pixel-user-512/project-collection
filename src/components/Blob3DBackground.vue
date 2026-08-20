<template>
  <div ref="containerRef" class="absolute inset-0 overflow-hidden pointer-events-none"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { debounce } from '../composables/useDebounce'

const containerRef = ref(null)

// Reused between region reads so we don't allocate a fresh typed array
// every sampling tick.
let regionBuffer = null

// Global registry so other components (NavBar, HeroSection) can sample pixels
// without needing a direct component ref
const globalBlobSampler = {
  sampleScreenPixel: null,
  samplePoints: null,
}

// Expose a method to sample the rendered pixel color at a screen position
// Returns { r, g, b, a } or null if not ready
//
// Wrapped in a debounce so that when it's called repeatedly during
// mousemove/scroll events, the expensive gl.readPixels call only runs
// on the leading edge of a burst and once more after the user pauses.
// The leading edge ensures callers that need an immediate result still
// get one; the trailing edge captures the final state.
const sampleScreenPixel = debounce((x, y) => {
  if (!renderer || !material) return null
  const rect = containerRef.value?.getBoundingClientRect()
  if (!rect) return null

  const px = Math.round((x - rect.left) * renderer.getPixelRatio())
  const py = Math.round((y - rect.top) * renderer.getPixelRatio())
  const w = Math.round(rect.width * renderer.getPixelRatio())
  const h = Math.round(rect.height * renderer.getPixelRatio())

  if (px < 0 || py < 0 || px >= w || py >= h) return null

  const gl = renderer.getContext()
  const pixel = new Uint8Array(4)
  gl.readPixels(px, h - py - 1, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel)
  return { r: pixel[0], g: pixel[1], b: pixel[2], a: pixel[3] }
}, 50)

/**
 * Read a rectangular block of the rendered frame in ONE gl.readPixels call.
 * Individual readPixels calls stall the GPU pipeline, so batching a whole
 * region and indexing into it locally is dramatically cheaper than issuing
 * one call per sample point.
 *
 * Coordinates are CSS pixels in viewport space (same space as
 * getBoundingClientRect).
 */
const sampleRegion = (x, y, w, h) => {
  if (!renderer || !material) return null
  const rect = containerRef.value?.getBoundingClientRect()
  if (!rect) return null

  const ratio = renderer.getPixelRatio()
  const bufW = Math.round(rect.width * ratio)
  const bufH = Math.round(rect.height * ratio)

  let px = Math.floor((x - rect.left) * ratio)
  let py = Math.floor((y - rect.top) * ratio)
  let pw = Math.ceil(w * ratio)
  let ph = Math.ceil(h * ratio)

  // Clip the request to the drawing buffer
  if (px < 0) {
    pw += px
    px = 0
  }
  if (py < 0) {
    ph += py
    py = 0
  }
  pw = Math.min(pw, bufW - px)
  ph = Math.min(ph, bufH - py)
  if (pw <= 0 || ph <= 0) return null

  const needed = pw * ph * 4
  if (!regionBuffer || regionBuffer.length < needed) {
    regionBuffer = new Uint8Array(needed)
  }

  const gl = renderer.getContext()
  // GL origin is bottom-left, so flip the y of the region's top edge
  gl.readPixels(px, bufH - (py + ph), pw, ph, gl.RGBA, gl.UNSIGNED_BYTE, regionBuffer)

  return { data: regionBuffer, px, py, pw, ph, ratio, left: rect.left, top: rect.top }
}

/**
 * Sample many viewport points at once.
 * @param {Array<{x:number,y:number}>} points
 * @returns {Array<{r:number,g:number,b:number,a:number}|null>} premultiplied RGBA
 */
const samplePoints = (points) => {
  if (!points || points.length === 0) return []

  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity
  for (const p of points) {
    if (p.x < minX) minX = p.x
    if (p.x > maxX) maxX = p.x
    if (p.y < minY) minY = p.y
    if (p.y > maxY) maxY = p.y
  }

  const region = sampleRegion(minX, minY, maxX - minX + 1, maxY - minY + 1)
  if (!region) return points.map(() => null)

  const { data, px, py, pw, ph, ratio, left, top } = region
  const out = new Array(points.length)

  for (let i = 0; i < points.length; i++) {
    const sx = Math.floor((points[i].x - left) * ratio)
    const sy = Math.floor((points[i].y - top) * ratio)

    if (sx < px || sx >= px + pw || sy < py || sy >= py + ph) {
      out[i] = null
      continue
    }

    // Row 0 of the buffer is the BOTTOM row of the region
    const row = py + ph - 1 - sy
    const idx = (row * pw + (sx - px)) * 4
    out[i] = { r: data[idx], g: data[idx + 1], b: data[idx + 2], a: data[idx + 3] }
  }

  return out
}

// Register globally for other components to use
globalBlobSampler.sampleScreenPixel = sampleScreenPixel
globalBlobSampler.samplePoints = samplePoints
window.__blobSampler = globalBlobSampler

defineExpose({ sampleScreenPixel, samplePoints })

let renderer = null
let scene = null
let camera = null
let material = null
let animationId = null
let cleanupFns = []

const BALL_COUNT = 9

// Read a palette CSS variable and convert "16 185 129" -> THREE.Vector3(0.06, 0.72, 0.5)
function readPaletteColor(varName, fallback) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
  if (!raw) return fallback
  const parts = raw.split(/\s+/).map(Number)
  if (parts.length < 3 || parts.some(Number.isNaN)) return fallback
  return new THREE.Vector3(parts[0] / 255, parts[1] / 255, parts[2] / 255)
}

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;

  uniform vec2  uResolution;
  uniform float uTime;
  uniform float uScroll;
  uniform vec2  uMouse;
  uniform vec2  uMouseDir;
  uniform float uMouseStrength;
  uniform vec3  uBallPos[${BALL_COUNT}];
  uniform float uBallRadius[${BALL_COUNT}];
  uniform vec3  uColorA;
  uniform vec3  uColorB;
  uniform vec3  uColorC;
  uniform vec3  uColorHi;

  // Smooth minimum - this is what makes blobs FUSE together.
  // When two surfaces get within k of each other they bridge into one
  // continuous shape; as they separate the bridge necks down and snaps.
  float smin(float a, float b, float k) {
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
  }

  float sdSphere(vec3 p, float r) {
    return length(p) - r;
  }

  // Radius of the cursor's influence, in world units. Outside this the
  // lava is completely untouched - only the portion under the pointer
  // deforms.
  const float MOUSE_R = 1.75;

  // Mouse position in the blob field's world space
  vec2 mouseWorld() {
    return uMouse * vec2(3.6, 2.3);
  }

  // Local influence: 1 at the cursor, smoothly reaching exactly 0 at
  // MOUSE_R. Using smoothstep (not exp) guarantees a hard cutoff so
  // distant blobs are provably unaffected.
  float mouseFalloff(float dist) {
    return smoothstep(MOUSE_R, 0.0, dist);
  }

  // SQUISH: warp the sample space, but ONLY inside MOUSE_R.
  // Scaling coordinates UP along an axis makes the shape look COMPRESSED
  // along that axis; scaling DOWN makes it look STRETCHED. So we compress
  // along the direction of mouse travel and stretch perpendicular to it -
  // exactly how a soft body squishes when you press into it.
  vec3 squishSpace(vec3 p) {
    vec2 mw = mouseWorld();
    vec2 delta = p.xy - mw;
    float dist = length(delta);

    // Hard early-out: outside the cursor radius nothing changes at all
    if (dist > MOUSE_R || uMouseStrength < 0.001) return p;

    // Squared falloff concentrates the effect near the pointer
    float f = mouseFalloff(dist);
    float amt = uMouseStrength * f * f;

    // Decompose into "along the drag" and "perpendicular to the drag"
    vec2 dir  = uMouseDir;
    vec2 perp = vec2(-dir.y, dir.x);
    float along  = dot(delta, dir);
    float across = dot(delta, perp);

    // Compress along the drag, bulge across it
    along  *= 1.0 + amt * 1.30;
    across *= 1.0 - amt * 0.60;

    // Flatten slightly in Z so it reads as pressed toward the viewer
    float pz = p.z * (1.0 + amt * 0.50);

    return vec3(mw + dir * along + perp * across, pz);
  }

  // Signed distance to the whole metaball field
  float sdScene(vec3 p) {
    // Apply the squish warp before evaluating the field
    vec3 q = squishSpace(p);

    float d = sdSphere(q - uBallPos[0], uBallRadius[0]);
    for (int i = 1; i < ${BALL_COUNT}; i++) {
      float di = sdSphere(q - uBallPos[i], uBallRadius[i]);
      // Larger blend radius - big masses fuse into thick, chunky lava
      d = smin(d, di, 1.25);
    }

    // Finger-press: a dimple right under the cursor ringed by a raised
    // lip, like pressing into dough. Both terms are zero beyond MOUSE_R.
    float md = length(p.xy - mouseWorld());
    if (md < MOUSE_R && uMouseStrength > 0.001) {
      float f = mouseFalloff(md);
      // Tight inward dimple - concentrated in the inner third
      float dent = f * f * f * 0.60 * uMouseStrength;
      // Raised lip around it, peaking at ~60% of the radius
      float ringPos = md / MOUSE_R;
      float rim = exp(-pow((ringPos - 0.60) / 0.20, 2.0)) * f * 0.30 * uMouseStrength;
      d += dent;
      d -= rim;

      // Only the deformed region breaks the strict distance bound, so
      // the step penalty is applied here rather than globally.
      d *= 0.70;
    }

    return d;
  }

  // Surface normal via gradient of the distance field
  vec3 calcNormal(vec3 p) {
    const vec2 e = vec2(0.0015, 0.0);
    return normalize(vec3(
      sdScene(p + e.xyy) - sdScene(p - e.xyy),
      sdScene(p + e.yxy) - sdScene(p - e.yxy),
      sdScene(p + e.yyx) - sdScene(p - e.yyx)
    ));
  }

  // Soft shadow for a bit of depth between overlapping masses
  float softShadow(vec3 ro, vec3 rd) {
    float res = 1.0;
    float t = 0.08;
    for (int i = 0; i < 1; i++) {
      float h = sdScene(ro + rd * t);
      if (h < 0.001) return 0.15;
      res = min(res, 10.0 * h / t);
      t += clamp(h, 0.05, 0.4);
      if (t > 8.0) break;
    }
    return clamp(res, 0.15, 1.0);
  }

  void main() {
    // Normalized device coords, aspect corrected
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;

    // Camera - tighter FOV so the lava mass fills the frame
    vec3 ro = vec3(0.0, 0.0, 9.5);
    vec3 rd = normalize(vec3(uv * 0.95, -1.0));

    // Raymarch - smaller steps because the squish warp distorts the field
    float t = 0.0;
    float d = 0.0;
    bool hit = false;
    for (int i = 0; i < 64; i++) {
      vec3 p = ro + rd * t;
      d = sdScene(p);
      if (d < 0.0025) { hit = true; break; }
      t += max(d * 0.7, 0.004);
      if (t > 32.0) break;
    }

    if (!hit) {
      gl_FragColor = vec4(0.0);
      return;
    }

    vec3 p = ro + rd * t;
    vec3 n = calcNormal(p);
    vec3 viewDir = normalize(ro - p);

    // --- Lighting -------------------------------------------------
    vec3 lightDir1 = normalize(vec3(-0.6, 0.8, 0.9));
    vec3 lightDir2 = normalize(vec3(0.8, -0.4, 0.6));

    float diff1 = max(dot(n, lightDir1), 0.0);
    float diff2 = max(dot(n, lightDir2), 0.0) * 0.5;
    float shadow = softShadow(p + n * 0.02, lightDir1);

    vec3 halfVec = normalize(lightDir1 + viewDir);
    float spec = pow(max(dot(n, halfVec), 0.0), 48.0);

    // Fresnel rim - gives the glossy liquid edge
    float fresnel = pow(1.0 - max(dot(n, viewDir), 0.0), 2.5);

    // --- Color ----------------------------------------------------
    // Slow, continuous drift between three palette shades.
    // Position term makes different regions of the mass differ in hue.
    float posMix = (p.y * 0.12 + p.x * 0.06) + uTime * 0.05;
    float m1 = sin(uTime * 0.11 + posMix) * 0.5 + 0.5;
    float m2 = sin(uTime * 0.07 + posMix * 1.4 + 2.1) * 0.5 + 0.5;

    vec3 base = mix(uColorA, uColorB, m1);
    base = mix(base, uColorC, m2 * 0.65);

    // Depth shading - deeper parts darker
    float depthFade = clamp(1.0 - (t - 6.0) / 14.0, 0.35, 1.0);

    vec3 col = base * (0.30 + 0.70 * diff1 * shadow + 0.30 * diff2);
    col += uColorHi * spec * 0.85;
    col = mix(col, uColorHi, fresnel * 0.45);
    col *= depthFade;

    // Subtle internal glow so the mass reads as translucent lava
    col += base * 0.14;

    // Localized highlight - only lights the lava actually being squished
    float md = length(p.xy - mouseWorld());
    if (md < MOUSE_R) {
      float f = mouseFalloff(md);
      col += uColorHi * f * f * (0.10 + uMouseStrength * 0.30);

      // Bright compression lip where the lava is pinched
      float ringPos = md / MOUSE_R;
      float ring = exp(-pow((ringPos - 0.60) / 0.20, 2.0)) * f * uMouseStrength * 0.35;
      col += uColorHi * ring;
    }

    // Fade the whole field out slightly as the hero scrolls away
    float alpha = (0.88 - uScroll * 0.35) * clamp(1.0 - fresnel * 0.15, 0.0, 1.0);

    gl_FragColor = vec4(col, alpha);
  }
`

onMounted(() => {
  const container = containerRef.value
  const width = container.clientWidth
  const height = container.clientHeight

  renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, preserveDrawingBuffer: true })
  renderer.setSize(width, height)
  // Cap pixel ratio - raymarching is fragment-heavy
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,1))
  container.appendChild(renderer.domElement)

  scene = new THREE.Scene()
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

  // Each ball gets its own base position, drift amplitudes and prime-ish
  // speeds so their cycles never sync. This produces genuinely
  // disorganized wandering - they fuse and split at irregular intervals.
  // Sizes vary dramatically (0.45 -> 2.6) and positions are spread wide
  // so the lava mass fills the whole screen.
  const ballConfigs = [
    // Big anchor masses
    { base: [-3.4,  1.4, -0.5], amp: [2.4, 2.0, 1.3], spd: [0.130, 0.089, 0.061], ph: [0.0, 1.7, 3.4], r: 2.60 },
    { base: [ 3.6, -1.2,  0.4], amp: [2.2, 2.3, 1.2], spd: [0.101, 0.127, 0.073], ph: [2.1, 0.4, 5.2], r: 2.30 },
    { base: [-0.8, -2.6, -1.1], amp: [2.6, 1.9, 1.5], spd: [0.083, 0.113, 0.055], ph: [4.3, 2.9, 1.1], r: 1.95 },
    // Mid masses
    { base: [ 1.9,  2.6, -0.8], amp: [2.0, 2.1, 1.1], spd: [0.119, 0.067, 0.091], ph: [1.2, 5.1, 2.7], r: 1.50 },
    { base: [-4.1, -1.9,  0.7], amp: [1.8, 2.2, 1.4], spd: [0.071, 0.103, 0.047], ph: [3.8, 1.5, 4.6], r: 1.25 },
    { base: [ 4.2,  1.8, -1.4], amp: [2.1, 1.8, 1.6], spd: [0.109, 0.079, 0.121], ph: [5.5, 3.2, 0.8], r: 1.10 },
    // Small droplets
    { base: [ 0.4,  3.3,  0.3], amp: [2.3, 1.5, 1.2], spd: [0.059, 0.131, 0.085], ph: [2.6, 4.8, 3.9], r: 0.75 },
    { base: [-2.1,  2.9, -1.7], amp: [1.9, 2.0, 1.3], spd: [0.127, 0.053, 0.097], ph: [0.7, 2.3, 5.8], r: 0.58 },
    { base: [ 1.4, -3.2, -0.3], amp: [2.2, 1.7, 1.5], spd: [0.093, 0.117, 0.065], ph: [4.9, 0.9, 2.2], r: 0.45 },
  ]

  // Initial uniform arrays
  const ballPos = ballConfigs.map(() => new THREE.Vector3())
  const ballRadius = ballConfigs.map((c) => c.r)

  const fallbackA = new THREE.Vector3(0.06, 0.73, 0.51) // emerald-500
  const fallbackB = new THREE.Vector3(0.02, 0.47, 0.34) // emerald-700
  const fallbackC = new THREE.Vector3(0.02, 0.31, 0.23) // emerald-900
  const fallbackHi = new THREE.Vector3(0.20, 0.83, 0.60) // emerald-400

  material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    uniforms: {
      uResolution: { value: new THREE.Vector2(width, height) },
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uMouseDir: { value: new THREE.Vector2(1, 0) },
      uMouseStrength: { value: 0 },
      uBallPos: { value: ballPos },
      uBallRadius: { value: ballRadius },
      uColorA: { value: fallbackA.clone() },
      uColorB: { value: fallbackB.clone() },
      uColorC: { value: fallbackC.clone() },
      uColorHi: { value: fallbackHi.clone() },
    },
  })

  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
  quad.frustumCulled = false
  scene.add(quad)

  // --- Palette wiring -------------------------------------------
  const applyPalette = () => {
    material.uniforms.uColorA.value.copy(readPaletteColor('--color-primary-500', fallbackA))
    material.uniforms.uColorB.value.copy(readPaletteColor('--color-primary-700', fallbackB))
    material.uniforms.uColorC.value.copy(readPaletteColor('--color-primary-900', fallbackC))
    material.uniforms.uColorHi.value.copy(readPaletteColor('--color-primary-400', fallbackHi))
  }
  applyPalette()
  window.addEventListener('colorpalettechange', applyPalette)

  // --- Mouse -----------------------------------------------------
  // Normalized mouse position (-1..1), eased so it glides smoothly.
  // We also track travel direction + speed to drive the squish.
  const mouseTarget = new THREE.Vector2(0, 0)
  const prevMouse = new THREE.Vector2(0, 0)
  const smoothedDir = new THREE.Vector2(1, 0)
  let mouseSpeed = 0
  let mouseInside = false

  const handleMouseMove = (e) => {
    const nx = (e.clientX / window.innerWidth) * 2 - 1
    const ny = -((e.clientY / window.innerHeight) * 2 - 1)

    const dx = nx - prevMouse.x
    const dy = ny - prevMouse.y
    const mag = Math.hypot(dx, dy)

    if (mag > 0.0008) {
      // Blend the travel direction so it doesn't jitter
      smoothedDir.x += (dx / mag - smoothedDir.x) * 0.25
      smoothedDir.y += (dy / mag - smoothedDir.y) * 0.25
      const dl = Math.hypot(smoothedDir.x, smoothedDir.y) || 1
      smoothedDir.x /= dl
      smoothedDir.y /= dl

      // Accumulate speed, clamped
      mouseSpeed = Math.min(1, mouseSpeed + mag * 7.0)
    }

    prevMouse.set(nx, ny)
    mouseTarget.set(nx, ny)
    mouseInside = true
  }

  const handleMouseLeave = () => { mouseInside = false }

  // --- Touch support for mobile/tablet swipe ----------------------
  const handleTouchStart = (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0]
      const nx = (touch.clientX / window.innerWidth) * 2 - 1
      const ny = -((touch.clientY / window.innerHeight) * 2 - 1)
      prevMouse.set(nx, ny)
      mouseTarget.set(nx, ny)
      mouseInside = true
    }
  }

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0]
      const nx = (touch.clientX / window.innerWidth) * 2 - 1
      const ny = -((touch.clientY / window.innerHeight) * 2 - 1)

      const dx = nx - prevMouse.x
      const dy = ny - prevMouse.y
      const mag = Math.hypot(dx, dy)

      if (mag > 0.0008) {
        // Blend the travel direction so it doesn't jitter
        smoothedDir.x += (dx / mag - smoothedDir.x) * 0.25
        smoothedDir.y += (dy / mag - smoothedDir.y) * 0.25
        const dl = Math.hypot(smoothedDir.x, smoothedDir.y) || 1
        smoothedDir.x /= dl
        smoothedDir.y /= dl

        // Accumulate speed, clamped
        mouseSpeed = Math.min(1, mouseSpeed + mag * 7.0)
      }

      prevMouse.set(nx, ny)
      mouseTarget.set(nx, ny)
      mouseInside = true
    }
  }

  const handleTouchEnd = () => { mouseInside = false }

  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  document.addEventListener('mouseleave', handleMouseLeave)
  window.addEventListener('touchstart', handleTouchStart, { passive: true })
  window.addEventListener('touchmove', handleTouchMove, { passive: true })
  window.addEventListener('touchend', handleTouchEnd, { passive: true })

  // --- Scroll ----------------------------------------------------
  let isVisible = true
  let scrollProgress = 0
  const handleScroll = () => {
    // The hero section is sticky (top-0), so getBoundingClientRect().top
    // is always 0. Use window.scrollY instead to detect when the hero
    // (and its blobs) are actually covered by the sections below it.
    scrollProgress = Math.min(1, window.scrollY / window.innerHeight)
    const wasVisible = isVisible
    // Pause animation when the hero has scrolled out of view
    isVisible = scrollProgress < 0.95

    // Fully stop the rAF loop when off-screen, restart it when visible
    if (wasVisible && !isVisible) {
      cancelAnimationFrame(animationId)
      animationId = null
    } else if (!wasVisible && isVisible) {
      animate()
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true })

  // --- Resize ----------------------------------------------------
  const handleResize = () => {
    const w = container.clientWidth
    const h = container.clientHeight
    renderer.setSize(w, h)
    material.uniforms.uResolution.value.set(
      w * renderer.getPixelRatio(),
      h * renderer.getPixelRatio()
    )
  }
  handleResize()
  window.addEventListener('resize', handleResize)

  // --- Animation loop --------------------------------------------
  const start = performance.now()
  const animate = () => {
    animationId = requestAnimationFrame(animate)

    // Safety net: skip rendering if the canvas is off-screen
    if (!isVisible) return

    const time = (performance.now() - start) / 1000

    // Ease scroll into the uniform so it never snaps
    const cur = material.uniforms.uScroll.value
    material.uniforms.uScroll.value = cur + (scrollProgress - cur) * 0.08
    const s = material.uniforms.uScroll.value

    // Ease mouse into the uniform so it glides smoothly
    const m = material.uniforms.uMouse.value
    m.x += (mouseTarget.x - m.x) * 0.10
    m.y += (mouseTarget.y - m.y) * 0.10

    // Decay the accumulated travel speed so the squish relaxes
    mouseSpeed *= 0.93

    // Resting squish while hovering, ramping up hard while dragging
    const targetStrength = mouseInside ? 0.30 + mouseSpeed * 0.85 : 0
    const su = material.uniforms.uMouseStrength
    su.value += (targetStrength - su.value) * 0.12

    // Ease the squish axis
    const dirU = material.uniforms.uMouseDir.value
    dirU.x += (smoothedDir.x - dirU.x) * 0.10
    dirU.y += (smoothedDir.y - dirU.y) * 0.10
    const dLen = Math.hypot(dirU.x, dirU.y) || 1
    dirU.x /= dLen
    dirU.y /= dLen

    // Drive each metaball along its own non-repeating path.
    // Because the speeds are mutually irrational-ish, the balls
    // wander into and out of each other's blend range unpredictably.
    for (let i = 0; i < ballConfigs.length; i++) {
      const c = ballConfigs[i]
      const spreadX = 1.0 + s * 1.1
      const spreadY = 1.0 - s * 0.25

      // SPEED multiplier - lower = slower, more languid lava motion
      const SPEED = 1.55

      ballPos[i].set(
        (c.base[0] + Math.sin(time * c.spd[0] * SPEED + c.ph[0]) * c.amp[0]) * spreadX,
        (c.base[1] + Math.sin(time * c.spd[1] * SPEED + c.ph[1]) * c.amp[1]) * spreadY - s * 1.6,
        c.base[2] + Math.cos(time * c.spd[2] * SPEED + c.ph[2]) * c.amp[2] - s * 1.2
      )

      // Radii breathe slowly and independently
      ballRadius[i] = c.r * (1.0 + Math.sin(time * (0.055 + i * 0.009) + i * 1.9) * 0.16) * (1.0 - s * 0.15)

      // Only a blob whose surface actually reaches the cursor gets
      // nudged - and only very slightly. The visible deformation is
      // handled locally by the shader warp, not by moving whole blobs.
      const mx = m.x * 3.6
      const my = m.y * 2.3
      const dx = mx - ballPos[i].x
      const dy = my - ballPos[i].y
      const dist = Math.hypot(dx, dy)
      const reach = ballRadius[i] + 0.9
      if (dist < reach) {
        const falloff = 1.0 - dist / reach
        // Gentle smear along the drag axis, scoped to the touched blob
        const shove = falloff * su.value * 0.10
        ballPos[i].x += dirU.x * shove
        ballPos[i].y += dirU.y * shove
      }
    }

    material.uniforms.uTime.value = time
    renderer.render(scene, camera)
  }
  // Initial visibility check (after animate is defined so handleScroll
  // can safely restart the loop if needed)
  handleScroll()
  if (isVisible) animate()

  cleanupFns.push(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseleave', handleMouseLeave)
    window.removeEventListener('touchstart', handleTouchStart)
    window.removeEventListener('touchmove', handleTouchMove)
    window.removeEventListener('touchend', handleTouchEnd)
    window.removeEventListener('colorpalettechange', applyPalette)
    quad.geometry.dispose()
    material.dispose()
    renderer.dispose()
    if (renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  })
})

onUnmounted(() => {
  cleanupFns.forEach((fn) => fn())
})
</script>