import { ref, watch } from 'vue'

const isDark = ref(true)

// Apply theme immediately on module load to prevent flash
const applyTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Initialize theme from localStorage or default to dark
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isDark.value = false
  } else if (savedTheme === 'dark') {
    isDark.value = true
  } else {
    // Default to dark mode
    isDark.value = true
  }
  applyTheme()
}

// Watch for theme changes and apply them
watch(isDark, () => {
  applyTheme()
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// Initialize immediately
initTheme()

export function useTheme() {
  return {
    isDark,
    toggleTheme,
  }
}