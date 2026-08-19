import { ref } from 'vue'

const isMouseTrailEnabled = ref(false)

// Initialize from localStorage or default to disabled
const initMouseTrail = () => {
  const saved = localStorage.getItem('mouseTrail')
  if (saved === 'enabled') {
    isMouseTrailEnabled.value = true
  } else {
    isMouseTrailEnabled.value = false
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