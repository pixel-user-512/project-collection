import { ref, watch } from 'vue'

// Define available color palettes
// Each palette provides primary, accent, and secondary color scales
export const colorPalettes = {
  emerald: {
    name: 'Emerald',
    primary: {
      50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7',
      400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857',
      800: '#065f46', 900: '#064e3b',
    },
    accent: {
      50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5',
      400: '#f87171', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c',
      800: '#991b1b', 900: '#7f1d1d',
    },
    secondary: {
      50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1',
      400: '#a8a29e', 500: '#78716c', 600: '#57534e', 700: '#44403c',
      800: '#292524', 900: '#1c1917',
    },
    dark: {
      700: '#44403c', 800: '#292524', 900: '#1c1917',
    },
  },
  ocean: {
    name: 'Ocean',
    primary: {
      50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
      400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
      800: '#1e40af', 900: '#1e3a8a',
    },
    accent: {
      50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 300: '#67e8f9',
      400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490',
      800: '#155e75', 900: '#164e63',
    },
    secondary: {
      50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
      400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155',
      800: '#1e293b', 900: '#0f172a',
    },
    dark: {
      700: '#334155', 800: '#1e293b', 900: '#0f172a',
    },
  },
  sunset: {
    name: 'Sunset',
    primary: {
      50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74',
      400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c',
      800: '#9a3412', 900: '#7c2d12',
    },
    accent: {
      50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe',
      400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce',
      800: '#6b21a8', 900: '#581c87',
    },
    secondary: {
      50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1',
      400: '#a8a29e', 500: '#78716c', 600: '#57534e', 700: '#44403c',
      800: '#292524', 900: '#1c1917',
    },
    dark: {
      700: '#44403c', 800: '#292524', 900: '#1c1917',
    },
  },
  royal: {
    name: 'Royal',
    primary: {
      50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe',
      400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce',
      800: '#6b21a8', 900: '#581c87',
    },
    accent: {
      50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4',
      400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d',
      800: '#9d174d', 900: '#831843',
    },
    secondary: {
      50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
      400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155',
      800: '#1e293b', 900: '#0f172a',
    },
    dark: {
      700: '#334155', 800: '#1e293b', 900: '#0f172a',
    },
  },
  forest: {
    name: 'Forest',
    primary: {
      50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4',
      400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e',
      800: '#115e59', 900: '#134e4a',
    },
    accent: {
      50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d',
      400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309',
      800: '#92400e', 900: '#78350f',
    },
    secondary: {
      50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1',
      400: '#a8a29e', 500: '#78716c', 600: '#57534e', 700: '#44403c',
      800: '#292524', 900: '#1c1917',
    },
    dark: {
      700: '#44403c', 800: '#292524', 900: '#1c1917',
    },
  },
}

// Convert hex color to RGB triplet string (e.g. "#10b981" -> "16 185 129")
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return '0 0 0'
  return `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
}

const selectedPalette = ref('emerald')

// Apply the palette as CSS custom properties on :root
// Values are stored as RGB triplets for Tailwind's rgb(var(--x) / <alpha-value>) syntax
const applyPalette = (paletteKey) => {
  const palette = colorPalettes[paletteKey]
  if (!palette) return

  const root = document.documentElement

  // Set primary colors
  Object.entries(palette.primary).forEach(([shade, value]) => {
    root.style.setProperty(`--color-primary-${shade}`, hexToRgb(value))
  })

  // Set accent colors
  Object.entries(palette.accent).forEach(([shade, value]) => {
    root.style.setProperty(`--color-accent-${shade}`, hexToRgb(value))
  })

  // Set secondary colors
  Object.entries(palette.secondary).forEach(([shade, value]) => {
    root.style.setProperty(`--color-secondary-${shade}`, hexToRgb(value))
  })

  // Set dark surface colors
  Object.entries(palette.dark).forEach(([shade, value]) => {
    root.style.setProperty(`--color-dark-${shade}`, hexToRgb(value))
  })
}

// Initialize palette from localStorage or default to emerald
const initPalette = () => {
  const saved = localStorage.getItem('colorPalette')
  if (saved && colorPalettes[saved]) {
    selectedPalette.value = saved
  } else {
    selectedPalette.value = 'emerald'
  }
  applyPalette(selectedPalette.value)
}

// Watch for palette changes and apply them
watch(selectedPalette, (key) => {
  applyPalette(key)
  // Notify listeners (e.g., mouse trail) that palette colors changed
  window.dispatchEvent(new CustomEvent('colorpalettechange'))
})

const setPalette = (key) => {
  if (!colorPalettes[key]) return
  selectedPalette.value = key
  localStorage.setItem('colorPalette', key)
}

// Initialize immediately
initPalette()

export function useColorPalette() {
  return {
    colorPalettes,
    selectedPalette,
    setPalette,
  }
}