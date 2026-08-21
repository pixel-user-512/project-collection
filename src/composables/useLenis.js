import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenis = null

/**
 * Get the current Lenis instance (or null if not initialized).
 * Use this in components that need to call lenis.scrollTo().
 */
export function getLenis() {
  return lenis
}

/**
 * Initializes Lenis smooth scrolling and syncs it with GSAP's ScrollTrigger.
 * Call this once in the root App component.
 */
export function useLenis() {
  onMounted(() => {
    // 1. Initialize Lenis
    lenis = new Lenis({
      // THE MAGIC NUMBERS FOR LUXURY SCROLL:
      duration: 1.5,        // Makes the momentum last longer (default is 1)
      wheelMultiplier: 0.7, // Slows down the actual scroll speed (default is 1)

      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Buttery smooth ease
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,   // Keep this false! Native touch scrolling on phones is better.
      touchMultiplier: 2,
    })

    // 2. Sync Lenis' scroll with GSAP's ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // 3. Bind Lenis to GSAP's internal ticker (requestAnimationFrame)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // 4. Disable GSAP's lag smoothing (prevents stuttering with Lenis)
    gsap.ticker.lagSmoothing(0)
  })

  onUnmounted(() => {
    // Cleanup to prevent memory leaks
    if (lenis) {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
      lenis = null
    }
  })

  return {
    get lenis() {
      return lenis
    },
  }
}