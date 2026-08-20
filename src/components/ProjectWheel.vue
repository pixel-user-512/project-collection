<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { gsap } from 'gsap'
import ProjectPreview from './ProjectPreview.vue'
import { useTheme } from '../composables/useTheme'

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['open'])

const { isDark } = useTheme()

const wheelRef = ref(null)
const currentIndex = ref(0)
const dragOffset = ref(0)
const isDragging = ref(false)
const hoveredIndex = ref(null)
let cardElements = []
let isAnimating = false
let dragStartX = 0
let lastDragX = 0
let lastDragTime = 0
let dragVelocity = 0
let wasDragging = false

const CARD_WIDTH = 300
const CARD_HEIGHT = 380
const MAX_VISIBLE_OFFSET = 2

// Base scale curve: scale(u) = SCALE_MIN + SCALE_RANGE * (1 - u / MAX_VISIBLE_OFFSET)
const SCALE_MIN = 0.6
const SCALE_RANGE = 0.5
// Distance (px) between the center card and its immediate neighbour
const NEIGHBOR_GAP = 215
const MAX_Y_OFFSET = 34
const MAX_ROTATION = 8
// Hover interaction tuning
const HOVER_SCALE_BOOST = 1.08
const HOVER_LIFT = 16
const NEIGHBOR_PUSH = 58

const canNavigate = computed(() => props.projects.length > 1)

const progressPercent = computed(() => {
  if (props.projects.length === 0) return 0
  return ((currentIndex.value + 1) / props.projects.length) * 100
})

const setupWheel = async () => {
  await nextTick()
  if (!wheelRef.value) return

  cardElements = Array.from(wheelRef.value.children)
  const count = cardElements.length
  if (count === 0) return

  const angleStep = 360 / count

  cardElements.forEach((card) => {
    gsap.set(card, {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      marginLeft: -CARD_WIDTH / 2,
      marginTop: -CARD_HEIGHT / 2,
      transformOrigin: 'center center',
      willChange: 'transform, opacity',
      borderRadius: '1rem',
      boxShadow: isDark.value ? '0 10px 30px rgba(0,0,0,0.3)' : 'none',
      cursor: 'pointer',
      backgroundColor: 'rgb(var(--color-secondary-800))',
    })
  })

  currentIndex.value = 0
  dragOffset.value = 0
  updateCardStates(true)
}

// Integral of the scale curve — used so the *visual* gap between neighbouring
// cards stays constant even though cards further from the center are smaller.
const spacingIntegral = (a) => {
  const m = MAX_VISIBLE_OFFSET
  if (a <= m) {
    return (SCALE_MIN + SCALE_RANGE) * a - (SCALE_RANGE * a * a) / (2 * m)
  }
  const atMax = (SCALE_MIN + SCALE_RANGE) * m - (SCALE_RANGE * m) / 2
  return atMax + SCALE_MIN * (a - m)
}

const UNIT_SPACING = spacingIntegral(1)

const getCardTransform = (index) => {
  const count = cardElements.length
  const angleStep = 360 / count
  const effectiveIndex = currentIndex.value + dragOffset.value
  const cardAngle = (index * angleStep - effectiveIndex * angleStep) % 360
  let normalized = cardAngle
  if (normalized > 180) normalized -= 360
  if (normalized < -180) normalized += 360

  const offset = normalized / angleStep
  const absOffset = Math.abs(offset)
  const clamped = Math.min(absOffset, MAX_VISIBLE_OFFSET)
  // Use MAX_VISIBLE_OFFSET + 1 as divisor so cards at the max offset
  // are still visible (5 cards total: center + 2 on each side)
  const visibility = Math.max(0, 1 - absOffset / (MAX_VISIBLE_OFFSET + 1))

  // Flat arch effect: horizontal offset with an even arch curve (no 3D rotation)
  // Spacing follows the scale curve so every card sits an equal visual distance apart
  const x = Math.sign(offset) * NEIGHBOR_GAP * (spacingIntegral(absOffset) / UNIT_SPACING)
  const y = MAX_Y_OFFSET * (1 - Math.cos((clamped / MAX_VISIBLE_OFFSET) * (Math.PI / 2)))
  const rotation = Math.sign(offset) * MAX_ROTATION * (clamped / MAX_VISIBLE_OFFSET)
  const scale = SCALE_MIN + visibility * SCALE_RANGE
  const opacity = visibility
  const zIndex = Math.round(visibility * 100)

  return { x, y, scale, opacity, zIndex, rotation, normalized, offset }
}

const hoverEnabled = () => !isDragging.value && !isAnimating

const updateCardStates = (instant = false, bounce = false) => {
  const activeHover = hoverEnabled() ? hoveredIndex.value : null
  const hoverOffset =
    activeHover !== null && cardElements[activeHover]
      ? getCardTransform(activeHover).offset
      : null

  cardElements.forEach((card, i) => {
    const { x, y, scale, opacity, zIndex, rotation, normalized, offset } = getCardTransform(i)
    const isActive = Math.abs(normalized) < 5
    const isHovered = activeHover === i

    let finalX = x
    let finalY = y
    let finalScale = scale
    let finalRotation = rotation
    let finalZ = zIndex
    let ease = instant ? 'none' : 'power3.out'
    let duration = instant ? 0 : 0.8

    if (isHovered) {
      // Pop the hovered card forward with a springy bounce
      finalScale = scale * HOVER_SCALE_BOOST
      finalY = y - HOVER_LIFT
      finalRotation = rotation * 0.35
      finalZ = 150
      if (!instant) {
        ease = bounce ? 'elastic.out(1, 0.45)' : 'back.out(2)'
        duration = bounce ? 0.9 : 0.5
      }
    } else if (hoverOffset !== null) {
      // Neighbours slide aside, closest cards move the most
      const delta = offset - hoverOffset
      const dist = Math.abs(delta)
      if (dist > 0.01) {
        const push = (NEIGHBOR_PUSH / dist) * Math.sign(delta)
        finalX = x + push
        finalY = y + Math.min(10, 10 / dist)
        if (!instant) {
          ease = bounce ? 'back.out(3)' : 'power3.out'
          duration = bounce ? 0.75 : 0.5
        }
      }
    }

    // In light mode, visible cards stay fully opaque (even the ones in the back),
    // but cards beyond the visible range are still hidden
    const finalOpacity = isDark.value
      ? isHovered ? 1 : opacity > 0.05 ? opacity : 0
      : opacity > 0.05 ? 1 : 0

    const vars = {
      x: finalX,
      y: finalY,
      scale: finalScale,
      rotation: finalRotation,
      opacity: finalOpacity,
      zIndex: finalZ,
      filter: isActive || isHovered ? 'brightness(1)' : isDark.value ? 'brightness(0.6)' : 'brightness(0.85)',
      boxShadow: isHovered
        ? '0 25px 60px rgb(var(--color-primary-500) / 0.45)'
        : isActive
          ? '0 0 50px rgb(var(--color-primary-500) / 0.35)'
          : isDark.value ? '0 0 0px rgb(var(--color-primary-500) / 0)' : 'none',
      pointerEvents: opacity > 0.05 ? 'auto' : 'none',
      duration,
      ease,
      overwrite: 'auto',
      borderRadius: '1rem',
      transformOrigin: 'center center',
    }

    if (instant) {
      gsap.set(card, vars)
    } else {
      gsap.to(card, vars)
    }
  })
}

const handleCardEnter = (index) => {
  if (isDragging.value || isAnimating) return
  if (hoveredIndex.value === index) return
  hoveredIndex.value = index
  updateCardStates(false, true)
}

const handleCardLeave = (index) => {
  if (hoveredIndex.value !== index) return
  hoveredIndex.value = null
  if (isDragging.value || isAnimating) return
  updateCardStates(false, true)
}

const rotateWheel = (direction) => {
  if (isAnimating || cardElements.length === 0 || !canNavigate.value) return
  isAnimating = true
  hoveredIndex.value = null

  const count = cardElements.length
  const angleStep = 360 / count
  currentIndex.value = (currentIndex.value + direction + count) % count

  gsap.to({}, {
    duration: 1,
    ease: 'power3.inOut',
    onUpdate: () => {
      updateCardStates()
    },
    onComplete: () => {
      isAnimating = false
      updateCardStates()
    },
  })
}

const selectCard = (index) => {
  if (isAnimating || cardElements.length === 0 || isDragging.value || wasDragging) return
  // Clicking any card opens the fullscreen detail view
  openProject(index)
}

const openProject = (index) => {
  const card = cardElements[index]
  if (!card) return
  const rect = card.getBoundingClientRect()
  emit('open', {
    project: props.projects[index],
    originRect: {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    },
  })
}

// --- Drag to rotate ---
const handlePointerDown = (e) => {
  if (isAnimating || cardElements.length === 0 || !canNavigate.value) return
  isDragging.value = true
  hoveredIndex.value = null
  wasDragging = false
  dragStartX = e.clientX
  lastDragX = e.clientX
  lastDragTime = Date.now()
  dragVelocity = 0
  e.preventDefault()
}

const handlePointerMove = (e) => {
  if (!isDragging.value) return
  const deltaX = e.clientX - lastDragX
  const now = Date.now()
  const dt = Math.max(now - lastDragTime, 1)
  dragVelocity = deltaX / dt
  lastDragX = e.clientX
  lastDragTime = now

  // Track if this was a drag (not a click)
  if (Math.abs(e.clientX - dragStartX) > 5) {
    wasDragging = true
  }

  // Convert pixel delta to card units (CARD_WIDTH = 300)
  // Negate so dragging left advances to the next project (natural carousel direction)
  dragOffset.value -= deltaX / CARD_WIDTH
  updateCardStates()
}

const handlePointerUp = () => {
  if (!isDragging.value) return
  isDragging.value = false

  const count = cardElements.length
  const steps = Math.round(dragOffset.value)

  // If this was just a click (no drag movement), don't start an animation
  // so the card's click event can fire and open the fullscreen details
  if (!wasDragging && steps === 0) {
    dragOffset.value = 0
    return
  }

  if (steps !== 0) {
    currentIndex.value = (currentIndex.value + steps + count) % count
  }
  dragOffset.value = 0

  isAnimating = true
  gsap.to({}, {
    duration: 0.5,
    ease: 'power3.out',
    onUpdate: () => {
      updateCardStates()
    },
    onComplete: () => {
      isAnimating = false
      updateCardStates()
      // Reset drag flag after animation completes so next click works
      setTimeout(() => {
        wasDragging = false
      }, 50)
    },
  })
}

const handlePointerCancel = () => {
  if (!isDragging.value) return
  handlePointerUp()
}

const handleWheelLeave = () => {
  if (hoveredIndex.value !== null) {
    hoveredIndex.value = null
    if (!isDragging.value && !isAnimating) updateCardStates(false, true)
  }
  handlePointerUp()
}

// Track pointer position on button for fill effect
const handleMouseMove = (event) => {
  const button = event.currentTarget
  const fillOverlay = button.querySelector('.fill-overlay')
  if (!fillOverlay) return
  const rect = button.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  button.style.setProperty('--mx', `${x}px`)
  button.style.setProperty('--my', `${y}px`)
}

const handleMouseLeave = (event) => {
  const button = event.currentTarget
  button.style.setProperty('--mx', '50%')
  button.style.setProperty('--my', '50%')
  // Also fade out the fill overlay on mouse leave (desktop)
  if (isHoverDevice) {
    const fillOverlay = button.querySelector('.fill-overlay')
    if (fillOverlay) {
      fillOverlay.classList.remove('active')
      fillOverlay.classList.add('fade-out')
      setTimeout(() => {
        fillOverlay.classList.remove('fade-out')
      }, 500)
    }
  }
}

// Detect if the device supports hover (desktop) vs touch-only
const isHoverDevice = window.matchMedia('(hover: hover)').matches

// Show fill overlay on pointer down (touch devices)
const handleFillPointerDown = (event) => {
  if (isHoverDevice) return // desktop uses hover instead
  const button = event.currentTarget
  const fillOverlay = button.querySelector('.fill-overlay')
  if (!fillOverlay) return
  const rect = button.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  button.style.setProperty('--mx', `${x}px`)
  button.style.setProperty('--my', `${y}px`)
  fillOverlay.classList.add('active')
}

// Fade out fill overlay on pointer up (touch devices)
const handleFillPointerUp = (event) => {
  if (isHoverDevice) return // desktop uses hover instead
  const button = event.currentTarget
  const fillOverlay = button.querySelector('.fill-overlay')
  if (!fillOverlay) return
  fillOverlay.classList.remove('active')
  fillOverlay.classList.add('fade-out')
  // Reset classes after the fade-out transition completes
  setTimeout(() => {
    fillOverlay.classList.remove('fade-out')
  }, 500)
}

// Show fill overlay on hover (desktop)
const handleFillMouseEnter = (event) => {
  if (!isHoverDevice) return
  const button = event.currentTarget
  const fillOverlay = button.querySelector('.fill-overlay')
  if (!fillOverlay) return
  const rect = button.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  button.style.setProperty('--mx', `${x}px`)
  button.style.setProperty('--my', `${y}px`)
  fillOverlay.classList.add('active')
}


onMounted(async () => {
  await setupWheel()
})

watch(
  () => props.projects,
  async () => {
    await setupWheel()
  }
)

// Re-apply card states when theme changes so GSAP inline styles (filter, boxShadow) update
watch(isDark, () => {
  if (cardElements.length > 0) {
    updateCardStates(true)
  }
})
</script>

<template>
  <div class="relative w-full h-[500px] select-none">
    <!-- Previous Button -->
    <button
      @click="rotateWheel(-1)"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      @mouseenter="handleFillMouseEnter"
      @pointerdown="handleFillPointerDown"
      @pointerup="handleFillPointerUp"
      @pointercancel="handleFillPointerUp"
      :disabled="!canNavigate"
      class="absolute -left-24 md:-left-24 lg:-left-40 top-1/2 -translate-y-1/2 size-[200px] md:size-[200px] lg:size-[300px] rounded-full flex items-center justify-center text-secondary-300 light:text-secondary-500 disabled:opacity-40 disabled:cursor-not-allowed z-[110] border-2 border-primary-500/50 light:border-primary-600/50 hover:border-primary-500 light:hover:border-primary-600 hover:scale-105 transition-all duration-300 overflow-hidden"
      aria-label="Previous project"
    >
      <span class="fill-overlay"></span>
      <svg class="absolute z-10 w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 right-10 md:right-10 lg:right-16 top-1/2 -translate-y-1/2 text-primary-500 light:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </button>

    <div
      ref="wheelRef"
      class="relative w-full h-full"
      :class="{ 'cursor-grabbing': isDragging, 'cursor-grab': !isDragging }"
      @pointerdown="handlePointerDown"
      @pointermove="handlePointerMove"
      @pointerup="handlePointerUp"
      @pointercancel="handlePointerCancel"
      @pointerleave="handleWheelLeave"
    >
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        @click="selectCard(index)"
        @mouseenter="handleCardEnter(index)"
        @mouseleave="handleCardLeave(index)"
        class="absolute rounded-xl overflow-hidden shadow-xl light:shadow-none"
        style="width: 300px; height: 360px;"
      >
        <div class="relative overflow-hidden rounded-t-xl h-48">
          <ProjectPreview :project="project" class="w-full h-full" />
          <div v-if="isDark" class="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent rounded-t-xl pointer-events-none"></div>
        </div>
        <div class="p-5 bg-secondary-800 h-full light:bg-white rounded-b-xl">
          <h3 class="text-white light:text-secondary-900 font-semibold text-lg mb-2">
            {{ project.title }}
          </h3>
          <p class="text-secondary-400 light:text-secondary-500 text-sm mb-3 leading-relaxed line-clamp-2">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-1.5 mb-3">
            <span
              v-for="tech in project.tech.slice(0, 3)"
              :key="tech"
              class="text-xs text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded-full"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Next Button -->
    <button
      @click="rotateWheel(1)"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      @mouseenter="handleFillMouseEnter"
      @pointerdown="handleFillPointerDown"
      @pointerup="handleFillPointerUp"
      @pointercancel="handleFillPointerUp"
      :disabled="!canNavigate"
      class="absolute -right-24 md:-right-24 lg:-right-40 top-1/2 -translate-y-1/2 size-[200px] md:size-[200px] lg:size-[300px] rounded-full flex items-center justify-center text-secondary-300 light:text-secondary-500 disabled:opacity-40 disabled:cursor-not-allowed z-[110] border-2 border-primary-500/50 light:border-primary-600/50 hover:border-primary-500 light:hover:border-primary-600 hover:scale-105 transition-all duration-300 overflow-hidden"
      aria-label="Next project"
    >
      <span class="fill-overlay"></span>
      <svg class="absolute z-10 w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 left-10 md:left-10 lg:left-16 top-1/2 -translate-y-1/2 text-primary-500 light:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Progress Bar Pagination -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-80">
      <div class="h-1 rounded-full bg-secondary-800 light:bg-secondary-200 overflow-hidden">
        <div
          class="h-full rounded-full bg-primary-500 light:bg-primary-600 transition-all duration-500 ease-out"
          :style="{ width: progressPercent + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fill-overlay {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 9999px;
  background: rgb(var(--color-primary-500) / 0.9);
  left: var(--mx, 50%);
  top: var(--my, 50%);
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: transform 0.4s ease-out, opacity 0.3s ease;
  pointer-events: none;
}

.fill-overlay.active {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.fill-overlay.fade-out {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.5s ease-in, opacity 0.4s ease;
}

@media (min-width: 1024px) {
  .fill-overlay {
    width: 300px;
    height: 300px;
  }
}

button:active svg {
  color: #ffffff;
  transition: color 0.2s ease;
}
</style>