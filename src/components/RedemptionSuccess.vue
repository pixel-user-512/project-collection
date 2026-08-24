<script setup>
import { ref, computed } from 'vue'
import { CheckCircle2, KeyRound, Copy, Check, RotateCcw, ShieldCheck } from '@lucide/vue'

const props = defineProps({
  merchant: {
    type: Object,
    required: true,
  },
  referenceNumber: {
    type: String,
    default: '',
  },
  redemptionCode: {
    type: String,
    default: 'ABC12345',
  },
})

const emit = defineEmits(['new-redemption'])

const copied = ref(false)

const displayRef = computed(() => {
  return props.referenceNumber || 'RDM-XXXXXX'
})

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(displayRef.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    copied.value = false
  }
}
</script>

<template>
  <div class="flex flex-col">
    <!-- Success Header -->
    <div class="px-4 sm:px-5 py-5 sm:py-6 flex-shrink-0 text-center" :style="{ background: `linear-gradient(135deg, ${merchant.hexColor}, ${merchant.hexColor}cc)` }">
      <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-3 flex items-center justify-center">
        <CheckCircle2 class="w-7 h-7 sm:w-8 sm:h-8 text-white" />
      </div>
      <div class="text-white font-bold text-base sm:text-lg">Redemption Successful!</div>
      <div class="text-white/70 text-[11px] sm:text-xs mt-1">Your eGift has been sent to your account</div>
    </div>

    <!-- Success Content -->
    <div class="p-4 sm:p-5">
      <!-- Redemption Code Card -->
      <div class="bg-white border border-secondary-200 rounded-xl p-4 sm:p-5 mb-4 shadow-sm">
        <div class="text-[10px] sm:text-[11px] text-secondary-400 uppercase tracking-wider mb-1">Redemption Code</div>
        <div class="text-2xl sm:text-3xl font-bold text-secondary-900 font-mono tracking-wider">{{ redemptionCode }}</div>
        <div class="flex items-center gap-1.5 mt-1">
          <KeyRound class="w-3.5 h-3.5 text-primary-500" />
          <span class="text-[10px] sm:text-[11px] text-secondary-500">{{ merchant.name }} eGift</span>
        </div>
      </div>

      <!-- Reference Number -->
      <div class="bg-secondary-50 border border-secondary-200 rounded-xl p-4 sm:p-5 mb-4">
        <div class="text-[10px] sm:text-[11px] text-secondary-400 uppercase tracking-wider mb-2">Reference Number</div>
        <div class="flex items-center justify-between gap-2">
          <span class="text-sm sm:text-base font-mono font-semibold text-secondary-900">{{ displayRef }}</span>
          <button
            @click="handleCopy"
            class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-secondary-200 text-[10px] sm:text-[11px] font-medium text-secondary-600 hover:border-primary-500 hover:text-primary-600 transition-colors cursor-pointer"
          >
            <Copy v-if="!copied" class="w-3.5 h-3.5" />
            <Check v-else class="w-3.5 h-3.5 text-primary-500" />
            <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
          </button>
        </div>
      </div>

      <!-- What's Next -->
      <div class="bg-secondary-50 border border-secondary-200 rounded-xl p-4 sm:p-5 mb-4">
        <div class="text-[10px] sm:text-[11px] text-secondary-400 uppercase tracking-wider mb-2">What's Next?</div>
        <div class="space-y-2">
          <div class="flex items-start gap-2">
            <div class="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-[9px] font-bold text-primary-600">1</span>
            </div>
            <p class="text-[11px] text-secondary-600 leading-relaxed">Check your {{ merchant.name }} app for the eGift</p>
          </div>
          <div class="flex items-start gap-2">
            <div class="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-[9px] font-bold text-primary-600">2</span>
            </div>
            <p class="text-[11px] text-secondary-600 leading-relaxed">Use the eGift at any participating merchant</p>
          </div>
          <div class="flex items-start gap-2">
            <div class="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-[9px] font-bold text-primary-600">3</span>
            </div>
            <p class="text-[11px] text-secondary-600 leading-relaxed">Keep your reference number for support</p>
          </div>
        </div>
      </div>

      <!-- Security Note -->
      <div class="flex items-start gap-2 bg-secondary-50 border border-secondary-200 rounded-lg p-3 mb-4">
        <ShieldCheck class="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
        <p class="text-[10px] text-secondary-500 leading-relaxed">
          This transaction is protected. Contact support if you have any issues with your redemption.
        </p>
      </div>

      <!-- New Redemption Button -->
      <button
        @click="emit('new-redemption')"
        class="w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
        :style="{ background: merchant.hexColor, boxShadow: `0 4px 15px ${merchant.hexColor}40` }"
      >
        <RotateCcw class="w-4 h-4 text-white" />
        <span class="text-white">New Redemption</span>
      </button>
    </div>
  </div>
</template>