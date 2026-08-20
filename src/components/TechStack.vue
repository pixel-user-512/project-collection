<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { techStack } from '../data/techStack'
import { useHorizontalSlideReveal } from '../composables/useGsap'

gsap.registerPlugin(ScrollTrigger)

const categories = computed(() => {
  return ['All', ...new Set(techStack.map((item) => item.category))]
})

const activeCategory = ref('All')
const gridRef = ref(null)
const titleRef = ref(null)
const subtitleRef = ref(null)
const filterRef = ref(null)
const viewportWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

let scrollTriggers = []
let brickTweens = []
let hoverCleanups = []
let resizeCleanup = null
let lastIsDesktop = null

const filteredTech = computed(() => {
  if (activeCategory.value === 'All') return techStack
  return techStack.filter((item) => item.category === activeCategory.value)
})

// Only apply the brick wall stagger when there's more than one row of items.
// Desktop (>=1024px) has 4 columns, tablet (640-1024px) has 2 columns.
const hasMultipleRows = computed(() => {
  if (activeCategory.value !== 'All') return false
  const count = filteredTech.value.length
  if (viewportWidth.value >= 1024) return count > 4
  if (viewportWidth.value >= 640) return count > 2
  return false
})

const setCategory = (category) => {
  activeCategory.value = category
}

// Set up parallax for alternating columns.
// 2nd and 4th columns (0-indexed 1 and 3) move up when scrolling up and
// down when scrolling down, creating a depth effect against the static
// 1st and 3rd columns. Only applied on medium or larger screens (>= 768px).
const setupBrickScrollAnimations = () => {
  if (!gridRef.value) return

  const wrappers = gridRef.value.querySelectorAll('.brick-wrapper')

  // Kill any existing tweens/triggers first
  brickTweens.forEach((tween) => {
    tween.scrollTrigger?.kill()
    tween.kill()
  })
  brickTweens = []

  // Only apply parallax on the "All" tab
  if (activeCategory.value !== 'All') {
    wrappers.forEach((wrapper) => {
      const brick = wrapper.querySelector('.tech-brick')
      if (brick) gsap.set(brick, { yPercent: 0 })
    })
    return
  }

  // Only apply parallax on medium or larger screens (md breakpoint = 768px)
  const isMediumOrLarger = window.innerWidth >= 768

  wrappers.forEach((wrapper) => {
    const brick = wrapper.querySelector('.tech-brick')
    if (!brick) return

    const column = parseInt(wrapper.dataset.column, 10)

    // On small screens, ensure no residual parallax transform remains
    if (!isMediumOrLarger) {
      gsap.set(brick, { yPercent: 0 })
      return
    }

    // Parallax only for alternating columns (2nd and 4th, 0-indexed 1 and 3)
    if (column === 1 || column === 3) {
      const tween = gsap.fromTo(
        brick,
        { yPercent: -20 },
        {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: gridRef.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      )
      brickTweens.push(tween)
    }
  })
}

// Set up circular hover/touch image reveal
const setupHoverReveals = () => {
  if (!gridRef.value) return

  // Clean up previous listeners
  hoverCleanups.forEach((cleanup) => cleanup())
  hoverCleanups = []

  const bricks = gridRef.value.querySelectorAll('.tech-brick')

  bricks.forEach((brick) => {
    const imageOverlay = brick.querySelector('.tech-image-overlay')
    if (!imageOverlay) return

    // Set initial clip-path - hidden at top center
    gsap.set(imageOverlay, {
      clipPath: 'circle(0% at 50% 0%)',
      visibility: 'hidden',
    })

    const showImage = () => {
      // Kill any in-progress tween to avoid race conditions
      gsap.killTweensOf(imageOverlay)
      gsap.set(imageOverlay, { visibility: 'visible' })
      gsap.to(imageOverlay, {
        clipPath: 'circle(150% at 50% 0%)',
        duration: 0.6,
        ease: 'power3.out',
        overwrite: 'auto',
      })
    }

    const hideImage = () => {
      // Kill any in-progress tween to avoid race conditions
      gsap.killTweensOf(imageOverlay)
      gsap.set(imageOverlay, { visibility: 'hidden' })
      gsap.to(imageOverlay, {
        clipPath: 'circle(0% at 50% 0%)',
        duration: 0.5,
        ease: 'power3.in',
        overwrite: 'auto',
      })
    }

    // Desktop hover
    brick.addEventListener('mouseenter', showImage)
    brick.addEventListener('mouseleave', hideImage)

    // Mobile touch - tap and hold shows, release hides
    brick.addEventListener('touchstart', showImage, { passive: true })
    brick.addEventListener('touchend', hideImage, { passive: true })
    brick.addEventListener('touchcancel', hideImage, { passive: true })

    hoverCleanups.push(() => {
      brick.removeEventListener('mouseenter', showImage)
      brick.removeEventListener('mouseleave', hideImage)
      brick.removeEventListener('touchstart', showImage)
      brick.removeEventListener('touchend', hideImage)
      brick.removeEventListener('touchcancel', hideImage)
    })
  })
}

onMounted(() => {
  // Section title reveal - horizontal slide from left
  scrollTriggers.push(...useHorizontalSlideReveal(titleRef.value, { x: -120, start: 'top 90%', end: 'top 40%' }))

  // Set up brick wall scroll animations
  setupBrickScrollAnimations()

  // Set up hover/touch image reveals
  setupHoverReveals()

  // Re-evaluate parallax when crossing the medium/small breakpoint
  lastIsDesktop = window.innerWidth >= 768
  const handleResize = () => {
    viewportWidth.value = window.innerWidth
    const isMediumOrLarger = window.innerWidth >= 768
    if (isMediumOrLarger !== lastIsDesktop) {
      lastIsDesktop = isMediumOrLarger
      setupBrickScrollAnimations()
    }
  }
  window.addEventListener('resize', handleResize)
  resizeCleanup = () => window.removeEventListener('resize', handleResize)
})

onUnmounted(() => {
  scrollTriggers.forEach((trigger) => trigger.kill())
  brickTweens.forEach((tween) => {
    tween.scrollTrigger?.kill()
    tween.kill()
  })
  hoverCleanups.forEach((cleanup) => cleanup())
  resizeCleanup?.()
})

// Re-setup animations when filter changes
watch(filteredTech, async () => {
  await nextTick()
  setupBrickScrollAnimations()
  setupHoverReveals()
})
</script>

<template>
  <section id="tech-stack" class="py-20 bg-dark-800 light:bg-secondary-100 relative overflow-hidden">
    <!-- Decorative gradient -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 ref="titleRef" class="section-title text-4xl font-bold text-white light:text-secondary-900 mb-6">Tech Stack</h2>
      <p ref="subtitleRef" class="section-subtitle text-secondary-400 light:text-secondary-500 mb-8">Technologies and tools I work with</p>

      <!-- Category Filter -->
      <div ref="filterRef" class="flex flex-wrap gap-3 mb-10">
        <button
          v-for="category in categories"
          :key="category"
          @click="setCategory(category)"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
          :class="
            activeCategory === category
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
              : 'bg-secondary-800 text-secondary-400 hover:text-white border border-secondary-700 light:bg-white light:text-secondary-500 light:hover:text-secondary-900 light:border-secondary-200'
          "
        >
          {{ category }}
        </button>
      </div>

      <!-- Brick Wall Grid -->
      <div ref="gridRef" class="brick-wall">
        <div
          v-for="(tech, index) in filteredTech"
          :key="tech.name"
          :data-column="index % 4"
          class="brick-wrapper"
          :class="{ 'brick-offset': hasMultipleRows }"
        >
          <div
            class="tech-brick group relative bg-secondary-800 border border-secondary-700 rounded-xl p-6 overflow-hidden hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/10 transition-colors duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500 light:hover:shadow-primary-500/10"
          >
            <!-- Hover Overlay - circular reveal from top with tech image -->
            <div class="tech-image-overlay absolute inset-0 z-10 flex items-center justify-center bg-dark-900/95 light:bg-white/95 backdrop-blur-sm overflow-hidden">
              <img
                :src="tech.image"
                :alt="`${tech.name} logo`"
                class="w-24 h-24 object-contain drop-shadow-lg"
                loading="lazy"
              />
            </div>

            <!-- Card Content -->
            <div class="relative z-0 flex flex-col h-full">
              <div class="flex items-start justify-between mb-4">
                <div class="w-10 h-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <img
                    :src="tech.image"
                    :alt="`${tech.name} logo`"
                    class="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span class="text-xs text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full">
                  {{ tech.category }}
                </span>
              </div>
              <h3 class="text-white light:text-secondary-900 font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-300">{{ tech.name }}</h3>
              <p class="text-secondary-300 light:text-secondary-500 text-sm">{{ tech.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Brick wall grid - staggered rows like a wall of bricks */
.brick-wall {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  align-items: start;
}

/* Alternating brick wall stagger.
   Wrappers in columns 2 and 4 (0-indexed 1 and 3) are pushed down by half a brick,
   while wrappers in columns 1 and 3 (0-indexed 0 and 2) stay at the top level.
   The offset is on the wrapper so the card inside keeps its full height.
   Using data-column instead of nth-child ensures the offset is column-aware
   and doesn't break when filtering items.
   The .brick-offset class is only applied when there's more than one row.
   Using margin-top instead of transform ensures the grid layout accounts
   for the offset, preventing overlap between rows. */


/* All bricks have the same height for a uniform wall */
.tech-brick {
  min-height: 12rem;
}

/* Responsive: 2 columns on tablet */
@media (max-width: 1024px) {
  .brick-wall {
    grid-template-columns: repeat(2, 1fr);
  }

  .brick-offset[data-column="1"],
  .brick-offset[data-column="3"] {
    margin-top: 1.5rem;
  }
}

/* Responsive: 1 column on mobile */
@media (max-width: 640px) {
  .brick-wall {
    grid-template-columns: 1fr;
  }

  .brick-offset[data-column="1"],
  .brick-offset[data-column="3"] {
    margin-top: 0;
  }
}
</style>