<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useAppleTextReveal, useHorizontalSlideReveal } from '../composables/useGsap'

const START_DATE = new Date('2021-09-01')

const yearsOfExperience = computed(() => {
  const now = new Date()
  const diffMs = now - START_DATE
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25)
  return Math.floor(diffYears)
})

const highlights = computed(() => [
  {
    title: `${yearsOfExperience.value}+ Years Experience`,
    description: 'Building production-ready web applications',
    icon: '💼',
  },
  {
    title: '50+ Projects Delivered',
    description: 'From small startups to enterprise solutions',
    icon: '🚀',
  },
  {
    title: 'Clean Code Advocate',
    description: 'Writing maintainable, testable, and scalable code',
    icon: '✨',
  },
  {
    title: 'Continuous Learner',
    description: 'Always exploring new technologies and best practices',
    icon: '📚',
  },
])

const titleRef = ref(null)
const textRef = ref(null)
const cardsRef = ref(null)

let scrollTriggers = []

onMounted(() => {
  // Section title reveal - horizontal slide from left
  scrollTriggers.push(...useHorizontalSlideReveal(titleRef.value, { x: -120, start: 'top 90%', end: 'top 40%' }))

  // Highlight cards reveal with stagger - Apple style
  scrollTriggers.push(
    ...useAppleTextReveal(cardsRef.value, {
      y: 60,
      duration: 1.2,
      stagger: 0.15,
      start: 'top 80%',
      blur: 14,
    })
  )
})

onUnmounted(() => {
  scrollTriggers.forEach((trigger) => trigger.kill())
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
      <h2 ref="titleRef" class="section-title ">About Me</h2>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Highlight cards on the left -->
        <div ref="cardsRef" class="grid sm:grid-cols-2 gap-6 order-2 lg:order-1">
          <div
            v-for="item in highlights"
            :key="item.title"
            class="group bg-secondary-800 border border-secondary-700 rounded-xl p-6 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50 light:hover:shadow-primary-500/10"
          >
            <div class="text-3xl mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 inline-block">{{ item.icon }}</div>
            <h3 class="text-white light:text-secondary-900 font-semibold mb-2">{{ item.title }}</h3>
            <p class="text-secondary-400 light:text-secondary-500 text-sm">{{ item.description }}</p>
          </div>
        </div>

        <!-- Tech stack and description on the right -->
        <div ref="textRef" class="order-1 lg:order-2">
          <p class="text-secondary-300 light:text-secondary-700 text-lg leading-relaxed mb-6">
            I'm a passionate developer with a strong focus on building modern web applications
            that are both functional and beautiful. My journey in software development started
            with a curiosity for how things work on the web, and has evolved into a career
            building products that make a difference.
          </p>
          <p class="text-secondary-400 light:text-secondary-500 leading-relaxed mb-8">
            I specialize in the Vue.js ecosystem, but I'm comfortable working across the full
            stack. I believe in writing clean, maintainable code and creating intuitive user
            experiences that people love to use.
          </p>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in ['Vue 3', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST APIs']"
              :key="skill"
              class="px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-full text-sm text-secondary-300 hover:border-primary-500/50 hover:text-primary-400 light:bg-secondary-100 light:border-secondary-200 light:text-secondary-600 light:hover:border-primary-500/50 light:hover:text-primary-600 transition-all duration-300 hover:scale-105 cursor-default"
            >
              {{ skill }}
            </span>
            <span
              v-for="skill in ['Git', 'Docker', 'Figma']"
              :key="skill"
              class="px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-full text-sm text-secondary-300 hover:border-primary-500/50 hover:text-primary-400 light:bg-secondary-100 light:border-secondary-200 light:text-secondary-600 light:hover:border-primary-500/50 light:hover:text-primary-600 transition-all duration-300 hover:scale-105 cursor-default"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>