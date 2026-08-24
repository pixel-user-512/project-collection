<script setup>
import { ref, computed } from 'vue'
import { History, Clock, XCircle, CheckCircle2, RotateCcw, Ban, ChevronLeft, Gift } from '@lucide/vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['close'])

const statusFilter = ref('all')

const statusConfig = {
  processing: {
    label: 'Processing',
    icon: Clock,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  voided: {
    label: 'Voided',
    icon: XCircle,
    color: 'text-accent-500',
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/20',
  },
  successful: {
    label: 'Successful',
    icon: CheckCircle2,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  redeemed: {
    label: 'Redeemed',
    icon: RotateCcw,
    color: 'text-primary-500',
    bg: 'bg-primary-500/10',
    border: 'border-primary-500/20',
  },
  cancelled: {
    label: 'Cancelled',
    icon: Ban,
    color: 'text-secondary-400',
    bg: 'bg-secondary-400/10',
    border: 'border-secondary-400/20',
  },
}

const filters = ['all', 'processing', 'voided', 'successful', 'redeemed', 'cancelled']

const filteredItems = computed(() => {
  if (statusFilter.value === 'all') return props.items
  return props.items.filter((item) => item.status === statusFilter.value)
})

const getStatusConfig = (status) => statusConfig[status] || statusConfig.processing
</script>

<template>
  <div class="flex flex-col h-full">
    <!-- Header -->
    <div class="px-4 sm:px-5 py-3 sm:py-4 bg-white border-b border-secondary-200 flex-shrink-0">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <button
            @click="emit('close')"
            class="w-8 h-8 rounded-full bg-secondary-100 hover:bg-secondary-200 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close history"
          >
            <ChevronLeft class="w-4 h-4 text-secondary-600" />
          </button>
          <div class="flex items-center gap-2">
            <History class="w-4 h-4 text-primary-500" />
            <span class="text-sm font-bold text-secondary-900">Redemption History</span>
          </div>
        </div>
        <span class="text-[10px] text-secondary-400">{{ filteredItems.length }} records</span>
      </div>
    </div>

    <!-- Status Filters -->
    <div class="px-4 sm:px-5 py-2.5 bg-white border-b border-secondary-200 flex-shrink-0 overflow-x-auto">
      <div class="flex gap-1.5">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="statusFilter = filter"
          class="px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap transition-all cursor-pointer"
          :class="statusFilter === filter
            ? 'bg-primary-500 text-white shadow-md shadow-primary-500/25'
            : 'bg-secondary-100 text-secondary-500 hover:bg-secondary-200'"
        >
          {{ filter === 'all' ? 'All' : statusConfig[filter].label }}
        </button>
      </div>
    </div>

    <!-- History List -->
    <div class="flex-1 overflow-y-auto min-h-0 overscroll-contain bg-secondary-50">
      <div v-if="filteredItems.length === 0" class="flex flex-col items-center justify-center py-12">
        <div class="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center mb-3">
          <History class="w-5 h-5 text-secondary-400" />
        </div>
        <p class="text-xs text-secondary-400">No redemption records found</p>
      </div>

      <div v-else class="p-3 sm:p-4 space-y-2">
        <div
          v-for="item in filteredItems"
          :key="item.id"
          class="bg-white border border-secondary-200 rounded-xl p-3 sm:p-3.5 hover:border-primary-500/30 hover:shadow-sm transition-all"
        >
          <div class="flex items-start justify-between gap-2 mb-2">
            <div class="flex items-center gap-2 min-w-0">
              <div class="w-7 h-7 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0">
                <Gift class="w-3.5 h-3.5 text-secondary-500" />
              </div>
              <div class="min-w-0">
                <div class="text-[11px] font-semibold text-secondary-900 truncate">{{ item.id }}</div>
                <div class="text-[9px] text-secondary-400 font-mono truncate">{{ item.code }}</div>
              </div>
            </div>
            <span
              class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-medium border flex-shrink-0"
              :class="[getStatusConfig(item.status).bg, getStatusConfig(item.status).color, getStatusConfig(item.status).border]"
            >
              <component :is="getStatusConfig(item.status).icon" class="w-3 h-3" />
              {{ getStatusConfig(item.status).label }}
            </span>
          </div>
          <div class="flex items-center justify-between pl-9">
            <span class="text-[10px] text-secondary-400">{{ item.date }}</span>
            <span class="text-[11px] font-bold text-secondary-900">{{ item.amount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>