<template>
  <div v-if="isVisible" ref="overlayRef" class="intro-overlay"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const isVisible = ref(true)
const overlayRef = ref(null)

onMounted(() => {
  // Lock body scroll during intro
  document.body.style.overflow = 'hidden'

  // Read the selected palette's primary color
  const primary500 = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-primary-500')
    .trim()
  overlayRef.value.style.backgroundColor = `rgb(${primary500})`

  // Start with a small hole in the center
  const holeState = { size: 3 }
  overlayRef.value.style.setProperty('--hole-size', `${holeState.size}%`)

  // Brief pause so the user sees the initial state, then expand the hole
  gsap.delayedCall(0.5, () => {
    gsap.to(holeState, {
      size: 100,
      duration: 0.6,
      ease: 'power2.inOut',
      onUpdate: () => {
        overlayRef.value.style.setProperty('--hole-size', `${holeState.size}%`)
      },
      onComplete: () => {
        isVisible.value = false
        document.body.style.overflow = ''
      },
    })
  })
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.intro-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  --hole-size: 3%;
  -webkit-mask-image: radial-gradient(
    circle at center,
    transparent 0%,
    transparent var(--hole-size),
    black var(--hole-size),
    black 100%
  );
  mask-image: radial-gradient(
    circle at center,
    transparent 0%,
    transparent var(--hole-size),
    black var(--hole-size),
    black 100%
  );
}
</style>