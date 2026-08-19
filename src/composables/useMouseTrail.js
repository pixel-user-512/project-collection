import { ref } from 'vue'

const isMouseTrailEnabled = ref(true)

// Initialize from localStorage or default to enabled
const initMouseTrail = () => {
  const saved = localStorage.getItem('mouseTrail')
  if (saved === 'disabled') {
    isMouseTrailEnabled.value = false
  } else {
    isMouseTrailEnabled.value = true
  }
}

const toggleMouseTrail = () => {
  isMouseTrailEnabled.value = !isMouseTrailEnabled.value
  localStorage.setItem('mouseTrail', isMouseTrailEnabled.value ? 'enabled' : 'disabled')
}

// Initialize immediately
initMouseTrail()

export function useMouseTrail() {
  return {
    isMouseTrailEnabled,
    toggleMouseTrail,
  }
}