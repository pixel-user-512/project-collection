<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { gsap } from 'gsap'
import ProjectPreview from './ProjectPreview.vue'
import RedemptionApp from './RedemptionApp.vue'
import { getLenis } from '../composables/useLenis'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  originRect: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['close'])

const isRedemptionProject = computed(() => {
  const title = props.project.title.toLowerCase()
  return title.includes('redemption') || title.includes('merchant')
})

const showFullscreenDemo = ref(false)

const defaultFeatures = [
  'Responsive design that works across all devices',
  'Optimized performance with lazy loading and code splitting',
  'Clean, maintainable code following best practices',
  'Accessible UI with semantic HTML and ARIA labels',
]

const overlayRef = ref(null)
const cardRef = ref(null)
const contentRef = ref(null)
const demoContentRef = ref(null)
const closeBtnRef = ref(null)
const isClosing = ref(false)
let timeline = null

const openAnimation = async () => {
  await nextTick()
  if (!overlayRef.value || !cardRef.value) return

  const overlay = overlayRef.value
  const card = cardRef.value
  const content = contentRef.value

  // Set initial state - card starts at the origin position/size
  const origin = props.originRect || { left: 0, top: 0, width: 0, height: 0 }
  const viewportW = window.innerWidth
  const viewportH = window.innerHeight

  gsap.set(overlay, { opacity: 0, pointerEvents: 'none' })
  gsap.set(card, {
    position: 'fixed',
    left: origin.left,
    top: origin.top,
    width: origin.width,
    height: origin.height,
    margin: 0,
    borderRadius: '1rem',
    zIndex: 9999,
    overflow: 'hidden',
  })
  gsap.set(content, { opacity: 0, y: 30 })

  // Animate overlay fade in
  gsap.to(overlay, {
    opacity: 1,
    duration: 0.3,
    ease: 'power2.out',
    pointerEvents: 'auto',
  })

  // Animate card to fullscreen
  timeline = gsap.timeline({
    defaults: { ease: 'power3.inOut' },
  })

  timeline
    .to(card, {
      left: 0,
      top: 0,
      width: viewportW,
      height: viewportH,
      borderRadius: 0,
      duration: 0.7,
    })
    .to(
      content,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      '-=0.3'
    )
    .from(
      closeBtnRef.value,
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: 'back.out(1.7)',
      },
      '-=0.2'
    )
}

const closeAnimation = () => {
  if (isClosing.value) return
  isClosing.value = true

  const overlay = overlayRef.value
  const card = cardRef.value
  const content = contentRef.value
  const origin = props.originRect || { left: 0, top: 0, width: 0, height: 0 }

  if (timeline) timeline.kill()

  const tl = gsap.timeline({
    defaults: { ease: 'power3.inOut' },
    onComplete: () => {
      emit('close')
    },
  })

  tl.to(content, {
    opacity: 0,
    y: -30,
    duration: 0.3,
    ease: 'power2.in',
  })
    .to(
      card,
      {
        left: origin.left,
        top: origin.top,
        width: origin.width,
        height: origin.height,
        borderRadius: '1rem',
        duration: 0.6,
      },
      '-=0.1'
    )
    .to(
      overlay,
      {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      },
      '-=0.3'
    )
}

const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    closeAnimation()
  }
}

// Prevent wheel events from bubbling up to Lenis's global listener
const handleWheel = (e) => {
  e.stopPropagation()
}

// Attach wheel listener when the fullscreen demo opens
watch(showFullscreenDemo, (open) => {
  if (open) {
    nextTick(() => {
      demoContentRef.value?.addEventListener('wheel', handleWheel, { passive: false })
    })
  } else {
    demoContentRef.value?.removeEventListener('wheel', handleWheel)
  }
})

onMounted(() => {
  openAnimation()
  document.body.style.overflow = 'hidden'
  // Stop Lenis smooth scrolling so the modal can scroll independently
  const lenis = getLenis()
  if (lenis) lenis.stop()
  // Stop wheel events from reaching Lenis so native scroll works in the modal
  contentRef.value?.addEventListener('wheel', handleWheel, { passive: false })
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.body.style.overflow = ''
  // Restore Lenis smooth scrolling
  const lenis = getLenis()
  if (lenis) lenis.start()
  contentRef.value?.removeEventListener('wheel', handleWheel)
  demoContentRef.value?.removeEventListener('wheel', handleWheel)
  window.removeEventListener('keydown', handleKeydown)
  if (timeline) timeline.kill()
})
</script>

<template>
  <div
    ref="overlayRef"
    class="fixed inset-0 z-[9998] bg-dark-900/90 light:bg-secondary-900/90 backdrop-blur-sm"
    @click.self="closeAnimation"
  >
    <!-- Animated Card Container -->
    <div ref="cardRef" class="bg-secondary-800 light:bg-white shadow-2xl">
      <!-- Close Button -->
      <button
        ref="closeBtnRef"
        @click="closeAnimation"
        class="fixed top-4 right-4 z-[10000] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-900/80 light:bg-white/90 border border-secondary-700 light:border-secondary-200 flex items-center justify-center text-secondary-300 light:text-secondary-600 hover:text-primary-400 light:hover:text-primary-600 hover:border-primary-500/50 transition-colors duration-200 shadow-lg backdrop-blur-sm"
        aria-label="Close project details"
      >
        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Fullscreen Content -->
      <div ref="contentRef" class="h-full w-full overflow-y-auto overscroll-contain">
        <div class="min-h-full flex flex-col lg:flex-row">
          <!-- Preview Section -->
          <div class="relative lg:w-1/2 lg:h-screen overflow-hidden flex-shrink-0">
            <!-- Static image on mobile -->
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-[60vh] sm:h-[55vh] lg:hidden object-cover"
            />
            <!-- Interactive preview on desktop -->
            <ProjectPreview :project="project" class="hidden lg:block w-full h-full" />

            <!-- Title overlay on preview (mobile) -->
            <div class="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:hidden bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent">
              <h2 class="text-xl sm:text-3xl font-bold text-white mb-2">{{ project.title }}</h2>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="text-xs text-primary-300 bg-primary-500/20 px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <!-- Details Section -->
          <div class="flex-1 p-5 sm:p-8 lg:p-12 lg:overflow-y-auto">
            <!-- Title (desktop) -->
            <h2 class="hidden lg:block text-4xl font-bold text-white light:text-secondary-900 mb-4">
              {{ project.title }}
            </h2>

            <!-- Tech Tags (desktop) -->
            <div class="hidden lg:flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="text-sm text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Description -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-primary-400 light:text-primary-600 mb-3 uppercase tracking-wider">
                About This Project
              </h3>
              <p class="text-secondary-300 light:text-secondary-600 leading-relaxed text-lg">
                {{ project.description }}
              </p>
            </div>

            <!-- Features placeholder -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-primary-400 light:text-primary-600 mb-3 uppercase tracking-wider">
                Key Features
              </h3>
              <ul class="space-y-3">
                <li
                  v-for="(feature, index) in project.features || defaultFeatures"
                  :key="index"
                  class="flex items-start gap-3 text-secondary-300 light:text-secondary-600"
                >
                  <svg class="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Links -->
            <div class="flex flex-wrap gap-4">
              <!-- <a
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary-700 light:bg-secondary-100 text-white light:text-secondary-900 font-medium hover:bg-primary-600 light:hover:bg-primary-600 light:hover:text-white transition-colors duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
                View Code
              </a> -->
              <button
                @click="showFullscreenDemo = true"
                class="lg:hidden inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors duration-300 shadow-lg shadow-primary-500/25 cursor-pointer"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Show Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fullscreen Redemption Demo Overlay -->
    <transition name="demo-fade">
      <div
        v-if="showFullscreenDemo"
        class="fixed inset-0 z-[10001] bg-dark-900/95 light:bg-secondary-900/95 backdrop-blur-sm flex flex-col"
      >
        <div class="flex items-center justify-between px-4 py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span class="text-sm font-semibold text-white light:text-secondary-900">Live Demo</span>
          </div>
          <button
            @click="showFullscreenDemo = false"
            class="w-9 h-9 rounded-full bg-secondary-700/50 light:bg-secondary-100 flex items-center justify-center text-secondary-300 light:text-secondary-600 hover:text-white light:hover:text-secondary-900 transition-colors cursor-pointer"
            aria-label="Close live demo"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div ref="demoContentRef" class="flex-1 min-h-0 overflow-y-auto overscroll-contain">
          <RedemptionApp v-if="isRedemptionProject" class="w-full h-full" />
          <ProjectPreview v-else :project="project" class="w-full h-full" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.demo-fade-enter-active,
.demo-fade-leave-active {
  transition: opacity 0.25s ease;
}
.demo-fade-enter-from,
.demo-fade-leave-to {
  opacity: 0;
}
</style>
