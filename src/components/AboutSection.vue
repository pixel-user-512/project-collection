<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useHorizontalSlideReveal } from '../composables/useGsap'

gsap.registerPlugin(ScrollTrigger)

const START_DATE = new Date('2021-09-01')

const yearsOfExperience = computed(() => {
  const now = new Date()
  const diffMs = now - START_DATE
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25)
  return Math.floor(diffYears)
})

const highlights = computed(() => [
  {
    value: yearsOfExperience.value,
    suffix: '+',
    title: 'Years Work Experience',
    description: 'Building production-ready web applications',
    icon: '💼',
    image: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=600&q=80',
    bgClass: 'bg-secondary-800 light:bg-white',
  },
  {
    value: 50,
    suffix: '+',
    title: 'Projects Delivered',
    description: 'Scalable, maintainable, and user-friendly applications',
    icon: '🚀',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
    bgClass: 'bg-secondary-700 light:bg-secondary-50',
  },
  {
    title: 'Creative Designer',
    description: 'Crafting visually stunning and memorable experiences',
    icon: '🎨',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=80',
    bgClass: 'bg-secondary-600 light:bg-secondary-100',
  },
  {
    title: 'Continuous Learner',
    description: 'Always exploring new technologies and best practices',
    icon: '📚',
    image: 'https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=600&q=80',
    bgClass: 'bg-secondary-500 light:bg-secondary-200',
  },
])

const titleRef = ref(null)
const textRef = ref(null)
const gridRef = ref(null)
const stackRef = ref(null)
const viewMode = ref('stack')
const isMobile = ref(false)

let scrollTriggers = []
let countTweens = []
let dragCleanups = []
let resizeHandler = null

// Check viewport size - on mobile, force grid view and hide the stack
const checkViewport = () => {
  isMobile.value = window.innerWidth < 768 // md breakpoint
  if (isMobile.value && viewMode.value === 'stack') {
    viewMode.value = 'grid'
  }
}

// GSAP counting animation for the numeric highlight cards
const setupCountUpAnimation = () => {
  const container = viewMode.value === 'stack' ? stackRef.value : gridRef.value
  if (!container) return

  // Kill any existing count tweens first
  countTweens.forEach((tween) => {
    tween.scrollTrigger?.kill()
    tween.kill()
  })
  countTweens = []

  const counters = container.querySelectorAll('[data-count]')

  counters.forEach((counter) => {
    const target = parseInt(counter.dataset.count, 10)
    const obj = { val: 0 }

    const tween = gsap.to(obj, {
      val: target,
      duration: Math.max(0.5, target * 0.04),
      ease: 'power2.out',
      scrollTrigger: {
        trigger: counter,
        start: 'top 85%',
        once: true,
      },
      onUpdate: () => {
        counter.textContent = Math.floor(obj.val)
      },
    })
    countTweens.push(tween)
  })
}

// Set up the draggable/swipeable card stack
const setupCardStack = () => {
  if (!stackRef.value) return

  // Clean up previous drag listeners
  dragCleanups.forEach((cleanup) => cleanup())
  dragCleanups = []

  const cards = Array.from(stackRef.value.querySelectorAll('.stack-card'))
  if (cards.length === 0) return

  // Neat stack - cards aligned on top of each other with consistent offsets
  const rotations = [0, 0, 0, 0]
  const offsets = [0, 10, 20, 30]

  // Apply stack positions to all cards based on their index
  const applyStackPositions = () => {
    cards.forEach((card, i) => {
      if (i === 0) {
        gsap.to(card, {
          x: 0,
          y: 0,
          rotation: 0,
          zIndex: cards.length - i,
          duration: 0.3,
          ease: 'power2.out',
        })
      } else {
        gsap.to(card, {
          x: 0,
          y: offsets[i % offsets.length],
          rotation: rotations[i % rotations.length],
          zIndex: cards.length - i,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    })
  }

  // Initial stack positions
  applyStackPositions()

  let isDragging = false
  let startX = 0
  let startY = 0
  let currentX = 0
  let currentY = 0
  let maxDragLeft = 0
  let maxDragRight = 0

  const setupDragOnCard = (card) => {
    // Clean up previous listeners
    dragCleanups.forEach((cleanup) => cleanup())
    dragCleanups = []

    const onDown = (e) => {
      isDragging = true
      const point = e.touches ? e.touches[0] : e
      startX = point.clientX
      startY = point.clientY
      currentX = 0
      currentY = 0
      // Allow the card to be dragged within the viewport bounds
      // so it can move freely on the x-axis on desktop
      const rect = card.getBoundingClientRect()
      maxDragLeft = rect.left
      maxDragRight = window.innerWidth - rect.right
      gsap.killTweensOf(card)
      gsap.set(card, { cursor: 'grabbing' })
    }

    const onMove = (e) => {
      if (!isDragging) return
      const point = e.touches ? e.touches[0] : e
      currentX = point.clientX - startX
      currentY = point.clientY - startY
      // Clamp horizontal drag to keep the card within the viewport
      currentX = Math.max(-maxDragLeft, Math.min(maxDragRight, currentX))
      // On desktop (md+), reduce vertical movement to emphasize horizontal swiping
      const yFactor = isMobile.value ? 1 : 0.3
      gsap.set(card, {
        x: currentX,
        y: currentY * yFactor,
        rotation: currentX * 0.05,
      })
    }

    const onUp = () => {
      if (!isDragging) return
      isDragging = false
      gsap.set(card, { cursor: 'grab' })

      const threshold = 120
      const absX = Math.abs(currentX)
      const absY = Math.abs(currentY)

      // On desktop, prioritize horizontal swipes; on mobile allow both axes
      const shouldSwipe = isMobile.value ? (absX > threshold || absY > threshold) : absX > threshold

      if (shouldSwipe) {
        const directionX = currentX > 0 ? 1 : -1
        const directionY = currentY > 0 ? 1 : -1
        // Constrain swipe distance to keep the card within the viewport
        const maxSwipeX = directionX > 0 ? maxDragRight : maxDragLeft
        const swipeX = directionX * Math.min(Math.abs(currentX) + 100, maxSwipeX)
        const swipeY = isMobile.value ? directionY * 200 : 0

        gsap.to(card, {
          x: swipeX,
          y: swipeY,
          rotation: directionX * 20,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
          onComplete: () => {
            gsap.set(card, { opacity: 1 })
            cards.push(cards.shift())
            applyStackPositions()
            setupDragOnCard(cards[0])
          },
        })
      } else {
        gsap.to(card, {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.4,
          ease: 'power3.out',
        })
      }
    }

    card.addEventListener('pointerdown', onDown)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)

    dragCleanups.push(() => {
      card.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    })
  }

  // Initial setup on the first top card
  setupDragOnCard(cards[0])
}

const setViewMode = (mode) => {
  viewMode.value = mode
  nextTick(() => {
    if (mode === 'stack') {
      setupCardStack()
    }
    setupCountUpAnimation()
  })
}

onMounted(() => {
  // Check viewport size and force grid view on mobile
  checkViewport()
  resizeHandler = () => checkViewport()
  window.addEventListener('resize', resizeHandler)

  // Section title reveal - horizontal slide from left
  scrollTriggers.push(...useHorizontalSlideReveal(titleRef.value, { x: -120, start: 'top 90%', end: 'top 40%' }))

  // Set up the card stack (default view on desktop)
  if (!isMobile.value) {
    setupCardStack()
  }

  // Set up number counting animation
  setupCountUpAnimation()
})

onUnmounted(() => {
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
  }
  scrollTriggers.forEach((trigger) => trigger.kill())
  countTweens.forEach((tween) => {
    tween.scrollTrigger?.kill()
    tween.kill()
  })
  dragCleanups.forEach((cleanup) => cleanup())
})
</script>

<template>
  <section id="about" class="pt-40 sm:pt-48 md:pt-56 pb-20 relative">
    <!-- SVG clip path definition for the concave-up top edge.
         The background layer below is clipped to this shape, so the
         concave dip at the top is transparent - letting the hero's
         lava blobs show through as the About section scrolls over it.
         The background extends above the section so the concave shape
         is visible in the hero's viewport. -->
    <svg width="0" height="0" class="absolute" aria-hidden="true">
      <defs>
        <clipPath id="about-concave-clip" clipPathUnits="objectBoundingBox">
          <path d="M0 0 Q0.5 0.2 1 0 L1 1 L0 1 Z" />
        </clipPath>
      </defs>
    </svg>

    <!-- Background layer clipped to the concave-up shape, extending
         above the section so the dip is visible in the hero. -->
    <div
      class="absolute -top-24 sm:-top-24 md:-top-32 left-0 right-0 bottom-0 bg-dark-800 light:bg-white"
      style="clip-path: url(#about-concave-clip)"
    ></div>

    <!-- Separation line along the concave curve edge -->
    <svg
      class="absolute -top-24 sm:-top-24 md:-top-32 left-0 w-full h-[calc(100%+6rem)] sm:h-[calc(100%+6rem)] md:h-[calc(100%+8rem)] pointer-events-none"
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 0 Q0.5 0.2 1 0"
        fill="none"
        stroke="rgb(var(--color-primary-500) / 0.4)"
        stroke-width="0.002"
        vector-effect="non-scaling-stroke"
      />
    </svg>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-10">
        <h2 ref="titleRef" class="section-title ">About Me</h2>

        <!-- View Mode Toggle (hidden on mobile - only grid view is available) -->
        <div class="hidden md:flex items-center gap-1 p-1 rounded-lg bg-secondary-800 border border-secondary-700 light:bg-secondary-100 light:border-secondary-200">
          <button
            @click="setViewMode('grid')"
            class="px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300"
            :class="
              viewMode === 'grid'
                ? 'bg-primary-600 text-white shadow-md shadow-primary-500/25'
                : 'text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900'
            "
            aria-label="Grid view"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            @click="setViewMode('stack')"
            class="px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300"
            :class="
              viewMode === 'stack'
                ? 'bg-primary-600 text-white shadow-md shadow-primary-500/25'
                : 'text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900'
            "
            aria-label="Stack view"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Tech stack and description on the left -->
        <div ref="textRef" class="order-1 lg:order-1">
          <p class="text-secondary-300 light:text-secondary-700 text-lg leading-relaxed mb-6">
            I build modern web applications that are as functional as they are beautiful. What started as a curiosity about the web has evolved into a career creating impactful digital products. 
          </p>
          <p class="text-secondary-400 light:text-secondary-500 leading-relaxed mb-8">
            I specialize in the Vue.js ecosystem but I'm able to adjust to any framework, always prioritizing clean, maintainable code and highly intuitive user experiences.
          </p>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in ['Vue 3', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS']"
              :key="skill"
              class="px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-full text-sm text-secondary-300 hover:border-primary-500/50 hover:text-primary-400 light:bg-secondary-100 light:border-secondary-200 light:text-secondary-600 light:hover:border-primary-500/50 light:hover:text-primary-600 transition-all duration-300 hover:scale-105 cursor-default"
            >
              {{ skill }}
            </span>
            <span
              v-for="skill in ['Git', 'Figma']"
              :key="skill"
              class="px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-full text-sm text-secondary-300 hover:border-primary-500/50 hover:text-primary-400 light:bg-secondary-100 light:border-secondary-200 light:text-secondary-600 light:hover:border-primary-500/50 light:hover:text-primary-600 transition-all duration-300 hover:scale-105 cursor-default"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Grid view (always visible on mobile, toggleable on md+) -->
        <div v-if="viewMode === 'grid' || isMobile" ref="gridRef" class="order-2 lg:order-2 grid sm:grid-cols-2 gap-6">
          <div
            v-for="item in highlights"
            :key="item.title"
            class="group bg-secondary-800 border border-secondary-700 rounded-xl p-6 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50 light:hover:shadow-primary-500/10"
          >
            <div class="text-3xl mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 inline-block">{{ item.icon }}</div>
            <h3 class="text-white light:text-secondary-900 font-semibold mb-2 text-xl">
              <template v-if="item.value !== undefined">
                <span :data-count="item.value">{{ item.value }}</span>{{ item.suffix }}
              </template>
              <template v-else>
                {{ item.title }}
              </template>
            </h3>
            <p class="text-secondary-400 light:text-secondary-500 text-sm">{{ item.description }}</p>
          </div>
        </div>

        <!-- Card stack view (only on md+ screens) -->
        <div v-else-if="!isMobile" ref="stackRef" class="order-2 lg:order-2 relative h-[12rem] sm:h-[18rem] w-full sm:max-w-none select-none">
          <div
            v-for="(item, index) in highlights"
            :key="item.title"
            class="stack-card absolute inset-0 group border border-secondary-700 rounded-xl overflow-hidden hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-colors duration-300 light:border-secondary-200 light:hover:border-primary-500/50 light:hover:shadow-primary-500/10 cursor-grab active:cursor-grabbing touch-none"
            :class="item.bgClass"
            :style="{ zIndex: highlights.length - index }"
          >
            <!-- Lava lamp style image -->
            <img
              :src="item.image"
              :alt="item.title"
              class="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              loading="lazy"
              draggable="false"
            />

            <!-- Fading dark gradient at the bottom -->
            <div class="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none"></div>

            <!-- Content at the bottom -->
            <div class="absolute inset-x-0 bottom-0 p-4 sm:p-6 pointer-events-none">
              <h3 class="text-white font-bold text-lg sm:text-2xl mb-1 sm:mb-2 drop-shadow-lg">
                <template v-if="item.value !== undefined">
                  <span :data-count="item.value">{{ item.value }}</span>{{ item.suffix }} {{ item.title }}
                </template>
                <template v-else>
                  {{ item.title }}
                </template>
              </h3>
              <p class="text-white/80 text-xs sm:text-sm drop-shadow">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
