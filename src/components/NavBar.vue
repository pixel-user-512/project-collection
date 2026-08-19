<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { gsap } from 'gsap'
import { useTheme } from '../composables/useTheme'
import { useMouseTrail } from '../composables/useMouseTrail'
import { useColorPalette } from '../composables/useColorPalette'
import { useContrastSampler } from '../composables/useContrastSampler'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isSettingsOpen = ref(false)
const navRef = ref(null)
const mobileMenuRef = ref(null)
const settingsRef = ref(null)
const navLinksRef = ref(null)

const { isDark, toggleTheme } = useTheme()
const { isMouseTrailEnabled, toggleMouseTrail } = useMouseTrail()
const { colorPalettes, selectedPalette, setPalette } = useColorPalette()

// Dynamic contrast for light mode - nav text adapts to background (white bg or blobs)
const { isDarkBackground } = useContrastSampler({
  elements: [
    { key: 'nav', el: navLinksRef },
  ],
})

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToTop = (e) => {
  e.preventDefault()
  isMenuOpen.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleClickOutside = (e) => {
  if (settingsRef.value && !settingsRef.value.contains(e.target)) {
    isSettingsOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)

  // Nav entrance animation
  gsap.fromTo(
    navRef.value,
    { y: -80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2,
      clearProps: 'all',
    }
  )
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})

// Animate mobile menu open/close
watch(isMenuOpen, async (isOpen) => {
  await nextTick()
  if (mobileMenuRef.value) {
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.value,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
      )
      gsap.from(mobileMenuRef.value.querySelectorAll('a'), {
        x: -20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.3,
        ease: 'power2.out',
      })
    } else {
      gsap.to(mobileMenuRef.value, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      })
    }
  }
})

// Animate settings dropdown open/close
watch(isSettingsOpen, async (isOpen) => {
  await nextTick()
  const dropdown = settingsRef.value?.querySelector('.settings-dropdown')
  if (dropdown) {
    if (isOpen) {
      gsap.fromTo(
        dropdown,
        { opacity: 0, y: -10, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: 'power2.out' }
      )
    } else {
      gsap.to(dropdown, {
        opacity: 0,
        y: -10,
        scale: 0.95,
        duration: 0.2,
        ease: 'power2.in',
      })
    }
  }
})
</script>

<template>
  <nav
    ref="navRef"
    class="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
    :class="isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg light:bg-white/95 light:shadow-secondary-200' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <a
          href="#home"
          @click="scrollToTop"
          class="text-xl font-bold text-white light:text-secondary-900 group transition-colors duration-300"
  
        >
          <span class="text-primary-500 "><</span class="light:text-black">KPC<span class="text-primary-500">/></span>
        </a>

        <!-- Desktop Menu -->
        <div ref="navLinksRef" class="hidden md:flex items-center space-x-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click="link.href === '#home' ? scrollToTop($event) : null"
            class="text-secondary-300 hover:text-primary-400 light:text-black transition-colors duration-200 text-sm font-medium relative group"
            
          >
            {{ link.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
          >
            Hire Me
          </a>

          <!-- Settings Dropdown -->
          <div ref="settingsRef" class="relative">
            <button
              @click.stop="isSettingsOpen = !isSettingsOpen"
              class="p-2 rounded-lg light:text-black text-secondary-300 hover:text-primary-400 hover:bg-secondary-800/50 light:hover:text-primary-600 light:hover:bg-secondary-100 transition-all duration-300 focus:outline-none"
             
              :aria-label="'Settings'"
              :aria-expanded="isSettingsOpen"
            >
              <!-- Gear icon -->
              <svg class="w-5 h-5" :class="{ 'rotate-90 transition-transform duration-300': isSettingsOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            <!-- Settings Dropdown Panel -->
            <div
              v-if="isSettingsOpen"
              class="settings-dropdown absolute right-0 mt-2 w-64 rounded-xl bg-dark-800 border border-dark-700 shadow-2xl light:bg-white light:border-secondary-200 light:shadow-secondary-200/50 overflow-hidden"
            >
              <div class="px-4 py-3 border-b border-dark-700 light:border-secondary-200">
                <p class="text-sm font-semibold text-white light:text-secondary-900">Settings</p>
              </div>

              <!-- Night Mode Toggle -->
              <div class="px-4 py-3 flex items-center justify-between hover:bg-dark-700/50 light:hover:bg-secondary-50 transition-colors duration-200">
                <div class="flex items-center space-x-3">
                  <!-- Moon/Sun icon -->
                  <svg v-if="isDark" class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <svg v-else class="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span class="text-sm text-secondary-300 light:text-secondary-600">Night Mode</span>
                </div>
                <!-- Toggle Switch -->
                <button
                  @click="toggleTheme"
                  class="relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none"
                  :class="isDark ? 'bg-primary-500' : 'bg-secondary-300 light:bg-secondary-300'"
                  :aria-label="isDark ? 'Disable night mode' : 'Enable night mode'"
                >
                  <span
                    class="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300"
                    :class="isDark ? 'left-5' : 'left-0.5'"
                  ></span>
                </button>
              </div>

              <!-- Mouse Pointer Animation Toggle -->
              <div class="px-4 py-3 flex items-center justify-between hover:bg-dark-700/50 light:hover:bg-secondary-50 transition-colors duration-200">
                <div class="flex items-center space-x-3">
                  <!-- Mouse cursor icon -->
                  <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <span class="text-sm text-secondary-300 light:text-secondary-600">Mouse Animation</span>
                </div>
                <!-- Toggle Switch -->
                <button
                  @click="toggleMouseTrail"
                  class="relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none"
                  :class="isMouseTrailEnabled ? 'bg-primary-500' : 'bg-secondary-300 light:bg-secondary-300'"
                  :aria-label="isMouseTrailEnabled ? 'Disable mouse animation' : 'Enable mouse animation'"
                >
                  <span
                    class="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300"
                    :class="isMouseTrailEnabled ? 'left-5' : 'left-0.5'"
                  ></span>
                </button>
              </div>

              <!-- Color Palette Selector -->
              <div class="px-4 py-3 border-t border-dark-700 light:border-secondary-200">
                <div class="flex items-center space-x-3 mb-2">
                  <!-- Palette icon -->
                  <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <span class="text-sm text-secondary-300 light:text-secondary-600">Color Palette</span>
                </div>
                <div class="grid grid-cols-3 gap-2">
                  <button
                    v-for="(palette, key) in colorPalettes"
                    :key="key"
                    @click="setPalette(key)"
                    class="flex flex-col items-center gap-1 p-2 rounded-lg border transition-all duration-200 focus:outline-none"
                    :class="selectedPalette === key
                      ? 'border-primary-500 bg-primary-500/10 light:bg-primary-50'
                      : 'border-dark-700 hover:border-primary-400 light:border-secondary-200 light:hover:border-primary-400'"
                    :aria-label="`Use ${palette.name} color palette`"
                    :aria-pressed="selectedPalette === key"
                  >
                    <span class="flex space-x-0.5">
                      <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: palette.primary[500] }"></span>
                      <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: palette.accent[500] }"></span>
                      <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: palette.secondary[500] }"></span>
                    </span>
                    <span class="text-[10px] font-medium" :class="selectedPalette === key ? 'text-primary-400 light:text-primary-600' : 'text-secondary-400 light:text-secondary-500'">
                      {{ palette.name }}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden text-secondary-300 hover:text-white light:text-secondary-600 light:hover:text-secondary-900 focus:outline-none transition-colors duration-300"
          :class="!isScrolled && isDarkBackground.nav ? 'light:text-white light:hover:text-secondary-900' : 'light:text-secondary-600 light:hover:text-secondary-900'"
          aria-label="Toggle menu"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" ref="mobileMenuRef" class="md:hidden bg-dark-800 border-t border-dark-700 light:bg-white light:border-secondary-200 overflow-hidden">
      <div class="px-4 py-3 space-y-2">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="link.href === '#home' ? scrollToTop($event) : (isMenuOpen = false)"
          class="block text-secondary-300 hover:text-primary-400 light:text-secondary-600 light:hover:text-primary-600 transition-colors duration-200 py-2 text-sm font-medium"
        >
          {{ link.label }}
        </a>
        <a
          href="#contact"
          @click="isMenuOpen = false"
          class="block bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center transition-all duration-300 hover:scale-105"
        >
          Hire Me
        </a>

        <!-- Mobile Settings -->
        <div class="pt-2 border-t border-dark-700 light:border-secondary-200">
          <p class="text-xs font-semibold text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-2">Settings</p>

          <!-- Night Mode Toggle -->
          <div class="flex items-center justify-between py-2">
            <div class="flex items-center space-x-3">
              <svg v-if="isDark" class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <svg v-else class="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span class="text-sm text-secondary-300 light:text-secondary-600">Night Mode</span>
            </div>
            <button
              @click="toggleTheme"
              class="relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none"
              :class="isDark ? 'bg-primary-500' : 'bg-secondary-300 light:bg-secondary-300'"
              :aria-label="isDark ? 'Disable night mode' : 'Enable night mode'"
            >
              <span
                class="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300"
                :class="isDark ? 'left-5' : 'left-0.5'"
              ></span>
            </button>
          </div>

          <!-- Mouse Pointer Animation Toggle -->
          <div class="flex items-center justify-between py-2">
            <div class="flex items-center space-x-3">
              <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              <span class="text-sm text-secondary-300 light:text-secondary-600">Mouse Animation</span>
            </div>
            <button
              @click="toggleMouseTrail"
              class="relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none"
              :class="isMouseTrailEnabled ? 'bg-primary-500' : 'bg-secondary-300 light:bg-secondary-300'"
              :aria-label="isMouseTrailEnabled ? 'Disable mouse animation' : 'Enable mouse animation'"
            >
              <span
                class="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300"
                :class="isMouseTrailEnabled ? 'left-5' : 'left-0.5'"
              ></span>
            </button>
          </div>

          <!-- Color Palette Selector -->
          <div class="py-2">
            <div class="flex items-center space-x-3 mb-2">
              <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <span class="text-sm text-secondary-300 light:text-secondary-600">Color Palette</span>
            </div>
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="(palette, key) in colorPalettes"
                :key="key"
                @click="setPalette(key)"
                class="flex flex-col items-center gap-1 p-2 rounded-lg border transition-all duration-200 focus:outline-none"
                :class="selectedPalette === key
                  ? 'border-primary-500 bg-primary-500/10 light:bg-primary-50'
                  : 'border-dark-700 hover:border-primary-400 light:border-secondary-200 light:hover:border-primary-400'"
                :aria-label="`Use ${palette.name} color palette`"
                :aria-pressed="selectedPalette === key"
              >
                <span class="flex space-x-0.5">
                  <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: palette.primary[500] }"></span>
                  <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: palette.accent[500] }"></span>
                  <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: palette.secondary[500] }"></span>
                </span>
                <span class="text-[10px] font-medium" :class="selectedPalette === key ? 'text-primary-400 light:text-primary-600' : 'text-secondary-400 light:text-secondary-500'">
                  {{ palette.name }}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
