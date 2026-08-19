<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useMouseLavaStreak } from '../composables/useGsap'
import { useMouseTrail } from '../composables/useMouseTrail'

const { isMouseTrailEnabled } = useMouseTrail()

let cleanup = null

const startTrail = () => {
  if (!cleanup) {
    cleanup = useMouseLavaStreak({
      size: 45,
      trailLength: 400,
      trailWidth: 16,
    })
  }
}

const stopTrail = () => {
  if (cleanup) {
    cleanup()
    cleanup = null
  }
}

onMounted(() => {
  if (isMouseTrailEnabled.value) {
    startTrail()
  }
})

onUnmounted(() => {
  stopTrail()
})

watch(isMouseTrailEnabled, (enabled) => {
  if (enabled) {
    startTrail()
  } else {
    stopTrail()
  }
})
</script>

<template>
  <!-- Mouse trail is rendered dynamically by the composable -->
</template>
