import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

/**
 * Creates a scroll-triggered reveal animation for elements.
 * @param {string|Element|Array} targets - CSS selector, element, or array of elements
 * @param {Object} options - Animation options
 * @param {number} options.y - Initial Y offset (default: 40)
 * @param {number} options.duration - Animation duration (default: 0.8)
 * @param {number} options.stagger - Stagger delay between elements (default: 0.1)
 * @param {string} options.start - ScrollTrigger start position (default: 'top 80%')
 * @param {Function} options.onComplete - Callback when animation completes
 */
export function useScrollReveal(targets, options = {}) {
  const {
    y = 40,
    duration = 0.8,
    stagger = 0.1,
    start = 'top 80%',
    delay = 0,
    onComplete,
  } = options

  const animation = gsap.from(targets, {
    y,
    opacity: 0,
    duration,
    stagger,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: targets,
      start,
      once: true,
    },
    onComplete,
  })

  const triggers = animation.scrollTrigger
  return Array.isArray(triggers) ? triggers : [triggers]
}

/**
 * Creates an Apple-style text reveal animation on scroll.
 * Text fades in with a blur-to-sharp effect, slides up smoothly,
 * and scales from slightly larger to normal size - mimicking
 * Apple's signature entrance animations.
 * @param {string|Element|Array} targets - CSS selector, element, or array of elements
 * @param {Object} options - Animation options
 * @param {number} options.y - Initial Y offset in px (default: 60)
 * @param {number} options.duration - Animation duration in seconds (default: 1.2)
 * @param {number} options.stagger - Stagger delay between elements (default: 0.12)
 * @param {string} options.start - ScrollTrigger start position (default: 'top 85%')
 * @param {number} options.blur - Initial blur amount in px (default: 12)
 * @param {number} options.scale - Initial scale value (default: 1.05)
 * @param {string} options.ease - GSAP easing function (default: 'power3.out')
 * @param {number} options.delay - Delay before animation starts (default: 0)
 * @param {Function} options.onComplete - Callback when animation completes
 */
export function useAppleTextReveal(targets, options = {}) {
  const {
    y = 60,
    duration = 1.2,
    stagger = 0.12,
    start = 'top 85%',
    blur = 12,
    scale = 1.05,
    ease = 'power3.out',
    delay = 0,
    onComplete,
  } = options

  // Set initial state with blur and scale
  gsap.set(targets, {
    opacity: 0,
    y,
    scale,
    filter: `blur(${blur}px)`,
    willChange: 'transform, opacity, filter',
  })

  const animation = gsap.to(targets, {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    duration,
    stagger,
    delay,
    ease,
    scrollTrigger: {
      trigger: targets,
      start,
      once: true,
    },
    onComplete,
  })

  const triggers = animation.scrollTrigger
  return Array.isArray(triggers) ? triggers : [triggers]
}

/**
 * Creates a jelly/jiggle reveal on scroll.
 * The element drops/slides into place with an elastic overshoot,
 * wobbling softly like jelly before settling into its final position.
 * @param {string|Element|Array} targets - CSS selector, element, or array of elements
 * @param {Object} options - Animation options
 * @param {number} options.y - Initial Y offset in px (default: 60)
 * @param {number} options.x - Initial X offset in px (default: 0)
 * @param {number} options.scale - Initial scale value (default: 0.9)
 * @param {number} options.duration - Animation duration in seconds (default: 1.4)
 * @param {string} options.start - ScrollTrigger start position (default: 'top 85%')
 * @param {string} options.ease - GSAP easing function (default: 'elastic.out(1, 0.3)')
 * @param {number} options.delay - Delay before animation starts (default: 0)
 */
export function useJellyReveal(targets, options = {}) {
  const {
    y = 60,
    x = 0,
    scale = 0.9,
    duration = 1.4,
    start = 'top 85%',
    ease = 'elastic.out(1, 0.3)',
    delay = 0,
  } = options

  // Set initial state - hidden, slightly offset, slightly scaled down
  gsap.set(targets, {
    opacity: 0,
    y,
    x,
    scale,
    willChange: 'transform, opacity',
  })

  const animation = gsap.to(targets, {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    duration,
    delay,
    ease,
    scrollTrigger: {
      trigger: targets,
      start,
      once: true,
    },
  })

  const triggers = animation.scrollTrigger
  return Array.isArray(triggers) ? triggers : [triggers]
}

/**
 * Creates a horizontal slide reveal on scroll that works in both directions.
 * As the user scrolls down, the element slides in from the left to its
 * resting position. As the user scrolls back up, it slides back out to the
 * left. Uses scrub so the motion is tied directly to scroll position.
 * @param {string|Element|Array} targets - CSS selector, element, or array of elements
 * @param {Object} options - Animation options
 * @param {number} options.x - Initial X offset in px (default: -120)
 * @param {number} options.opacity - Target opacity (default: 1)
 * @param {string} options.start - ScrollTrigger start position (default: 'top 90%')
 * @param {string} options.end - ScrollTrigger end position (default: 'top 40%')
 * @param {number} options.stagger - Stagger delay between elements (default: 0)
 * @param {number} options.blur - Initial blur amount in px (default: 0)
 */
export function useHorizontalSlideReveal(targets, options = {}) {
  const {
    x = -120,
    opacity = 1,
    start = 'top 90%',
    end = 'top 40%',
    stagger = 0,
    blur = 0,
  } = options

  // Set initial state
  gsap.set(targets, {
    x,
    opacity: 0,
    filter: blur ? `blur(${blur}px)` : 'blur(0px)',
    willChange: 'transform, opacity, filter',
  })

  const animation = gsap.to(targets, {
    x: 0,
    opacity,
    filter: 'blur(0px)',
    ease: 'none',
    stagger,
    scrollTrigger: {
      trigger: targets,
      start,
      end,
      scrub: true,
    },
  })

  const triggers = animation.scrollTrigger
  return Array.isArray(triggers) ? triggers : [triggers]
}

/**
 * Creates a hero entrance animation timeline.
 * @param {Object} refs - Object containing refs to hero elements
 * @param {Object} refs.greeting - Greeting text element
 * @param {Object} refs.name - Name heading element
 * @param {Object} refs.role - Role heading element
 * @param {Object} refs.description - Description paragraph element
 * @param {Object} refs.buttons - Container with buttons
 * @param {Object} refs.scrollIndicator - Scroll indicator element
 */
export function useHeroAnimation(refs) {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from(refs.greeting.value, {
    y: 30,
    opacity: 0,
    duration: 0.6,
  })
    .from(
      refs.name.value,
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
      },
      '-=0.3'
    )
    .from(
      refs.role.value,
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
      },
      '-=0.5'
    )
    .from(
      refs.description.value,
      {
        y: 40,
        opacity: 0,
        duration: 0.7,
      },
      '-=0.4'
    )
    .from(
      refs.buttons.value,
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      },
      '-=0.4'
    )
    .from(
      refs.scrollIndicator.value,
      {
        y: -20,
        opacity: 0,
        duration: 0.5,
      },
      '-=0.3'
    )

  return tl
}

/**
 * Animates floating background orbs with a slow, continuous motion.
 * @param {Array} orbs - Array of orb elements
 */
export function useFloatingOrbs(orbs) {
  const animations = orbs.map((orb, index) => {
    return gsap.to(orb, {
      y: index % 2 === 0 ? -30 : 30,
      x: index % 2 === 0 ? 20 : -20,
      duration: 6 + index * 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  })

  return () => {
    animations.forEach((animation) => animation.kill())
  }
}

/**
 * Creates a parallax effect on an element as the page scrolls.
 * @param {Element} element - Element to apply parallax to
 * @param {number} speed - Parallax speed factor (default: 0.3)
 */
export function useParallax(element, speed = 0.3) {
  const animation = gsap.to(element, {
    yPercent: speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })

  return () => {
    animation.scrollTrigger?.kill()
    animation.kill()
  }
}

/**
 * Creates a 3D tilt effect on hover for cards.
 * @param {Element} element - Card element
 * @param {number} maxTilt - Maximum tilt angle in degrees (default: 8)
 */
export function useTilt(element, maxTilt = 8) {
  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    gsap.to(element, {
      rotationY: x * maxTilt * 2,
      rotationX: -y * maxTilt * 2,
      transformPerspective: 800,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    gsap.to(element, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    })
  }

  element.addEventListener('mousemove', handleMouseMove)
  element.addEventListener('mouseleave', handleMouseLeave)

  return () => {
    element.removeEventListener('mousemove', handleMouseMove)
    element.removeEventListener('mouseleave', handleMouseLeave)
  }
}

/**
 * Animates elements when a filter changes (e.g., tech stack or project filters).
 * @param {Element} container - Container holding the items
 * @param {string} selector - Selector for items to animate
 */
export function useFilterAnimation(container, selector) {
  const items = container.querySelectorAll(selector)

  // Kill any in-progress tweens on these elements to avoid conflicts
  // from rapid tab switching (leftover inline transforms/opacity).
  gsap.killTweensOf(items)

  gsap.fromTo(
    items,
    { y: 30, opacity: 0, scale: 0.95 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
      clearProps: 'all',
    }
  )
}

/**
 * Creates a pointer-origin fill effect on a button.
 * When the mouse enters the button, a fill overlay grows from the exact
 * point where the cursor entered. The button also scales up slightly.
 * @param {Element} button - The button element
 * @param {Element} fill - The fill overlay element (child of button)
 * @param {Object} options - Configuration options
 * @param {number} options.fillDuration - Fill animation duration (default: 0.4)
 * @param {number} options.scaleDuration - Button scale duration (default: 0.3)
 * @param {number} options.scale - Button scale amount (default: 1.1)
 */
export function usePointerFill(button, fill, options = {}) {
  const {
    fillDuration = 0.4,
    scaleDuration = 0.3,
    scale = 1.1,
  } = options

  const handleMouseEnter = (e) => {
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Set transform origin to where the pointer entered
    gsap.set(fill, {
      transformOrigin: `${x}px ${y}px`,
      scale: 0,
    })

    // Fill from pointer position
    gsap.to(fill, {
      scale: 1,
      duration: fillDuration,
      ease: 'power2.out',
    })

    // Grow the button
    gsap.to(button, {
      scale,
      duration: scaleDuration,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    // Shrink fill back
    gsap.to(fill, {
      scale: 0,
      duration: fillDuration * 0.6,
      ease: 'power2.in',
    })

    // Shrink button back
    gsap.to(button, {
      scale: 1,
      duration: scaleDuration,
      ease: 'power2.out',
    })
  }

  button.addEventListener('mouseenter', handleMouseEnter)
  button.addEventListener('mouseleave', handleMouseLeave)

  return () => {
    button.removeEventListener('mouseenter', handleMouseEnter)
    button.removeEventListener('mouseleave', handleMouseLeave)
  }
}

/**
 * Creates a lava lamp dust cloud effect that follows the mouse cursor.
 * A glowing molten core with a soft cloud of dust particles that drift
 * slowly behind it, gently swirling and fading out over time.
 * The particles move slowly and smoothly - like glowing embers floating
 * in the air, not a fast streak. Colors are dynamically read from the
 * selected color palette CSS variables.
 * @param {Object} options - Configuration options
 * @param {number} options.size - Base size of the lava core in px (default: 40)
 * @param {number} options.trailLength - Max number of dust particles (default: 200)
 * @param {number} options.trailWidth - Base particle size in px (default: 18)
 */
export function useMouseLavaStreak(options = {}) {
  const {
    size = 40,
    trailLength = 200,
    trailWidth = 18,
  } = options

  // Helper to read a CSS variable as an RGB triplet string
  const getCssColor = (varName) => {
    const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
    return value || '16 185 129' // fallback to emerald
  }

  // Cache palette colors - only re-read when palette changes
  let cachedPaletteColors = null

  // Get palette colors as RGB arrays (cached for performance)
  const getPaletteColors = () => {
    if (cachedPaletteColors) return cachedPaletteColors

    const primary500 = getCssColor('--color-primary-500').split(' ').map(Number)
    const primary400 = getCssColor('--color-primary-400').split(' ').map(Number)
    const primary300 = getCssColor('--color-primary-300').split(' ').map(Number)
    const primary700 = getCssColor('--color-primary-700').split(' ').map(Number)
    const primary900 = getCssColor('--color-primary-900').split(' ').map(Number)

    cachedPaletteColors = {
      // Particle colors: white-hot, primary-300, primary-500, primary-700
      particleColors: [
        [255, 255, 255],
        primary300,
        primary500,
        primary700,
      ],
      // Core glow colors
      outerGlow: [
        primary500,
        primary700,
        primary900,
        primary900,
      ],
      midGlow: [
        primary300,
        primary500,
        primary700,
      ],
      coreGlow: [
        [255, 255, 255],
        primary400,
        primary300,
        primary500,
      ],
    }
    return cachedPaletteColors
  }

  // Refresh palette cache when the palette changes
  const refreshPalette = () => {
    cachedPaletteColors = null
  }
  window.addEventListener('colorpalettechange', refreshPalette)

  // Create canvas for the trail
  const canvas = document.createElement('canvas')
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  `
  document.body.appendChild(canvas)
  const ctx = canvas.getContext('2d')

  // Resize canvas to match viewport
  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
  const prevMouse = { x: mouse.x, y: mouse.y }
  const particles = [] // Array of dust particles
  let isPointerDown = false
  let mouseIdleTimer = null

  // Track mouse position. On desktop, hovering (moving the mouse) shows the trail.
  // A short idle timer fades it out when the mouse stops moving.
  const handleMouseMove = (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
    isPointerDown = true
    clearTimeout(mouseIdleTimer)
    mouseIdleTimer = setTimeout(() => {
      isPointerDown = false
    }, 200)
  }

  // When the mouse leaves the window, hide the trail immediately
  const handleMouseLeave = () => {
    isPointerDown = false
    clearTimeout(mouseIdleTimer)
  }

  // Track touch position for mobile/tablet swipe support
  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX
      mouse.y = e.touches[0].clientY
    }
  }

  const handleMouseDown = () => {
    isPointerDown = true
    clearTimeout(mouseIdleTimer)
  }

  const handleMouseUp = () => {
    // Keep the trail visible if the mouse is still over the page;
    // the idle timer will fade it out shortly after movement stops
    clearTimeout(mouseIdleTimer)
    mouseIdleTimer = setTimeout(() => {
      isPointerDown = false
    }, 200)
  }

  const handleTouchStart = (e) => {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX
      mouse.y = e.touches[0].clientY
      prevMouse.x = mouse.x
      prevMouse.y = mouse.y
      isPointerDown = true
    }
  }

  const handleTouchEnd = () => {
    isPointerDown = false
  }

  const handleTouchCancel = () => {
    isPointerDown = false
  }

  // Lava core pulse animation - slow, organic breathing like a lava lamp
  const corePulse = gsap.to({}, {
    duration: 0.2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    onUpdate: function () {
      // Pulse handled in the draw loop via a time-based value
    },
  })

  // Main animation loop - draws the lava dust cloud
  const drawAnimation = gsap.ticker.add(() => {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Calculate mouse velocity
    const dx = mouse.x - prevMouse.x
    const dy = mouse.y - prevMouse.y
    const speed = Math.sqrt(dx * dx + dy * dy)

    // Spawn dust particles at the mouse position only while pointer is down
    if (isPointerDown) {
      // Spawn rate scales with speed, but stays gentle even when idle
      const spawnCount = Math.max(1, Math.min(4, Math.floor(speed * 0.15) + 1))
      for (let i = 0; i < spawnCount; i++) {
        // Small random offset so particles don't all stack at the exact point
        const angle = Math.random() * Math.PI * 2
        const dist = Math.random() * size * 0.4
        particles.push({
          x: mouse.x + Math.cos(angle) * dist,
          y: mouse.y + Math.sin(angle) * dist,
          // Slow, gentle drift - particles float lazily
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          // Random size for a varied dust cloud
          radius: (Math.random() * 0.6 + 0.4) * (trailWidth * 0.35),
          // Long, slow fade - particles linger like dust in the air
          life: 1,
          decay: 0.004 + Math.random() * 0.004,
          // Random color from the lava palette
          colorIndex: Math.floor(Math.random() * 4),
          // Slight random rotation for swirling motion
          swirl: (Math.random() - 0.5) * 0.02,
          angle: Math.random() * Math.PI * 2,
        })
      }
    }

    // Limit total particles
    if (particles.length > trailLength) {
      particles.splice(0, particles.length - trailLength)
    }

    // Update and draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]

      // Update life
      p.life -= p.decay
      if (p.life <= 0) {
        particles.splice(i, 1)
        continue
      }

      // Update position - slow, smooth drift with gentle swirling
      p.angle += p.swirl
      p.x += p.vx + Math.cos(p.angle) * 0.15
      p.y += p.vy + Math.sin(p.angle) * 0.15

      // Draw the particle as a soft glowing dust mote
      const alpha = p.life * 0.35
      const { particleColors } = getPaletteColors()
      const [r, g, b] = particleColors[p.colorIndex]

      // Soft radial gradient for each particle - like a tiny glowing ember
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.5)
      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`)
      grad.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${alpha * 0.4})`)
      grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()
    }

    // Draw the lava lamp core at the mouse position only while pointer is down
    if (isPointerDown) {
      const time = Date.now() / 1000
      // Slow, organic pulse like molten lava rising in a lamp
      const pulse = 1 + Math.sin(time * 3) * 0.08 + Math.sin(time * 7) * 0.05
      // Subtle wobble for an organic, liquid feel
      const wobbleX = Math.sin(time * 2.5) * 2
      const wobbleY = Math.cos(time * 2.1) * 2

      // Get palette colors for the core glow
      const { outerGlow: outerColors, midGlow: midColors, coreGlow: coreColors } = getPaletteColors()

      // Wide outer glow - palette halo
      const outerGlow = ctx.createRadialGradient(
        mouse.x + wobbleX, mouse.y + wobbleY, 0,
        mouse.x + wobbleX, mouse.y + wobbleY, size * 1.5 * pulse
      )
      outerGlow.addColorStop(0, `rgba(${outerColors[0]}, 0.3)`)
      outerGlow.addColorStop(0.4, `rgba(${outerColors[1]}, 0.18)`)
      outerGlow.addColorStop(0.7, `rgba(${outerColors[2]}, 0.08)`)
      outerGlow.addColorStop(1, `rgba(${outerColors[3]}, 0)`)
      ctx.beginPath()
      ctx.arc(mouse.x + wobbleX, mouse.y + wobbleY, size * 1.5 * pulse, 0, Math.PI * 2)
      ctx.fillStyle = outerGlow
      ctx.fill()

      // Mid glow - palette mid
      const midGlow = ctx.createRadialGradient(
        mouse.x + wobbleX, mouse.y + wobbleY, 0,
        mouse.x + wobbleX, mouse.y + wobbleY, size * 0.7 * pulse
      )
      midGlow.addColorStop(0, `rgba(${midColors[0]}, 0.5)`)
      midGlow.addColorStop(0.5, `rgba(${midColors[1]}, 0.3)`)
      midGlow.addColorStop(1, `rgba(${midColors[2]}, 0)`)
      ctx.beginPath()
      ctx.arc(mouse.x + wobbleX, mouse.y + wobbleY, size * 0.7 * pulse, 0, Math.PI * 2)
      ctx.fillStyle = midGlow
      ctx.fill()

      // White-hot core - like the brightest part of the palette glow
      const coreGlow = ctx.createRadialGradient(
        mouse.x + wobbleX, mouse.y + wobbleY, 0,
        mouse.x + wobbleX, mouse.y + wobbleY, size * 0.35 * pulse
      )
      coreGlow.addColorStop(0, `rgba(${coreColors[0]}, 0.85)`)
      coreGlow.addColorStop(0.3, `rgba(${coreColors[1]}, 0.6)`)
      coreGlow.addColorStop(0.7, `rgba(${coreColors[2]}, 0.25)`)
      coreGlow.addColorStop(1, `rgba(${coreColors[3]}, 0)`)
      ctx.beginPath()
      ctx.arc(mouse.x + wobbleX, mouse.y + wobbleY, size * 0.35 * pulse, 0, Math.PI * 2)
      ctx.fillStyle = coreGlow
      ctx.fill()
    }

    // Update previous mouse position
    prevMouse.x = mouse.x
    prevMouse.y = mouse.y
  })

  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseleave', handleMouseLeave)
  window.addEventListener('mousedown', handleMouseDown)
  window.addEventListener('mouseup', handleMouseUp)
  window.addEventListener('touchmove', handleTouchMove, { passive: true })
  window.addEventListener('touchstart', handleTouchStart, { passive: true })
  window.addEventListener('touchend', handleTouchEnd, { passive: true })
  window.addEventListener('touchcancel', handleTouchCancel, { passive: true })

  // Cleanup function
  return () => {
    clearTimeout(mouseIdleTimer)
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseleave', handleMouseLeave)
    window.removeEventListener('mousedown', handleMouseDown)
    window.removeEventListener('mouseup', handleMouseUp)
    window.removeEventListener('touchmove', handleTouchMove)
    window.removeEventListener('touchstart', handleTouchStart)
    window.removeEventListener('touchend', handleTouchEnd)
    window.removeEventListener('touchcancel', handleTouchCancel)
    window.removeEventListener('resize', resizeCanvas)
    window.removeEventListener('colorpalettechange', refreshPalette)
    gsap.ticker.remove(drawAnimation)
    corePulse.kill()
    canvas.remove()
  }
}

/**
 * Creates a magnetic scroll snap effect.
 * When the user stops scrolling near a section, the page smoothly
 * snaps to that section's start (accounting for the fixed navbar).
 * The snap only triggers after scrolling pauses, so it never fights
 * the user's scroll. Scrolling again immediately releases the snap.
 * @param {Array<Element>} sections - Array of section elements to snap to
 * @param {Object} options - Configuration options
 * @param {number} options.navbarOffset - Height of the fixed navbar in px (default: 64)
 * @param {number} options.threshold - Fraction of viewport height within which snapping triggers (default: 0.25)
 * @param {number} options.debounce - Debounce delay in ms before checking for snap (default: 200)
 * @param {number} options.duration - Snap animation duration in seconds (default: 0.8)
 * @param {string} options.ease - GSAP easing function for the snap (default: 'power3.out')
 */
export function useMagneticScroll(sections, options = {}) {
  const {
    navbarOffset = 64,
    threshold = 0.25,
    debounce = 200,
    duration = 0.8,
    ease = 'power3.out',
  } = options

  let debounceTimer = null
  let snapTween = null
  let isSnapping = false

  const findSnapTarget = () => {
    const viewportHeight = window.innerHeight
    const snapZone = viewportHeight * threshold

    let bestSection = null
    let bestDistance = Infinity

    sections.forEach((section) => {
      if (!section) return
      const rect = section.getBoundingClientRect()
      // Distance from the section's ideal snap position (top - navbarOffset)
      // to the current viewport top
      const distance = Math.abs(rect.top - navbarOffset)

      // Only consider sections whose top is within the snap zone
      if (distance <= snapZone && distance < bestDistance) {
        bestDistance = distance
        bestSection = section
      }
    })

    return bestSection
  }

  const handleScroll = () => {
    // If we're mid-snap, ignore scroll events (the tween's own scroll).
    // autoKill: true on ScrollToPlugin handles user interruption.
    if (isSnapping) return

    // Debounce the snap check
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      if (isSnapping) return

      const target = findSnapTarget()
      if (!target) return

      const targetY = target.getBoundingClientRect().top + window.scrollY - navbarOffset
      const currentY = window.scrollY

      // Clamp to valid scroll range to avoid negative or over-scroll positions
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const clampedTargetY = Math.max(0, Math.min(targetY, maxScroll))

      // Only snap if we're not already at the target
      if (Math.abs(clampedTargetY - currentY) < 2) return

      isSnapping = true
      snapTween = gsap.to(window, {
        scrollTo: { y: clampedTargetY, autoKill: true },
        duration,
        ease,
        onComplete: () => {
          isSnapping = false
          snapTween = null
        },
        onInterrupt: () => {
          isSnapping = false
          snapTween = null
        },
      })
    }, debounce)
  }

  window.addEventListener('scroll', handleScroll, { passive: true })

  return () => {
    clearTimeout(debounceTimer)
    if (snapTween) {
      snapTween.kill()
      snapTween = null
    }
    window.removeEventListener('scroll', handleScroll, { passive: true })
  }
}
