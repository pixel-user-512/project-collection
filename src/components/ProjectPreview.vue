<script setup>
import { ref, computed, reactive } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const projectType = computed(() => {
  const title = props.project.title.toLowerCase()
  if (title.includes('e-commerce')) return 'ecommerce'
  if (title.includes('task')) return 'task'
  if (title.includes('weather')) return 'weather'
  if (title.includes('social') || title.includes('analytics')) return 'analytics'
  if (title.includes('recipe')) return 'recipe'
  if (title.includes('portfolio') || title.includes('template')) return 'portfolio'
  return 'generic'
})

// ============ E-COMMERCE STATE ============
const products = [
  { id: 1, name: 'Wireless Headphones', price: 89, emoji: '🎧', color: 'from-purple-500 to-indigo-500' },
  { id: 2, name: 'Smart Watch', price: 199, emoji: '⌚', color: 'from-blue-500 to-cyan-500' },
  { id: 3, name: 'Laptop Stand', price: 45, emoji: '💻', color: 'from-emerald-500 to-teal-500' },
  { id: 4, name: 'Mechanical Keyboard', price: 129, emoji: '⌨️', color: 'from-amber-500 to-orange-500' },
  { id: 5, name: 'USB-C Hub', price: 59, emoji: '🔌', color: 'from-rose-500 to-pink-500' },
  { id: 6, name: 'Desk Lamp', price: 35, emoji: '💡', color: 'from-yellow-500 to-amber-500' },
]
const cart = reactive([])
const cartOpen = ref(false)
const cartCount = computed(() => cart.reduce((sum, item) => sum + item.qty, 0))
const cartTotal = computed(() => cart.reduce((sum, item) => sum + item.price * item.qty, 0))

const addToCart = (product) => {
  const existing = cart.find((item) => item.id === product.id)
  if (existing) {
    existing.qty++
  } else {
    cart.push({ ...product, qty: 1 })
  }
}
const removeFromCart = (id) => {
  const idx = cart.findIndex((item) => item.id === id)
  if (idx !== -1) cart.splice(idx, 1)
}
const updateQty = (id, delta) => {
  const item = cart.find((i) => i.id === id)
  if (!item) return
  item.qty += delta
  if (item.qty <= 0) removeFromCart(id)
}

// ============ TASK MANAGEMENT STATE ============
const taskColumns = reactive({
  todo: [
    { id: 1, title: 'Design landing page', tag: 'Design', tagColor: 'bg-purple-500/20 text-purple-400', done: false },
    { id: 2, title: 'Set up database schema', tag: 'Backend', tagColor: 'bg-blue-500/20 text-blue-400', done: false },
    { id: 3, title: 'Write API endpoints', tag: 'Backend', tagColor: 'bg-blue-500/20 text-blue-400', done: false },
  ],
  progress: [
    { id: 4, title: 'Build auth system', tag: 'Frontend', tagColor: 'bg-emerald-500/20 text-emerald-400', done: false },
    { id: 5, title: 'Implement dark mode', tag: 'UI', tagColor: 'bg-amber-500/20 text-amber-400', done: false },
  ],
  done: [
    { id: 6, title: 'Project setup', tag: 'Setup', tagColor: 'bg-gray-500/20 text-gray-400', done: true },
    { id: 7, title: 'Create wireframes', tag: 'Design', tagColor: 'bg-purple-500/20 text-purple-400', done: true },
    { id: 8, title: 'Configure CI/CD', tag: 'DevOps', tagColor: 'bg-rose-500/20 text-rose-400', done: true },
  ],
})
const newTaskTitle = ref('')
const newTaskTag = ref('General')
const tagOptions = ['General', 'Design', 'Frontend', 'Backend', 'UI', 'DevOps']

const addTask = () => {
  if (!newTaskTitle.value.trim()) return
  taskColumns.todo.push({
    id: Date.now(),
    title: newTaskTitle.value.trim(),
    tag: newTaskTag.value,
    tagColor: 'bg-primary-500/20 text-primary-400',
    done: false,
  })
  newTaskTitle.value = ''
}

const toggleTaskDone = (col, id) => {
  const task = taskColumns[col].find((t) => t.id === id)
  if (!task) return
  task.done = !task.done
  if (task.done) {
    const idx = taskColumns[col].findIndex((t) => t.id === id)
    const [moved] = taskColumns[col].splice(idx, 1)
    taskColumns.done.push(moved)
  } else {
    const idx = taskColumns.done.findIndex((t) => t.id === id)
    const [moved] = taskColumns.done.splice(idx, 1)
    taskColumns.todo.push(moved)
  }
}

const moveTask = (fromCol, toCol, id) => {
  const idx = taskColumns[fromCol].findIndex((t) => t.id === id)
  if (idx === -1) return
  const [moved] = taskColumns[fromCol].splice(idx, 1)
  taskColumns[toCol].push(moved)
}

// ============ WEATHER STATE ============
const cities = {
  'Manila': { temp: 28, condition: 'Partly Cloudy', emoji: '⛅', humidity: 72, wind: 12 },
  'Tokyo': { temp: 22, condition: 'Clear Sky', emoji: '☀️', humidity: 55, wind: 8 },
  'New York': { temp: 18, condition: 'Rainy', emoji: '🌧️', humidity: 85, wind: 20 },
  'London': { temp: 15, condition: 'Cloudy', emoji: '☁️', humidity: 78, wind: 15 },
  'Sydney': { temp: 25, condition: 'Sunny', emoji: '🌤️', humidity: 60, wind: 10 },
}
const selectedCity = ref('Manila')
const searchQuery = ref('')
const unit = ref('C')

const currentWeather = computed(() => cities[selectedCity.value] || cities['Manila'])
const displayTemp = computed(() => {
  const t = currentWeather.value.temp
  return unit.value === 'C' ? t : Math.round((t * 9) / 5 + 32)
})

const hourlyForecast = computed(() => {
  const base = currentWeather.value.temp
  return Array.from({ length: 6 }, (_, i) => ({
    time: `${(i + 1) * 3}:00`,
    temp: base + [0, 2, 3, 1, -1, -2][i],
    emoji: ['⛅', '☀️', '☀️', '⛅', '☁️', '🌙'][i],
  }))
})

const weeklyForecast = computed(() => {
  const base = currentWeather.value.temp
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  return days.map((day, i) => ({
    day,
    high: base + [2, 4, 3, 5, 1, 0, -1][i],
    low: base - [4, 3, 5, 2, 6, 5, 7][i],
    emoji: ['⛅', '☀️', '🌧️', '⛅', '☀️', '☁️', '🌧️'][i],
  }))
})

const filteredCities = computed(() => {
  const q = searchQuery.value.toLowerCase()
  if (!q) return Object.keys(cities)
  return Object.keys(cities).filter((c) => c.toLowerCase().includes(q))
})

const selectCity = (city) => {
  selectedCity.value = city
  searchQuery.value = ''
}

// ============ ANALYTICS STATE ============
const analyticsData = reactive({
  followers: 12800,
  engagement: 4.2,
  reach: 45200,
  posts: 128,
})
const selectedPlatform = ref('All')
const platforms = ['All', 'Instagram', 'Twitter', 'LinkedIn']

const platformData = {
  'All': { followers: 12800, engagement: 4.2, reach: 45200, posts: 128 },
  'Instagram': { followers: 8500, engagement: 5.1, reach: 28000, posts: 64 },
  'Twitter': { followers: 3200, engagement: 3.4, reach: 12000, posts: 42 },
  'LinkedIn': { followers: 1100, engagement: 2.8, reach: 5200, posts: 22 },
}

const chartData = computed(() => {
  const base = platformData[selectedPlatform.value] || platformData['All']
  const multiplier = base.followers / 12800
  return [30, 45, 38, 60, 52, 75, 68, 90, 82, 100, 88, 95].map((v, i) => ({
    value: Math.round(v * multiplier),
    label: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i],
  }))
})

const setPlatform = (p) => {
  selectedPlatform.value = p
  const data = platformData[p] || platformData['All']
  analyticsData.followers = data.followers
  analyticsData.engagement = data.engagement
  analyticsData.reach = data.reach
  analyticsData.posts = data.posts
}

// ============ RECIPE STATE ============
const recipes = [
  { id: 1, name: 'Creamy Garlic Pasta', time: 25, rating: 4.5, emoji: '🍝', category: 'Dinner', color: 'from-amber-500/40 to-orange-500/40' },
  { id: 2, name: 'Avocado Toast', time: 10, rating: 4.2, emoji: '🥑', category: 'Breakfast', color: 'from-emerald-500/40 to-green-500/40' },
  { id: 3, name: 'Chocolate Cake', time: 45, rating: 4.8, emoji: '🍰', category: 'Dessert', color: 'from-rose-500/40 to-pink-500/40' },
  { id: 4, name: 'Chicken Stir Fry', time: 20, rating: 3.9, emoji: '🍗', category: 'Lunch', color: 'from-red-500/40 to-orange-500/40' },
  { id: 5, name: 'Berry Smoothie', time: 5, rating: 4.6, emoji: '🥤', category: 'Breakfast', color: 'from-purple-500/40 to-indigo-500/40' },
  { id: 6, name: 'Beef Tacos', time: 30, rating: 4.4, emoji: '🌮', category: 'Dinner', color: 'from-yellow-500/40 to-amber-500/40' },
]
const recipeCategory = ref('All')
const recipeSearch = ref('')
const selectedRecipe = ref(null)

const recipeCategories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert']

const filteredRecipes = computed(() => {
  return recipes.filter((r) => {
    const matchesCat = recipeCategory.value === 'All' || r.category === recipeCategory.value
    const matchesSearch = r.name.toLowerCase().includes(recipeSearch.value.toLowerCase())
    return matchesCat && matchesSearch
  })
})

const selectRecipe = (recipe) => {
  selectedRecipe.value = recipe
}

// ============ PORTFOLIO STATE ============
const portfolioTab = ref('home')
const portfolioTabs = ['home', 'about', 'projects', 'contact']

const setPortfolioTab = (tab) => {
  portfolioTab.value = tab
}

// ============ GENERIC STATE ============
const genericTab = ref('home')
const genericTabs = ['home', 'features', 'about']
const setGenericTab = (tab) => {
  genericTab.value = tab
}
</script>

<template>
  <div class="w-full h-full bg-secondary-900 light:bg-secondary-100 overflow-hidden relative flex flex-col">
    <!-- Browser Chrome Bar -->
    <div class="flex items-center gap-2 px-3 sm:px-4 py-2 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0">
      <div class="flex gap-1.5">
        <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent-500"></span>
        <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
        <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary-500"></span>
      </div>
      <div class="flex-1 max-w-md mx-auto">
        <div class="bg-secondary-700/50 light:bg-secondary-100 rounded-md px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-secondary-400 light:text-secondary-500 flex items-center gap-1.5 sm:gap-2 truncate">
          <svg class="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 8a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0115.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
          <span class="truncate">{{ project.demo }}</span>
        </div>
      </div>
    </div>

    <!-- ============ E-COMMERCE (INTERACTIVE) ============ -->
    <div v-if="projectType === 'ecommerce'" class="flex-1 flex flex-col min-h-0 relative">
      <!-- Nav -->
      <div class="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0">
        <div class="text-primary-500 font-bold text-xs sm:text-sm">🛍️ ShopHub</div>
        <div class="flex items-center gap-2 sm:gap-4">
          <div class="hidden sm:flex gap-3 text-[10px] text-secondary-400 light:text-secondary-500">
            <span class="cursor-pointer hover:text-primary-500 transition-colors">Home</span>
            <span class="cursor-pointer hover:text-primary-500 transition-colors">Products</span>
            <span class="cursor-pointer hover:text-primary-500 transition-colors">About</span>
          </div>
          <button
            @click="cartOpen = !cartOpen"
            class="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-500/20 flex items-center justify-center hover:bg-primary-500/30 transition-colors cursor-pointer"
            aria-label="Open cart"
          >
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span v-if="cartCount > 0" class="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-accent-500 rounded-full text-[8px] sm:text-[9px] text-white flex items-center justify-center font-bold">{{ cartCount }}</span>
          </button>
        </div>
      </div>

      <!-- Hero Banner -->
      <div class="px-3 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-500 flex-shrink-0">
        <div class="text-white">
          <div class="text-[9px] sm:text-[10px] uppercase tracking-wider opacity-80 mb-1">Summer Sale</div>
          <div class="text-xs sm:text-sm font-bold mb-1.5 sm:mb-2">Up to 50% Off Everything</div>
          <div class="inline-block bg-white text-primary-600 text-[9px] sm:text-[10px] font-semibold px-2.5 sm:px-3 py-1 rounded-full cursor-pointer hover:bg-primary-50 transition-colors">Shop Now →</div>
        </div>
      </div>

      <!-- Product Grid -->
      <div class="flex-1 p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 overflow-y-auto min-h-0 overscroll-contain">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-primary-500/10"
        >
          <div class="aspect-square rounded-md bg-gradient-to-br mb-2 flex items-center justify-center text-2xl sm:text-3xl" :class="product.color">
            <span>{{ product.emoji }}</span>
          </div>
          <div class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-1 truncate">{{ product.name }}</div>
          <div class="flex items-center justify-between">
            <div class="text-[10px] sm:text-xs font-semibold text-primary-500">${{ product.price }}</div>
            <button
              @click.stop="addToCart(product)"
              class="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary-500 hover:bg-primary-400 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Add to cart"
            >
              <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Cart Drawer -->
      <transition name="slide">
        <div v-if="cartOpen" class="absolute inset-y-0 right-0 w-64 sm:w-80 bg-secondary-800 light:bg-white border-l border-secondary-700 light:border-secondary-200 shadow-2xl z-20 flex flex-col">
          <div class="flex items-center justify-between px-4 py-3 border-b border-secondary-700 light:border-secondary-200">
            <span class="text-xs font-semibold text-white light:text-secondary-900">Shopping Cart</span>
            <button @click="cartOpen = false" class="text-secondary-400 hover:text-white light:hover:text-secondary-900 transition-colors cursor-pointer" aria-label="Close cart">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex-1 overflow-y-auto p-4 space-y-3 overscroll-contain">
            <div v-if="cart.length === 0" class="text-center py-8">
              <div class="text-3xl mb-2">🛒</div>
              <p class="text-xs text-secondary-400 light:text-secondary-500">Your cart is empty</p>
              <p class="text-[10px] text-secondary-500 light:text-secondary-400 mt-1">Add some products!</p>
            </div>
            <div v-for="item in cart" :key="item.id" class="flex items-center gap-3 bg-secondary-700/50 light:bg-secondary-100 rounded-lg p-2.5">
              <div class="w-8 h-8 rounded-md bg-gradient-to-br flex items-center justify-center text-sm flex-shrink-0" :class="item.color">
                {{ item.emoji }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-[10px] text-white light:text-secondary-900 font-medium truncate">{{ item.name }}</div>
                <div class="text-[9px] text-primary-500">${{ item.price }}</div>
              </div>
              <div class="flex items-center gap-1.5">
                <button @click="updateQty(item.id, -1)" class="w-4 h-4 rounded bg-secondary-600 light:bg-secondary-200 text-white light:text-secondary-900 text-[9px] flex items-center justify-center hover:bg-accent-500 transition-colors cursor-pointer">−</button>
                <span class="text-[10px] text-white light:text-secondary-900 w-4 text-center">{{ item.qty }}</span>
                <button @click="updateQty(item.id, 1)" class="w-4 h-4 rounded bg-secondary-600 light:bg-secondary-200 text-white light:text-secondary-900 text-[9px] flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer">+</button>
              </div>
            </div>
          </div>
          <div class="p-4 border-t border-secondary-700 light:border-secondary-200">
            <div class="flex justify-between mb-3">
              <span class="text-[10px] text-secondary-400 light:text-secondary-500">Total</span>
              <span class="text-sm font-bold text-white light:text-secondary-900">${{ cartTotal.toFixed(2) }}</span>
            </div>
            <button
              @click="cartOpen = false"
              class="w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer"
            >
              Checkout
            </button>
          </div>
        </div>
      </transition>
    </div>

    <!-- ============ TASK MANAGEMENT (INTERACTIVE) ============ -->
    <div v-else-if="projectType === 'task'" class="flex-1 flex flex-col min-h-0">
      <!-- Header -->
      <div class="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0">
        <div class="flex items-center gap-2">
          <div class="w-5 h-5 sm:w-6 sm:h-6 rounded bg-primary-500 flex items-center justify-center">
            <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <span class="text-xs sm:text-sm font-semibold text-white light:text-secondary-900">TaskFlow</span>
        </div>
        <div class="flex items-center gap-1.5 sm:gap-2">
          <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-primary-500 font-bold">+</div>
          <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-accent-500 font-bold">A</div>
          <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-[9px] sm:text-[10px] text-yellow-500 font-bold">B</div>
        </div>
      </div>

      <!-- Add Task Form -->
      <div class="px-3 sm:px-6 py-2.5 bg-secondary-800/50 light:bg-secondary-100/50 border-b border-secondary-700 light:border-secondary-200 flex-shrink-0">
        <div class="flex gap-2">
          <input
            v-model="newTaskTitle"
            @keyup.enter="addTask"
            type="text"
            placeholder="Add a new task..."
            class="flex-1 bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg px-3 py-1.5 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors"
          />
          <select
            v-model="newTaskTag"
            class="bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg px-2 py-1.5 text-[9px] sm:text-[10px] text-secondary-300 light:text-secondary-600 focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"
          >
            <option v-for="tag in tagOptions" :key="tag" :value="tag">{{ tag }}</option>
          </select>
          <button
            @click="addTask"
            class="px-3 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] sm:text-xs font-semibold transition-colors cursor-pointer flex-shrink-0"
          >
            Add
          </button>
        </div>
      </div>

      <!-- Kanban Board -->
      <div class="flex-1 p-2 sm:p-4 flex gap-2 sm:gap-3 overflow-x-auto min-h-0">
        <!-- To Do Column -->
        <div class="flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col">
          <div class="flex items-center justify-between mb-2 px-1 flex-shrink-0">
            <span class="text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500">TO DO</span>
            <span class="text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400">{{ taskColumns.todo.length }}</span>
          </div>
          <div class="space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain">
            <div
              v-for="task in taskColumns.todo"
              :key="task.id"
              class="bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer group"
              @click="moveTask('todo', 'progress', task.id)"
            >
              <div class="flex items-start gap-1.5">
                <button
                  @click.stop="toggleTaskDone('todo', task.id)"
                  class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-secondary-500 light:border-secondary-300 flex-shrink-0 mt-0.5 hover:border-primary-500 transition-colors cursor-pointer"
                  aria-label="Mark as done"
                ></button>
                <div class="flex-1 min-w-0">
                  <div class="text-[9px] sm:text-[10px] text-white light:text-secondary-900 leading-tight">{{ task.title }}</div>
                  <span class="inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium" :class="task.tagColor">{{ task.tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- In Progress Column -->
        <div class="flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col">
          <div class="flex items-center justify-between mb-2 px-1 flex-shrink-0">
            <span class="text-[9px] sm:text-[10px] font-semibold text-primary-500">IN PROGRESS</span>
            <span class="text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400">{{ taskColumns.progress.length }}</span>
          </div>
          <div class="space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain">
            <div
              v-for="task in taskColumns.progress"
              :key="task.id"
              class="bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-primary-500/30 hover:border-primary-500/60 transition-colors cursor-pointer group"
              @click="moveTask('progress', 'done', task.id)"
            >
              <div class="flex items-start gap-1.5">
                <button
                  @click.stop="toggleTaskDone('progress', task.id)"
                  class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-primary-500 flex-shrink-0 mt-0.5 hover:bg-primary-500/20 transition-colors cursor-pointer"
                  aria-label="Mark as done"
                ></button>
                <div class="flex-1 min-w-0">
                  <div class="text-[9px] sm:text-[10px] text-white light:text-secondary-900 leading-tight">{{ task.title }}</div>
                  <span class="inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium" :class="task.tagColor">{{ task.tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Done Column -->
        <div class="flex-1 min-w-[140px] sm:min-w-0 bg-secondary-800/50 light:bg-secondary-200/50 rounded-lg p-2 sm:p-2.5 flex flex-col">
          <div class="flex items-center justify-between mb-2 px-1 flex-shrink-0">
            <span class="text-[9px] sm:text-[10px] font-semibold text-primary-500">DONE</span>
            <span class="text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400">{{ taskColumns.done.length }}</span>
          </div>
          <div class="space-y-1.5 sm:space-y-2 overflow-y-auto flex-1 min-h-0 overscroll-contain">
            <div
              v-for="task in taskColumns.done"
              :key="task.id"
              class="bg-secondary-800 light:bg-white rounded-md p-2 sm:p-2.5 border border-secondary-700 light:border-secondary-200 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              @click="toggleTaskDone('done', task.id)"
            >
              <div class="flex items-start gap-1.5">
                <div class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 line-through leading-tight">{{ task.title }}</div>
                  <span class="inline-block mt-1 px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium" :class="task.tagColor">{{ task.tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ============ WEATHER (INTERACTIVE) ============ -->
    <div v-else-if="projectType === 'weather'" class="flex-1 flex flex-col min-h-0">
      <!-- Header -->
      <div class="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0">
        <div class="flex items-center gap-2">
          <span class="text-base sm:text-lg">🌤️</span>
          <span class="text-xs sm:text-sm font-semibold text-white light:text-secondary-900">SkyCast</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex rounded-lg overflow-hidden border border-secondary-600 light:border-secondary-200">
            <button
              @click="unit = 'C'"
              class="px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold transition-colors cursor-pointer"
              :class="unit === 'C' ? 'bg-primary-600 text-white' : 'text-secondary-400 light:text-secondary-500 hover:text-white light:hover:text-secondary-900'"
            >°C</button>
            <button
              @click="unit = 'F'"
              class="px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold transition-colors cursor-pointer"
              :class="unit === 'F' ? 'bg-primary-600 text-white' : 'text-secondary-400 light:text-secondary-500 hover:text-white light:hover:text-secondary-900'"
            >°F</button>
          </div>
        </div>
      </div>

      <!-- City Search -->
      <div class="px-3 sm:px-6 py-2.5 bg-secondary-800/50 light:bg-secondary-100/50 border-b border-secondary-700 light:border-secondary-200 flex-shrink-0 relative">
        <div class="flex gap-2">
          <div class="flex-1 relative">
            <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary-500 light:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search city..."
              class="w-full bg-secondary-700/50 light:bg-white border border-secondary-600 light:border-secondary-200 rounded-lg pl-7 pr-3 py-1.5 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>
        </div>
        <!-- City dropdown -->
        <div v-if="searchQuery" class="absolute left-3 sm:left-6 right-3 sm:right-6 top-full mt-1 bg-secondary-800 light:bg-white border border-secondary-700 light:border-secondary-200 rounded-lg shadow-xl z-10 overflow-hidden">
          <button
            v-for="city in filteredCities"
            :key="city"
            @click="selectCity(city)"
            class="w-full px-3 py-2 text-left text-[10px] sm:text-xs text-secondary-300 light:text-secondary-600 hover:bg-primary-500/10 hover:text-primary-500 transition-colors cursor-pointer flex items-center gap-2"
          >
            <span>{{ cities[city].emoji }}</span>
            <span>{{ city }}</span>
            <span class="ml-auto text-secondary-500 light:text-secondary-400">{{ cities[city].temp }}°</span>
          </button>
        </div>
      </div>

      <!-- Current Weather -->
      <div class="px-3 sm:px-6 py-3 sm:py-4 bg-gradient-to-br from-primary-600/30 to-primary-500/10 flex-shrink-0">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-2xl sm:text-3xl font-bold text-white light:text-secondary-900">{{ displayTemp }}°{{ unit }}</div>
            <div class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mt-0.5">{{ currentWeather.condition }}</div>
            <div class="text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mt-0.5">{{ selectedCity }} • 💧 {{ currentWeather.humidity }}% • 🌬️ {{ currentWeather.wind }} km/h</div>
          </div>
          <div class="text-4xl sm:text-5xl">{{ currentWeather.emoji }}</div>
        </div>
      </div>

      <!-- Hourly Forecast -->
      <div class="px-3 sm:px-6 py-2.5 flex-shrink-0">
        <div class="text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-1.5 uppercase tracking-wider">Hourly Forecast</div>
        <div class="flex gap-1.5 sm:gap-2 overflow-x-auto">
          <div
            v-for="(hour, i) in hourlyForecast"
            :key="i"
            class="flex-1 min-w-[50px] sm:min-w-0 bg-secondary-800 light:bg-white rounded-lg p-1.5 sm:p-2 text-center border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer"
          >
            <div class="text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5">{{ hour.time }}</div>
            <div class="text-sm sm:text-base mb-0.5">{{ hour.emoji }}</div>
            <div class="text-[9px] sm:text-[10px] font-semibold text-white light:text-secondary-900">{{ hour.temp }}°</div>
          </div>
        </div>
      </div>

      <!-- 7-Day Forecast -->
      <div class="flex-1 px-3 sm:px-6 pb-3 sm:pb-4 min-h-0 overflow-y-auto overscroll-contain">
        <div class="text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-1.5 uppercase tracking-wider">7-Day Forecast</div>
        <div class="space-y-1 sm:space-y-1.5">
          <div
            v-for="(day, i) in weeklyForecast"
            :key="i"
            class="flex items-center justify-between bg-secondary-800 light:bg-white rounded-md px-2.5 sm:px-3 py-1.5 sm:py-2 border border-secondary-700 light:border-secondary-200 hover:border-primary-500/40 transition-colors cursor-pointer"
          >
            <span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 w-8 sm:w-10">{{ day.day }}</span>
            <span class="text-sm sm:text-base">{{ day.emoji }}</span>
            <div class="flex-1 mx-2 sm:mx-3 h-1 bg-secondary-700 light:bg-secondary-200 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-yellow-500 to-primary-500 rounded-full" :style="{ width: ((day.high - 10) * 5) + '%' }"></div>
            </div>
            <span class="text-[9px] sm:text-[10px] text-white light:text-secondary-900 font-semibold w-10 sm:w-12 text-right">{{ day.high }}° / {{ day.low }}°</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ============ ANALYTICS (INTERACTIVE) ============ -->
    <div v-else-if="projectType === 'analytics'" class="flex-1 flex flex-col min-h-0">
      <!-- Sidebar + Main -->
      <div class="flex-1 flex overflow-hidden min-h-0">
        <!-- Sidebar -->
        <div class="w-10 sm:w-14 bg-secondary-800 light:bg-white border-r border-secondary-700 light:border-secondary-200 flex flex-col items-center py-2 sm:py-3 gap-2 sm:gap-3 flex-shrink-0">
          <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-primary-500 flex items-center justify-center">
            <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div v-for="i in 4" :key="i" class="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-secondary-700/50 light:bg-secondary-200 flex items-center justify-center cursor-pointer hover:bg-primary-500/20 transition-colors">
            <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-secondary-500 light:bg-secondary-400"></div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1 p-2 sm:p-4 overflow-y-auto min-h-0 overscroll-contain">
          <!-- Platform Filter -->
          <div class="flex gap-1.5 sm:gap-2 mb-3 flex-wrap">
            <button
              v-for="platform in platforms"
              :key="platform"
              @click="setPlatform(platform)"
              class="px-2 sm:px-3 py-1 rounded-full text-[8px] sm:text-[9px] font-medium transition-all cursor-pointer"
              :class="selectedPlatform === platform
                ? 'bg-primary-600 text-white shadow-md shadow-primary-500/25'
                : 'bg-secondary-800 light:bg-white text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 hover:text-white light:hover:text-secondary-900'"
            >{{ platform }}</button>
          </div>

          <!-- Stats Row -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-3">
            <div class="bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200">
              <div class="text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5">Followers</div>
              <div class="text-sm sm:text-lg font-bold text-white light:text-secondary-900">{{ analyticsData.followers.toLocaleString() }}</div>
              <div class="text-[8px] sm:text-[9px] text-primary-500 mt-0.5">▲ 12%</div>
            </div>
            <div class="bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200">
              <div class="text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5">Engagement</div>
              <div class="text-sm sm:text-lg font-bold text-white light:text-secondary-900">{{ analyticsData.engagement }}%</div>
              <div class="text-[8px] sm:text-[9px] text-primary-500 mt-0.5">▲ 0.8%</div>
            </div>
            <div class="bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200">
              <div class="text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5">Reach</div>
              <div class="text-sm sm:text-lg font-bold text-white light:text-secondary-900">{{ analyticsData.reach.toLocaleString() }}</div>
              <div class="text-[8px] sm:text-[9px] text-primary-500 mt-0.5">▲ 23%</div>
            </div>
            <div class="bg-secondary-800 light:bg-white rounded-lg p-2 sm:p-3 border border-secondary-700 light:border-secondary-200">
              <div class="text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400 mb-0.5">Posts</div>
              <div class="text-sm sm:text-lg font-bold text-white light:text-secondary-900">{{ analyticsData.posts }}</div>
              <div class="text-[8px] sm:text-[9px] text-primary-500 mt-0.5">▲ 5%</div>
            </div>
          </div>

          <!-- Chart Area -->
          <div class="bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200 mb-3">
            <div class="text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2">Engagement Over Time</div>
            <div class="h-20 sm:h-24 flex items-end gap-1">
              <div
                v-for="(bar, i) in chartData"
                :key="i"
                class="flex-1 flex flex-col items-center gap-1 group cursor-pointer"
                @mouseenter="bar.hover = true"
                @mouseleave="bar.hover = false"
              >
                <div
                  class="w-full rounded-t bg-gradient-to-t from-primary-600 to-primary-400 transition-all duration-300 group-hover:from-primary-500 group-hover:to-primary-300"
                  :style="{ height: bar.value + '%' }"
                  :class="{ 'opacity-40': i % 3 === 0 }"
                ></div>
                <span class="text-[6px] sm:text-[7px] text-secondary-500 light:text-secondary-400">{{ bar.label }}</span>
              </div>
            </div>
          </div>

          <!-- Platform Breakdown -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div class="bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200">
              <div class="text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2">Platforms</div>
              <div class="space-y-1.5 sm:space-y-2">
                <div
                  v-for="(platform, i) in ['Instagram', 'Twitter', 'LinkedIn']"
                  :key="platform"
                  class="flex items-center gap-2 cursor-pointer hover:bg-secondary-700/30 light:hover:bg-secondary-100 rounded-md px-1.5 py-1 transition-colors"
                  @click="setPlatform(platform)"
                >
                  <div class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full" :class="['bg-primary-500', 'bg-accent-500', 'bg-yellow-500'][i]"></div>
                  <span class="text-[8px] sm:text-[9px] text-secondary-400 light:text-secondary-500 flex-1">{{ platform }}</span>
                  <span class="text-[8px] sm:text-[9px] font-semibold text-white light:text-secondary-900">{{ [45, 30, 25][i] }}%</span>
                </div>
              </div>
            </div>
            <div class="bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200">
              <div class="text-[9px] sm:text-[10px] font-semibold text-secondary-400 light:text-secondary-500 mb-2">Top Posts</div>
              <div class="space-y-1.5 sm:space-y-2">
                <div v-for="i in 3" :key="i" class="flex items-center gap-2 cursor-pointer hover:bg-secondary-700/30 light:hover:bg-secondary-100 rounded-md px-1.5 py-1 transition-colors">
                  <div class="w-5 h-5 sm:w-6 sm:h-6 rounded bg-gradient-to-br flex items-center justify-center text-[10px] sm:text-xs flex-shrink-0" :class="['from-primary-500/30 to-primary-500/10', 'from-accent-500/30 to-accent-500/10', 'from-yellow-500/30 to-yellow-500/10'][i-1]">
                    {{ ['📸', '🐦', '💼'][i-1] }}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="h-1.5 bg-secondary-700 light:bg-secondary-200 rounded mb-1 w-4/5"></div>
                    <div class="h-1 bg-secondary-700 light:bg-secondary-200 rounded w-1/2"></div>
                  </div>
                  <span class="text-[8px] sm:text-[9px] text-primary-500">{{ [1200, 890, 650][i-1] }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ============ RECIPE (INTERACTIVE) ============ -->
    <div v-else-if="projectType === 'recipe'" class="flex-1 flex flex-col min-h-0">
      <!-- Header -->
      <div class="px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0">
        <div class="flex items-center justify-between mb-2">
          <div class="text-xs sm:text-sm font-bold text-primary-500">🍳 FlavorFind</div>
          <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary-500/20 flex items-center justify-center cursor-pointer hover:bg-primary-500/30 transition-colors">
            <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <!-- Search Bar -->
        <div class="flex gap-1.5 sm:gap-2">
          <div class="flex-1 relative">
            <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary-500 light:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              v-model="recipeSearch"
              type="text"
              placeholder="Search recipes..."
              class="w-full bg-secondary-700/50 light:bg-secondary-100 rounded-lg pl-7 pr-3 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white light:text-secondary-900 placeholder-secondary-500 light:placeholder-secondary-400 focus:outline-none focus:border-primary-500 border border-transparent focus:border-primary-500/50 transition-colors"
            />
          </div>
          <button class="bg-primary-500 hover:bg-primary-400 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 flex items-center transition-colors cursor-pointer">
            <span class="text-[10px] sm:text-xs text-white font-semibold">Search</span>
          </button>
        </div>
      </div>

      <!-- Category Chips -->
      <div class="px-3 sm:px-6 py-2 flex gap-1.5 sm:gap-2 overflow-x-auto flex-shrink-0">
        <button
          v-for="cat in recipeCategories"
          :key="cat"
          @click="recipeCategory = cat"
          class="px-2.5 sm:px-3 py-1 rounded-full text-[8px] sm:text-[9px] font-medium whitespace-nowrap transition-all cursor-pointer"
          :class="recipeCategory === cat
            ? 'bg-primary-500 text-white shadow-md shadow-primary-500/25'
            : 'bg-secondary-800 light:bg-white text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 hover:text-white light:hover:text-secondary-900'"
        >{{ cat }}</button>
      </div>

      <!-- Recipe Cards -->
      <div class="flex-1 px-3 sm:px-6 pb-3 sm:pb-4 grid grid-cols-2 gap-2 sm:gap-3 overflow-y-auto min-h-0 overscroll-contain">
        <div
          v-for="recipe in filteredRecipes"
          :key="recipe.id"
          @click="selectRecipe(recipe)"
          class="bg-secondary-800 light:bg-white rounded-lg overflow-hidden border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-200 cursor-pointer"
        >
          <div class="h-14 sm:h-16 bg-gradient-to-br relative flex items-center justify-center text-2xl sm:text-3xl" :class="recipe.color">
            <span>{{ recipe.emoji }}</span>
            <div class="absolute top-1.5 right-1.5 bg-accent-500 text-white text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded-full font-medium">⏱ {{ recipe.time }} min</div>
          </div>
          <div class="p-2 sm:p-2.5">
            <div class="text-[9px] sm:text-[10px] text-white light:text-secondary-900 font-medium mb-1 truncate">{{ recipe.name }}</div>
            <div class="flex items-center gap-1">
              <span class="text-yellow-500 text-[9px] sm:text-[10px]">★</span>
              <span class="text-[8px] sm:text-[9px] text-secondary-500 light:text-secondary-400">{{ recipe.rating }}</span>
              <span class="ml-auto text-[7px] sm:text-[8px] text-secondary-500 light:text-secondary-400">{{ recipe.category }}</span>
            </div>
          </div>
        </div>
        <div v-if="filteredRecipes.length === 0" class="col-span-2 text-center py-8">
          <div class="text-3xl mb-2">🔍</div>
          <p class="text-xs text-secondary-400 light:text-secondary-500">No recipes found</p>
        </div>
      </div>

      <!-- Recipe Detail Modal -->
      <transition name="fade">
        <div v-if="selectedRecipe" class="absolute inset-0 bg-dark-900/80 light:bg-secondary-900/80 backdrop-blur-sm z-20 flex items-center justify-center p-4" @click="selectedRecipe = null">
          <div class="bg-secondary-800 light:bg-white rounded-xl max-w-sm w-full p-5 border border-secondary-700 light:border-secondary-200 shadow-2xl" @click.stop>
            <div class="flex items-start justify-between mb-3">
              <div class="text-3xl">{{ selectedRecipe.emoji }}</div>
              <button @click="selectedRecipe = null" class="text-secondary-400 hover:text-white light:hover:text-secondary-900 transition-colors cursor-pointer" aria-label="Close recipe">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <h3 class="text-sm font-bold text-white light:text-secondary-900 mb-1">{{ selectedRecipe.name }}</h3>
            <div class="flex items-center gap-2 mb-3">
              <span class="text-yellow-500 text-xs">★ {{ selectedRecipe.rating }}</span>
              <span class="text-[9px] text-secondary-500 light:text-secondary-400">•</span>
              <span class="text-[9px] text-secondary-500 light:text-secondary-400">⏱ {{ selectedRecipe.time }} min</span>
              <span class="text-[9px] text-secondary-500 light:text-secondary-400">•</span>
              <span class="text-[9px] text-secondary-500 light:text-secondary-400">{{ selectedRecipe.category }}</span>
            </div>
            <div class="space-y-2 mb-4">
              <div v-for="i in 4" :key="i" class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0"></div>
                <div class="h-1.5 bg-secondary-700 light:bg-secondary-200 rounded flex-1" :style="{ width: (60 + (i * 8)) + '%' }"></div>
              </div>
            </div>
            <button
              @click="selectedRecipe = null"
              class="w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer"
            >
              Start Cooking
            </button>
          </div>
        </div>
      </transition>
    </div>

    <!-- ============ PORTFOLIO (INTERACTIVE) ============ -->
    <div v-else-if="projectType === 'portfolio'" class="flex-1 flex flex-col min-h-0">
      <!-- Nav -->
      <div class="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0">
        <div class="text-xs sm:text-sm font-bold text-primary-500">👨‍💻 DevName</div>
        <div class="flex gap-2 sm:gap-4 text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500">
          <button
            v-for="tab in portfolioTabs"
            :key="tab"
            @click="setPortfolioTab(tab)"
            class="capitalize cursor-pointer transition-colors"
            :class="portfolioTab === tab ? 'text-primary-500 font-semibold' : 'hover:text-white light:hover:text-secondary-900'"
          >{{ tab }}</button>
        </div>
      </div>

      <!-- Content -->
      <div class="flex-1 overflow-y-auto min-h-0 overscroll-contain">
        <!-- Home -->
        <div v-if="portfolioTab === 'home'" class="h-full flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-secondary-800 to-secondary-900 light:from-white light:to-secondary-100">
          <div class="text-center">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div class="text-base sm:text-lg font-bold text-white light:text-secondary-900 mb-1.5">Hi, I'm a Developer</div>
            <div class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-3 sm:mb-4">Building beautiful web experiences</div>
            <div class="flex gap-2 justify-center">
              <button @click="setPortfolioTab('projects')" class="bg-primary-500 hover:bg-primary-400 text-white text-[9px] sm:text-[10px] font-semibold px-3 sm:px-4 py-1.5 rounded-full transition-colors cursor-pointer">View Work</button>
              <button @click="setPortfolioTab('contact')" class="border border-secondary-600 light:border-secondary-300 text-secondary-300 light:text-secondary-600 hover:text-white light:hover:text-secondary-900 text-[9px] sm:text-[10px] font-semibold px-3 sm:px-4 py-1.5 rounded-full transition-colors cursor-pointer">Contact Me</button>
            </div>
          </div>
        </div>

        <!-- About -->
        <div v-else-if="portfolioTab === 'about'" class="p-4 sm:p-6">
          <h3 class="text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3">About Me</h3>
          <div class="space-y-2 mb-4">
            <div v-for="i in 4" :key="i" class="h-2 bg-secondary-700 light:bg-secondary-200 rounded" :style="{ width: (70 + (i * 5)) + '%' }"></div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div v-for="skill in ['Vue.js', 'React', 'Node.js', 'TypeScript', 'Tailwind', 'GraphQL']" :key="skill" class="bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200 text-center">
              <div class="text-[9px] sm:text-[10px] text-primary-500 font-medium">{{ skill }}</div>
              <div class="mt-1.5 h-1 bg-secondary-700 light:bg-secondary-200 rounded-full overflow-hidden">
                <div class="h-full bg-primary-500 rounded-full" :style="{ width: (60 + (skill.length * 3)) + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Projects -->
        <div v-else-if="portfolioTab === 'projects'" class="p-4 sm:p-6">
          <h3 class="text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3">My Projects</h3>
          <div class="grid grid-cols-2 gap-2 sm:gap-3">
            <div v-for="i in 4" :key="i" class="bg-secondary-800 light:bg-white rounded-lg overflow-hidden border border-secondary-700 light:border-secondary-200 hover:border-primary-500/50 transition-colors cursor-pointer">
              <div class="h-12 sm:h-16 bg-gradient-to-br flex items-center justify-center text-xl sm:text-2xl" :class="['from-primary-500/30 to-primary-500/10', 'from-accent-500/30 to-accent-500/10', 'from-yellow-500/30 to-yellow-500/10', 'from-blue-500/30 to-blue-500/10'][i-1]">
                {{ ['📱', '🌐', '🎮', '📊'][i-1] }}
              </div>
              <div class="p-2 sm:p-2.5">
                <div class="h-1.5 bg-secondary-700 light:bg-secondary-200 rounded mb-1 w-4/5"></div>
                <div class="h-1 bg-secondary-700 light:bg-secondary-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact -->
        <div v-else class="p-4 sm:p-6">
          <h3 class="text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3">Get In Touch</h3>
          <div class="space-y-2 mb-4">
            <div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200">
              <span class="text-base">📧</span>
              <span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500">hello@devname.com</span>
            </div>
            <div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200">
              <span class="text-base">💼</span>
              <span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500">linkedin.com/in/devname</span>
            </div>
            <div class="flex items-center gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 border border-secondary-700 light:border-secondary-200">
              <span class="text-base">🐙</span>
              <span class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500">github.com/devname</span>
            </div>
          </div>
          <button class="w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-semibold transition-colors cursor-pointer">Send Message</button>
        </div>
      </div>

      <!-- Tech Stack Bar -->
      <div class="px-3 sm:px-6 py-2 sm:py-3 bg-secondary-800 light:bg-white border-t border-secondary-700 light:border-secondary-200 flex-shrink-0">
        <div class="flex justify-center gap-1.5 sm:gap-3 overflow-x-auto">
          <div v-for="tech in ['Vue', 'React', 'Node', 'Python', 'Go']" :key="tech"
            class="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-secondary-700/50 light:bg-secondary-100 text-[8px] sm:text-[9px] text-secondary-400 light:text-secondary-500 border border-secondary-700 light:border-secondary-200 whitespace-nowrap"
          >{{ tech }}</div>
        </div>
      </div>
    </div>

    <!-- ============ GENERIC (INTERACTIVE) ============ -->
    <div v-else class="flex-1 flex flex-col min-h-0">
      <!-- Header -->
      <div class="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0">
        <div class="text-xs sm:text-sm font-bold text-primary-500">{{ project.title }}</div>
        <div class="flex gap-2 sm:gap-3 text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500">
          <button
            v-for="tab in genericTabs"
            :key="tab"
            @click="setGenericTab(tab)"
            class="capitalize cursor-pointer transition-colors"
            :class="genericTab === tab ? 'text-primary-500 font-semibold' : 'hover:text-white light:hover:text-secondary-900'"
          >{{ tab }}</button>
        </div>
      </div>

      <!-- Content -->
      <div class="flex-1 overflow-y-auto min-h-0 overscroll-contain">
        <!-- Home -->
        <div v-if="genericTab === 'home'" class="h-full flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-primary-600/20 to-primary-500/5">
          <div class="text-center max-w-sm">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-500/20 mx-auto mb-2 sm:mb-3 flex items-center justify-center">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9h8M8 13h5" />
              </svg>
            </div>
            <div class="text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-1.5">{{ project.title }}</div>
            <div class="text-[9px] sm:text-[10px] text-secondary-400 light:text-secondary-500 mb-3 sm:mb-4 leading-relaxed">{{ project.description }}</div>
            <div class="flex gap-1.5 sm:gap-2 justify-center flex-wrap">
              <div v-for="tech in project.tech.slice(0, 3)" :key="tech"
                class="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-primary-500/10 text-[8px] sm:text-[9px] text-primary-500 border border-primary-500/20"
              >{{ tech }}</div>
            </div>
          </div>
        </div>

        <!-- Features -->
        <div v-else-if="genericTab === 'features'" class="p-4 sm:p-6">
          <h3 class="text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3">Features</h3>
          <div class="space-y-2">
            <div v-for="(feature, i) in (project.features || ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'])" :key="i" class="flex items-start gap-2 bg-secondary-800 light:bg-white rounded-lg p-2.5 sm:p-3 border border-secondary-700 light:border-secondary-200">
              <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-[9px] sm:text-[10px] text-secondary-300 light:text-secondary-600 leading-relaxed">{{ feature }}</span>
            </div>
          </div>
        </div>

        <!-- About -->
        <div v-else class="p-4 sm:p-6">
          <h3 class="text-sm sm:text-base font-bold text-white light:text-secondary-900 mb-3">About</h3>
          <div class="space-y-2">
            <div v-for="i in 5" :key="i" class="h-2 bg-secondary-700 light:bg-secondary-200 rounded" :style="{ width: (65 + (i * 5)) + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>