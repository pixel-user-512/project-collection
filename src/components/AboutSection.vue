<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getLenis } from '../composables/useLenis'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const contentRef = ref(null)

let timeline = null

const skills = ['Vue 3', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Git', 'Figma']

const paragraphs = [
  {
    text: 'I build modern web applications that are as functional as they are beautiful. What started as a curiosity about the web has evolved into a career creating impactful digital products.',
    size: 'text-base sm:text-xl md:text-2xl font-light',
  },
  {
    text: "I specialize in the Vue.js ecosystem but I'm able to adjust to any framework, always prioritizing clean, maintainable code and highly intuitive user experiences.",
    size: 'text-base sm:text-xl md:text-2xl font-light',
  },
]

const stats = [
  {
    title: 'Years Work Experience',
    count: 4,
    subtext: 'Specializing in building modern, responsive frontend applications with a focus on clean, maintainable code and seamless user experiences.',
  },
  {
    title: 'Projects Delivered',
    count: 50,
    subtext: 'Scalable, Maintainable and user friendly designs',
  },
  {
    title: 'Creative Designer',
    count: null,
    subtext: 'Crafting intuitive interfaces that blend aesthetics with functionality',
  },
  {
    title: 'Continuous Learner',
    count: null,
    subtext: "Always exploring new technologies and pushing the boundaries of what's possible",
  },
]

// Split text into words, then each word into individual letters for the wave animation.
const splitIntoWords = (text) => {
  if (!text || typeof text !== 'string') return [];
  return text.trim().split(/\s+/).map((word, wordIndex) => ({
    id: `word-${wordIndex}`,
    letters: word.split('').map((char, charIndex) => ({
      char,
      id: `${wordIndex}-${charIndex}-${char}`,
    })),
  }));
};

// PRE-COMPUTE THE DATA HERE (so Vue doesn't constantly regenerate it and break GSAP)
const processedTitle = splitIntoWords('About Me');

const processedParagraphs = paragraphs.map(para => ({
  ...para,
  words: splitIntoWords(para.text)
}));

const processedStats = stats.map(stat => ({
  ...stat,
  titleWords: stat.count !== null ? splitIntoWords('+ ' + stat.title) : splitIntoWords(stat.title),
  subtextWords: splitIntoWords(stat.subtext)
}));

onMounted(() => {
  const title = contentRef.value.querySelector('.about-title')
  const firstParagraphs = contentRef.value.querySelectorAll('.about-paragraph-first')
  const skillItems = contentRef.value.querySelectorAll('.about-skills')
  const progressBar = contentRef.value.querySelector('.about-progress')
  const titleLetters = title ? title.querySelectorAll('.about-letter') : []
  const statStages = contentRef.value.querySelectorAll('.about-stat-stage')
  const countEls = contentRef.value.querySelectorAll('.about-count')

  // Respect reduced motion - show everything immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set(title, { opacity: 1, y: 0 })
    gsap.set(firstParagraphs, { y: 0, opacity: 1 })
    gsap.set(skillItems, { y: 0, opacity: 1 })
    gsap.set(statStages, { y: 0, opacity: 1 })
    gsap.set(progressBar, { scaleX: 1 })
    countEls.forEach((el) => {
      el.textContent = el.dataset.count
    })
    return
  }

  // Set initial state - all content hidden below position, invisible and blurred
  gsap.set(titleLetters, { y: 30, opacity: 0, filter: 'blur(4px)' })
  gsap.set(contentRef.value.querySelectorAll('.about-paragraph-first .about-letter'), {
    y: 30,
    opacity: 0,
    filter: 'blur(4px)',
  })
  gsap.set(skillItems, { y: '100vh', opacity: 0 })
  gsap.set(statStages, { opacity: 0 })
  statStages.forEach((stage) => {
    gsap.set(stage.querySelectorAll('.about-letter'), {
      y: 30,
      opacity: 0,
      filter: 'blur(4px)',
    })
    const countEl = stage.querySelector('.about-count')
    if (countEl) {
      gsap.set(countEl, { y: 30, opacity: 0 })
    }
  })
  gsap.set(progressBar, { scaleX: 0, transformOrigin: 'left center' })

  // Grab the lenis instance
  const lenis = getLenis()

  timeline = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top top',
      end: '+=1200%',
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      
      // === TURN LENIS OFF AND ON ===
      onEnter: () => { if (lenis) lenis.stop() },       // Scrolling down INTO section (Turn Off)
      onLeave: () => { if (lenis) lenis.start() },      // Scrolling down OUT OF section (Turn On)
      onEnterBack: () => { if (lenis) lenis.stop() },   // Scrolling up INTO section (Turn Off)
      onLeaveBack: () => { if (lenis) lenis.start() },  // Scrolling up OUT OF section (Turn On)
      
      // Maps the progress bar to the exact scroll position
      onUpdate: (self) => {
        gsap.set(progressBar, { scaleX: self.progress })
      },
      // === MAGNETIC SNAPPING ===
      snap: {
        snapTo: "labels", // Snaps automatically to the closest label
        duration: { min: 0.2, max: 0.5 },
        delay: 0.1, // Wait briefly after scrolling stops
        ease: "power2.inOut"
      }
    },
  })

  // === STAGE 1: About Me + paragraphs + skills ===
  // "About Me" title waves in first
  timeline.to(titleLetters, {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    duration: 0.3,
    stagger: 0.02,
    ease: 'power2.out',
  })

  // First set of paragraphs wave in one at a time
  firstParagraphs.forEach((para) => {
    const letters = para.querySelectorAll('.about-letter')
    timeline.to(letters, {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.3,
      stagger: 0.025,
      ease: 'power2.out',
    })
  })

  // Skill tags slide up
  timeline.to(skillItems, { y: 0, opacity: 1, duration: 0.225, ease: 'power2.out' })

  // === LABEL FOR STAGE 1 ===
  timeline.add('stage-1')

  // Stage 1 fades out slowly (opacity only, no y movement)
  // +=0.2 adds a resting zone before the text vanishes
  timeline.to(contentRef.value.querySelector('.about-stage-1'), {
    opacity: 0,
    duration: 0.6,
    ease: 'power2.in',
  }, "+=0.2")

  // === STAT STAGES: 4+ Years, 50+ Projects, Creative Designer, Continuous Learner ===
  statStages.forEach((stage, index) => {
    const stageTitleLetters = stage.querySelectorAll('.about-stat-title .about-letter')
    const stageSubtextLetters = stage.querySelectorAll('.about-stat-subtext .about-letter')
    const countEl = stage.querySelector('.about-count')

    // Show the stage
    timeline.to(stage, { opacity: 1, duration: 0.1, ease: 'none' })

    // Title letters wave in
    timeline.to(stageTitleLetters, {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.3,
      stagger: 0.02,
      ease: 'power2.out',
    })

    // Count element waves in with the title
    if (countEl) {
      timeline.to(countEl, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' })

      // Count-up animation
      const target = parseInt(countEl.dataset.count)
      const countObj = { val: 0 }
      timeline.to(countObj, {
        val: target,
        duration: 0.5,
        ease: 'power2.out',
        onUpdate: () => {
          countEl.textContent = Math.round(countObj.val)
        },
      })
    }

    // Subtext letters wave in
    timeline.to(stageSubtextLetters, {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.3,
      stagger: 0.02,
      ease: 'power2.out',
    })

    // === LABEL FOR THIS STAT ===
    timeline.add(`stat-${index}`)

    // Fade out slowly (opacity only) - except for the last stage
    if (index < statStages.length - 1) {
      timeline.to(stage, { opacity: 0, duration: 0.6, ease: 'power2.in' }, "+=0.2")
    }
  })
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
    <!-- SVG clip path definition for the concave-up top edge. -->
    <svg width="0" height="0" class="absolute" aria-hidden="true">
      <defs>
        <clipPath id="about-concave-clip" clipPathUnits="objectBoundingBox">
          <path d="M0 0 Q0.5 0.2 1 0 L1 1 L0 1 Z" />
        </clipPath>
      </defs>
    </svg>

    <!-- Background layer clipped to the concave-up shape -->
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

      <!-- STAGE 1: About Me + paragraphs + skills -->
      <div class="about-stage-1 absolute top-[2%] bottom-6 left-8 sm:left-12 lg:left-14 right-4 sm:right-6 lg:right-8 flex flex-col justify-center gap-2 sm:gap-4">
        
        <!-- "About Me" title -->
        <h2 class="about-title section-title">
          <template v-for="(word, index) in processedTitle" :key="word.id">
            <span class="whitespace-nowrap">
              <span
                v-for="letter in word.letters"
                :key="letter.id"
                class="about-letter inline-block will-change-transform"
              >{{ letter.char }}</span>
            </span>{{ index < processedTitle.length - 1 ? ' ' : '' }}
          </template>
        </h2>

        <!-- First set of paragraphs -->
        <p
          v-for="(para, pIndex) in processedParagraphs"
          :key="`first-${pIndex}`"
          class="about-paragraph-first text-secondary-300 light:text-secondary-700 leading-relaxed"
          :class="para.size"
        >
          <template v-for="(word, wIndex) in para.words" :key="word.id">
            <span class="whitespace-nowrap">
              <span
                v-for="letter in word.letters"
                :key="letter.id"
                class="about-letter inline-block will-change-transform"
              >{{ letter.char }}</span>
            </span>{{ wIndex < para.words.length - 1 ? ' ' : '' }}
          </template>
        </p>

        <!-- Skill tags -->
        <div class="about-skills flex flex-wrap gap-3">
          <span
            v-for="skill in skills"
            :key="skill"
            class="px-4 py-2 bg-secondary-800/50 border border-secondary-700 rounded-full text-sm text-secondary-300 hover:border-primary-500/50 hover:text-primary-400 light:bg-secondary-100 light:border-secondary-200 light:text-secondary-600 light:hover:border-primary-500/50 light:hover:text-primary-600 transition-all duration-300 hover:scale-105 cursor-default"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- STAT STAGES: 4+ Years, 50+ Projects, Creative Designer, Continuous Learner -->
      <div
        v-for="(stat, index) in processedStats"
        :key="`stat-${index}`"
        class="about-stat-stage absolute top-[20%] bottom-6 left-8 sm:left-12 lg:left-14 right-4 sm:right-6 lg:right-8 flex flex-col justify-start gap-4 sm:gap-6"
      >
        <h2 class="about-stat-title section-title ">
          <template v-if="stat.count !== null">
            <!-- Added tabular-nums and dynamic minWidth to prevent jitter while counting -->
            <span 
              class="about-count inline-block tabular-nums text-left text-primary-500 light:text-primary-600 text-9xl" 
              :data-count="stat.count"
              :style="{ minWidth: `${String(stat.count).length}ch` }"
            >0</span>
            {{ ' ' }}
          </template>
          
          <template v-for="(word, wIndex) in stat.titleWords" :key="word.id">
            <span class="whitespace-nowrap text-7xl">
              <span
                v-for="letter in word.letters"
                :key="letter.id"
                class="about-letter inline-block will-change-transform"
              >{{ letter.char }}</span>
            </span>{{ wIndex < stat.titleWords.length - 1 ? ' ' : '' }}
          </template>
        </h2>
        
        <p class="about-stat-subtext text-secondary-300 light:text-secondary-700 leading-relaxed text-lg sm:text-xl md:text-2xl font-light">
          <template v-for="(word, wIndex) in stat.subtextWords" :key="word.id">
            <span class="whitespace-nowrap">
              <span
                v-for="letter in word.letters"
                :key="letter.id"
                class="about-letter inline-block will-change-transform"
              >{{ letter.char }}</span>
            </span>{{ wIndex < stat.subtextWords.length - 1 ? ' ' : '' }}
          </template>
        </p>
      </div>

      <!-- Scroll progress bar -->
      <div class="absolute bottom-0 left-0 right-0 h-1 bg-secondary-700/30 light:bg-secondary-200">
        <div class="about-progress rounded-full h-full bg-primary-500"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
font-size-jumbo {
  font-size: 1000px;
  line-height: 1;
}
</style>