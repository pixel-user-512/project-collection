<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useAppleTextReveal } from '../composables/useGsap'
import { getLenis } from '../composables/useLenis'

const currentYear = new Date().getFullYear()
const footerRef = ref(null)

let scrollTriggers = []

const scrollToTop = () => {
  const lenis = getLenis()
  if (lenis) {
    lenis.scrollTo(0)
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

onMounted(() => {
  scrollTriggers = useAppleTextReveal(footerRef.value, {
    y: 30,
    duration: 1,
    start: 'top bottom',
    blur: 8,
  })
})

onUnmounted(() => {
  scrollTriggers.forEach((trigger) => trigger.kill())
})
</script>

<template>
  <footer ref="footerRef" class="bg-dark-800 border-t border-dark-700 light:bg-white light:border-secondary-200 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="text-secondary-400 light:text-secondary-500 text-sm">
          © {{ currentYear }} Kenneth Paul Cortez
        </div>
        <div class="flex items-center gap-6">
          <a
            href="#home"
            @click.prevent="scrollToTop"
            class="text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"
          >
            Home
          </a>
          <a
            href="#about"
            class="text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"
          >
            About
          </a>
          <a
            href="#projects"
            class="text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"
          >
            Projects
          </a>
          <a
            href="#contact"
            class="text-secondary-400 hover:text-primary-400 light:text-secondary-500 light:hover:text-primary-600 transition-colors duration-200 text-sm"
          >
            Contact
          </a>
        </div>
        <div class="text-secondary-500 light:text-secondary-400 text-sm">
          Built with <span class="text-primary-500">Vue 3</span> & <span class="text-primary-500">Tailwind CSS</span>
        </div>
      </div>
    </div>
  </footer>
</template>