<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const contentRef = ref(null)

let timeline = null

const skills = ['Vue 3', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Git', 'Figma']

const paragraphs = [
  {
    text: 'I build modern web applications that are as functional as they are beautiful.',
    size: 'text-xl sm:text-3xl md:text-4xl font-light',
  },
  {
    text: 'What started as a curiosity about the web has evolved into a career creating impactful digital products.',
    size: 'text-lg sm:text-2xl md:text-3xl font-light',
  },
  {
    text: "I specialize in the Vue.js ecosystem but I'm able to adjust to any framework, always prioritizing clean, maintainable code and highly intuitive user experiences.",
    size: 'text-base sm:text-xl md:text-2xl font-light',
  },
]

onMounted(() => {
  const title = contentRef.value.querySelector('.about-title')
  const items = contentRef.value.querySelectorAll('.about-item')
  const progressBar = contentRef.value.querySelector('.about-progress')

  // Respect reduced motion - show everything immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set(title, { opacity: 1, y: 0 })
    gsap.set(items, { y: 0, opacity: 1 })
    gsap.set(progressBar, { scaleX: 1 })
    return
  }

  // Set initial state - all items start below the viewport
  gsap.set(title, { opacity: 0, y: 40 })
  gsap.set(items, { y: '100vh', opacity: 0 })
  gsap.set(progressBar, { scaleX: 0, transformOrigin: 'left center' })

  timeline = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top top',
      end: '+=400%',
      pin: true,
      scrub: 1,
      anticipatePin: 1,
    },
  })

  // Title reveals first, then stays fixed
  timeline.to(title, { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' })

  // Each item slides up one at a time
  items.forEach((item) => {
    timeline.to(item, { y: 0, opacity: 1, duration: 0.225, ease: 'power2.out' })
  })

  // Progress bar fills as items reveal
  timeline.to(progressBar, { scaleX: 1, duration: 1, ease: 'none' }, 0)
})

onUnmounted(() => {
  if (timeline) {
    timeline.scrollTrigger?.kill()
    timeline.kill()
  }
})
</script>

<template>
  <section
    ref="sectionRef"
    id="about"
    class="relative h-screen pt-24 sm:pt-24 md:pt-32 z-10"
  >
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

    <div ref="contentRef" class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
      <!-- Vertical accent line -->
      <div class="absolute left-4 sm:left-6 lg:left-8 top-[12%] bottom-[6%] w-px bg-primary-500/30"></div>

      <!-- Fixed header - stays in place once revealed -->
      <h2 class="about-title section-title absolute top-[12%] left-8 sm:left-12 lg:left-14">
        About Me
      </h2>

      <!-- Content stack - items slide up one at a time -->
      <div class="absolute top-[10%] bottom-6 left-8 sm:left-12 lg:left-14 right-4 sm:right-6 lg:right-8 flex flex-col justify-center gap-2 sm:gap-4">
        <p
          v-for="(para, index) in paragraphs"
          :key="index"
          class="about-item text-secondary-300 light:text-secondary-700 leading-relaxed"
          :class="para.size"
        >
          {{ para.text }}
        </p>

        <!-- Skill tags - last item -->
        <div class="about-item flex flex-wrap gap-3">
          <span
            v-for="skill in skills"
            :key="skill"
            class="px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-full text-sm text-secondary-300 hover:border-primary-500/50 hover:text-primary-400 light:bg-secondary-100 light:border-secondary-200 light:text-secondary-600 light:hover:border-primary-500/50 light:hover:text-primary-600 transition-all duration-300 hover:scale-105 cursor-default"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Scroll progress bar -->
      <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary-700/30 light:bg-secondary-200">
        <div class="about-progress h-full bg-primary-500"></div>
      </div>
    </div>
  </section>
</template>