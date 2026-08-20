<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/projects'
import ProjectWheel from './ProjectWheel.vue'
import ProjectCard from './ProjectCard.vue'
import ProjectDetailModal from './ProjectDetailModal.vue'
import { useAppleTextReveal, useHorizontalSlideReveal } from '../composables/useGsap'

gsap.registerPlugin(ScrollTrigger)

const filter = ref('All')
const viewMode = ref('carousel')
const isMobile = ref(false)
const gridScrollProgress = ref(0)
const sectionProgress = ref(0)
const isSectionInView = ref(false)
const titleRef = ref(null)
const subtitleRef = ref(null)
const filterRef = ref(null)
const wheelContainerRef = ref(null)
const gridContainerRef = ref(null)
const sectionRef = ref(null)
const horizontalContainerRef = ref(null)
const horizontalTrackRef = ref(null)
const selectedProject = ref(null)
const selectedOriginRect = ref(null)

let scrollTriggers = []
let mediaQuery = null
let gridScrollListener = null
let sectionScrollListener = null
let horizontalScrollTrigger = null

const filters = computed(() => {
  const allTech = projects.flatMap((project) => project.tech)
  return ['All', ...new Set(allTech)]
})

const filteredProjects = computed(() => {
  if (filter.value === 'All') return projects
  return projects.filter((project) => project.tech.includes(filter.value))
})

const setFilter = (tech) => {
  filter.value = tech
}

const openProjectDetail = ({ project, originRect }) => {
  selectedProject.value = project
  selectedOriginRect.value = originRect
}

const closeProjectDetail = () => {
  selectedProject.value = null
  selectedOriginRect.value = null
}

watch(filteredProjects, async () => {
  await nextTick()
  updateGridScrollProgress()
  if (viewMode.value === 'horizontal') {
    setupHorizontalScroll()
  }
})

const setViewMode = (mode) => {
  if (isMobile.value) return
  viewMode.value = mode
  if (mode === 'horizontal') {
    nextTick(() => setupHorizontalScroll())
  } else {
    killHorizontalScroll()
  }
}

const handleMediaChange = (e) => {
  isMobile.value = e.matches
  if (e.matches) {
    viewMode.value = 'grid'
    killHorizontalScroll()
  }
}

const updateGridScrollProgress = () => {
  if (!gridContainerRef.value) return
  const rect = gridContainerRef.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const totalScrollable = rect.height - viewportHeight
  const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable)
  gridScrollProgress.value = totalScrollable > 0 ? (scrolled / totalScrollable) * 100 : 100
}

const setupGridScrollTracking = () => {
  if (gridScrollListener) {
    window.removeEventListener('scroll', gridScrollListener, { passive: true })
  }
  gridScrollListener = () => updateGridScrollProgress()
  window.addEventListener('scroll', gridScrollListener, { passive: true })
  updateGridScrollProgress()
}

const updateSectionProgress = () => {
  if (!sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const sectionHeight = rect.height
  const totalScrollable = sectionHeight - viewportHeight

  // Section is in view when its top is above the viewport bottom
  // and its bottom is below the viewport top
  isSectionInView.value = rect.top < viewportHeight && rect.bottom > 0

  if (totalScrollable > 0) {
    const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable)
    sectionProgress.value = (scrolled / totalScrollable) * 100
  } else {
    // If section fits in viewport, show 100% when in view
    sectionProgress.value = isSectionInView.value ? 100 : 0
  }
}

const setupSectionScrollTracking = () => {
  if (sectionScrollListener) {
    window.removeEventListener('scroll', sectionScrollListener, { passive: true })
  }
  sectionScrollListener = () => updateSectionProgress()
  window.addEventListener('scroll', sectionScrollListener, { passive: true })
  updateSectionProgress()
}

const setupHorizontalScroll = () => {
  killHorizontalScroll()

  if (!horizontalContainerRef.value || !horizontalTrackRef.value || !wheelContainerRef.value) return

  const track = horizontalTrackRef.value
  const container = wheelContainerRef.value

  // Calculate the total scrollable distance
  const getScrollDistance = () => {
    return track.scrollWidth - window.innerWidth
  }

  const scrollDistance = getScrollDistance()
  if (scrollDistance <= 0) return

  horizontalScrollTrigger = gsap.to(track, {
    x: -scrollDistance,
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: () => `+=${scrollDistance}`,
      pin: true,
      pinSpacing: true,
      scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      preventOverlaps: true,
      fastScrollEnd: true,
    },
  })
}

const killHorizontalScroll = () => {
  if (horizontalScrollTrigger) {
    horizontalScrollTrigger.scrollTrigger?.kill()
    horizontalScrollTrigger.kill()
    horizontalScrollTrigger = null
  }
}

onMounted(() => {
  // Detect mobile and force grid mode
  mediaQuery = window.matchMedia('(max-width: 768px)')
  isMobile.value = mediaQuery.matches
  if (isMobile.value) {
    viewMode.value = 'grid'
  }
  mediaQuery.addEventListener('change', handleMediaChange)

  // Section title reveal - horizontal slide from left
  scrollTriggers.push(...useHorizontalSlideReveal(titleRef.value, { x: -120, start: 'top 90%', end: 'top 40%' }))
  scrollTriggers.push(...useAppleTextReveal(wheelContainerRef.value, { y: 60, duration: 1.2, start: 'top 80%', blur: 14 }))

  // Set up grid scroll progress tracking
  setupGridScrollTracking()

  // Set up section scroll progress tracking for fixed progress bar
  setupSectionScrollTracking()
})

onUnmounted(() => {
  scrollTriggers.forEach((trigger) => trigger.kill())
  killHorizontalScroll()
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', handleMediaChange)
  }
  if (gridScrollListener) {
    window.removeEventListener('scroll', gridScrollListener, { passive: true })
  }
  if (sectionScrollListener) {
    window.removeEventListener('scroll', sectionScrollListener, { passive: true })
  }
})
</script>

<template>
  <section
    ref="sectionRef"
    id="projects"
    class="pt-20 pb-0 bg-dark-800 light:bg-white relative"
    :class="viewMode === 'horizontal' ? 'overflow-visible' : 'overflow-hidden'"
  >
    <!-- Decorative gradient -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>

    <!-- Fixed Navigation Progress Bar -->
    <div
      v-if="isSectionInView"
      class="fixed top-16 left-0 right-0 z-40 transition-opacity duration-300"
      :class="sectionProgress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'"
    >
      <div class="h-1 bg-secondary-800/50 light:bg-secondary-200/50 backdrop-blur-sm">
        <div
          class="h-full bg-gradient-to-r from-primary-500 to-accent-500 light:from-primary-600 light:to-accent-600 transition-all duration-150 ease-out"
          :style="{ width: sectionProgress + '%' }"
        ></div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 ref="titleRef" class="section-title">Featured Projects</h2>
      <p ref="subtitleRef" class="section-subtitle">A selection of projects I've built</p>

      <!-- Filter + View Toggle -->
      <div ref="filterRef" class="flex flex-wrap items-center gap-3 mb-10">
        <div class="flex flex-wrap gap-3">
          <button
            v-for="tech in filters"
            :key="tech"
            @click="setFilter(tech)"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
            :class="
              filter === tech
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                : 'bg-secondary-800 text-secondary-400 hover:text-white border border-secondary-700 light:bg-white light:text-secondary-500 light:hover:text-secondary-900 light:border-secondary-200'
            "
          >
            {{ tech }}
          </button>
        </div>

        <!-- View Mode Toggle (hidden on mobile) -->
        <div v-if="!isMobile" class="ml-auto flex items-center gap-1 p-1 rounded-lg bg-secondary-800 border border-secondary-700 light:bg-secondary-100 light:border-secondary-200">
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
            @click="setViewMode('carousel')"
            class="px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300"
            :class="
              viewMode === 'carousel'
                ? 'bg-primary-600 text-white shadow-md shadow-primary-500/25'
                : 'text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900'
            "
            aria-label="Carousel view"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button
            @click="setViewMode('horizontal')"
            class="px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300"
            :class="
              viewMode === 'horizontal'
                ? 'bg-primary-600 text-white shadow-md shadow-primary-500/25'
                : 'text-secondary-400 hover:text-white light:text-secondary-500 light:hover:text-secondary-900'
            "
            aria-label="Horizontal scroll view"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Projects Display -->
    <div ref="wheelContainerRef" class="w-full">
      <!-- Grid Mode -->
      <div v-if="viewMode === 'grid'" ref="gridContainerRef" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
            @open="openProjectDetail"
          />
        </div>

        <!-- Grid Progress Bar Pagination -->
        <div class="mt-10 flex justify-center">
          <div class="w-64 sm:w-80">
            
          </div>
        </div>
      </div>

      <!-- Carousel Mode -->
      <ProjectWheel v-else-if="viewMode === 'carousel'" :projects="filteredProjects" @open="openProjectDetail" />

      <!-- Horizontal Scroll Mode -->
      <div v-else-if="viewMode === 'horizontal'" ref="horizontalContainerRef" class="relative h-screen overflow-hidden">
        <div ref="horizontalTrackRef" class="flex items-center gap-8 px-8 sm:px-12 lg:px-16 h-full w-max">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="w-[320px] sm:w-[380px] lg:w-[420px] shrink-0"
          >
            <ProjectCard :project="project" @open="openProjectDetail" />
          </div>
        </div>  
      </div>
    </div>

    <!-- Project Detail Modal -->
    <ProjectDetailModal
      v-if="selectedProject"
      :project="selectedProject"
      :origin-rect="selectedOriginRect"
      @close="closeProjectDetail"
    />
  </section>
</template>