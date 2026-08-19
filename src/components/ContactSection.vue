<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useAppleTextReveal, useHorizontalSlideReveal } from '../composables/useGsap'

const infoRef = ref(null)
const titleRef = ref(null)
const subtitleRef = ref(null)

let scrollTriggers = []

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/pixel-user-512',
    icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/kenneth-paul-cortez',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
  },
]

onMounted(() => {
  // Section title and subtitle reveal - horizontal slide from left
  scrollTriggers.push(...useHorizontalSlideReveal(titleRef.value, { x: -120, start: 'top 90%', end: 'top 40%' }))
  scrollTriggers.push(...useHorizontalSlideReveal(subtitleRef.value, { x: -120, start: 'top 90%', end: 'top 40%' }))

  // Info reveal - Apple style
  scrollTriggers.push(
    ...useAppleTextReveal(infoRef.value, {
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
  <section id="contact" class="py-20 bg-dark-800 light:bg-white relative overflow-hidden">
    <!-- Decorative gradient -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 ref="titleRef" class="section-title">Get In Touch</h2>
        <p ref="subtitleRef" class="section-subtitle">Have a project in mind? Let's work together!</p>
      </div>

      <div ref="infoRef" class="max-w-3xl mx-auto">
        <!-- Intro -->
        <div class="text-center mb-12">
          <p class="text-secondary-400 light:text-secondary-500 text-lg leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out!
          </p>
        </div>

        <!-- Contact methods -->
        <div class="grid sm:grid-cols-2 gap-4 mb-12">
          <a href="mailto:kenneth.cortez.512@gmail.com" class="group flex items-center gap-4 bg-secondary-800/50 border border-secondary-700 rounded-2xl p-5 hover:border-primary-500/50 hover:bg-secondary-800/80 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50">
            <span class="w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl group-hover:border-primary-500/50 group-hover:scale-110 transition-all duration-300 light:bg-secondary-50 light:border-secondary-200 shrink-0">
              <svg class="w-6 h-6 text-primary-400 light:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span class="min-w-0">
              <span class="block text-xs text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-1">Email</span>
              <span class="block text-secondary-200 light:text-secondary-700 font-medium truncate">kenneth.cortez.512@gmail.com</span>
            </span>
          </a>

          <a href="tel:+639664002142" class="group flex items-center gap-4 bg-secondary-800/50 border border-secondary-700 rounded-2xl p-5 hover:border-primary-500/50 hover:bg-secondary-800/80 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500/50">
            <span class="w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl group-hover:border-primary-500/50 group-hover:scale-110 transition-all duration-300 light:bg-secondary-50 light:border-secondary-200 shrink-0">
              <svg class="w-6 h-6 text-primary-400 light:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <span class="min-w-0">
              <span class="block text-xs text-secondary-500 light:text-secondary-400 uppercase tracking-wider mb-1">Phone</span>
              <span class="block text-secondary-200 light:text-secondary-700 font-medium">+63 (966) 400-2142</span>
            </span>
          </a>
        </div>

        <!-- Social Links -->
        <div class="text-center">
          <h4 class="text-white light:text-secondary-900 text-sm font-semibold uppercase tracking-wider mb-5">Follow Me</h4>
          <div class="flex items-center justify-center gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 flex items-center justify-center bg-secondary-800 border border-secondary-700 rounded-xl text-secondary-400 hover:text-primary-400 hover:border-primary-500/50 hover:scale-110 transition-all duration-300 light:bg-white light:border-secondary-200 light:text-secondary-500 light:hover:text-primary-600"
              :aria-label="social.name"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>