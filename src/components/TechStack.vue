<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { techStack } from '../data/techStack'
import { useAppleTextReveal, useFilterAnimation, useHorizontalSlideReveal } from '../composables/useGsap'

const categories = computed(() => {
  return ['All', ...new Set(techStack.map((item) => item.category))]
})

const activeCategory = ref('All')
const gridRef = ref(null)
const titleRef = ref(null)
const subtitleRef = ref(null)
const filterRef = ref(null)

let scrollTriggers = []

const filteredTech = computed(() => {
  if (activeCategory.value === 'All') return techStack
  return techStack.filter((item) => item.category === activeCategory.value)
})

const setCategory = (category) => {
  activeCategory.value = category
}

onMounted(() => {
  // Section title reveal - horizontal slide from left
  scrollTriggers.push(...useHorizontalSlideReveal(titleRef.value, { x: -120, start: 'top 90%', end: 'top 40%' }))

  // Initial grid reveal - Apple style
  scrollTriggers.push(
    ...useAppleTextReveal(gridRef.value, {
      y: 60,
      duration: 1.2,
      stagger: 0.1,
      start: 'top 80%',
      blur: 14,
    })
  )
})

onUnmounted(() => {
  scrollTriggers.forEach((trigger) => trigger.kill())
})

// Animate grid when filter changes
watch(filteredTech, async () => {
  await nextTick()
  if (gridRef.value) {
    useFilterAnimation(gridRef.value, '.tech-card')
  }
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

      <!-- Tech Grid -->
      <div ref="gridRef" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="tech in filteredTech"
          :key="tech.name"
          class="tech-card group bg-secondary-800 border border-secondary-700 rounded-xl p-6 hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300 light:bg-white light:border-secondary-200 light:hover:border-primary-500 light:hover:shadow-primary-500/10"
        >
          <div class="flex items-start justify-between mb-4">
            <div class="text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              {{ tech.icon }}
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
  </section>
</template>