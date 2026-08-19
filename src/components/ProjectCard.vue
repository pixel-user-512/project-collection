<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTilt } from '../composables/useGsap'
import ProjectPreview from './ProjectPreview.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['open'])

const cardRef = ref(null)
let cleanupTilt = null

const handleClick = () => {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  emit('open', {
    project: props.project,
    originRect: {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    },
  })
}

onMounted(() => {
  if (cardRef.value) {
    cleanupTilt = useTilt(cardRef.value, 6)
  }
})

onUnmounted(() => {
  if (cleanupTilt) cleanupTilt()
})
</script>

<template>
  <div
    ref="cardRef"
    @click="handleClick"
    class="group bg-secondary-800 border border-secondary-700 rounded-xl overflow-hidden hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 will-change-transform cursor-pointer light:bg-white light:border-secondary-200 light:hover:border-primary-500/50 light:hover:shadow-primary-500/10"
  >
    <!-- Project Preview -->
    <div class="relative overflow-hidden h-48">
      <ProjectPreview :project="project" class="w-full h-full group-hover:scale-105 transition-transform duration-500" />
      <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent pointer-events-none"></div>
    </div>

    <!-- Project Content -->
    <div class="p-6">
      <h3 class="text-white light:text-secondary-900 font-semibold text-lg mb-2 group-hover:text-primary-400 transition-colors duration-200">
        {{ project.title }}
      </h3>
      <p class="text-secondary-400 light:text-secondary-500 text-sm mb-4 leading-relaxed">
        {{ project.description }}
      </p>

      <!-- Tech Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="text-xs text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>