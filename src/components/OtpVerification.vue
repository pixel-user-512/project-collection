<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { Mail, ShieldCheck, Loader2, ChevronLeft, Clock } from '@lucide/vue'

const props = defineProps({
  merchant: {
    type: Object,
    required: true,
  },
  phone: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['verified', 'back', 'resend'])

const otp = ref(['', '', '', '', '', ''])
const otpInputs = ref([])
const isVerifying = ref(false)
const isResending = ref(false)
const resendTimer = ref(30)
const error = ref('')

let timerInterval = null

const formattedPhone = computed(() => {
  if (!props.phone) return 'your mobile number'
  const digits = props.phone.replace(/\D/g, '')
  if (digits.length <= 3) return digits
  if (digits.length <= 7) return `${digits.slice(0, 3)} ${digits.slice(3)}`
  return `${digits.slice(0, 3)} ${digits.slice(3, 7)} ${digits.slice(7)}`
})

const isOtpComplete = computed(() => otp.value.every((d) => d !== ''))

const handleOtpInput = (index, e) => {
  const value = e.target.value.replace(/\D/g, '').slice(-1)
  otp.value[index] = value
  error.value = ''

  if (value && index < 5) {
    otpInputs.value[index + 1]?.focus()
  }
}

const handleOtpKeydown = (index, e) => {
  if (e.key === 'Backspace' && !otp.value[index] && index > 0) {
    otpInputs.value[index - 1]?.focus()
  }
  if (e.key === 'ArrowLeft' && index > 0) {
    otpInputs.value[index - 1]?.focus()
  }
  if (e.key === 'ArrowRight' && index < 5) {
    otpInputs.value[index + 1]?.focus()
  }
}

const handlePaste = (e) => {
  const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
  if (!pasted) return
  e.preventDefault()
  const chars = pasted.split('')
  otp.value = ['', '', '', '', '', '']
  chars.forEach((char, i) => {
    otp.value[i] = char
  })
  otpInputs.value[Math.min(chars.length, 5)]?.focus()
}

const handleVerify = async () => {
  if (!isOtpComplete.value || isVerifying.value) return
  isVerifying.value = true
  error.value = ''

  // Simulate OTP verification
  setTimeout(() => {
    isVerifying.value = false
    emit('verified')
  }, 1200)
}

const handleResend = async () => {
  if (isResending.value || resendTimer.value > 0) return
  isResending.value = true
  await emit('resend')
  isResending.value = false
  resendTimer.value = 30
  startTimer()
}

const startTimer = () => {
  if (timerInterval) clearInterval(timerInterval)
  timerInterval = setInterval(() => {
    resendTimer.value--
    if (resendTimer.value <= 0) {
      clearInterval(timerInterval)
      timerInterval = null
    }
  }, 1000)
}

onMounted(() => {
  startTimer()
  setTimeout(() => otpInputs.value[0]?.focus(), 300)
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})

watch(isOtpComplete, (complete) => {
  if (complete) {
    setTimeout(() => handleVerify(), 300)
  }
})
</script>

<template>
  <div class="flex flex-col">
    <!-- Header -->
    <div class="px-4 sm:px-5 py-4 sm:py-5 flex-shrink-0" :style="{ background: `linear-gradient(135deg, ${merchant.hexColor}, ${merchant.hexColor}cc)` }">
      <div class="flex items-center gap-3">
        <button
          @click="emit('back')"
          class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Go back"
        >
          <ChevronLeft class="w-4 h-4 text-white" />
        </button>
        <div>
          <div class="text-white font-bold text-sm sm:text-base leading-tight">Verify OTP</div>
          <div class="text-white/70 text-[10px] sm:text-[11px] mt-0.5">Enter the code sent to your phone</div>
        </div>
      </div>
    </div>

    <!-- OTP Content -->
    <div class="p-4 sm:p-5">
      <!-- Phone Info -->
      <div class="flex items-center gap-2 bg-secondary-50 border border-secondary-200 rounded-lg p-3 mb-5">
        <Mail class="w-4 h-4 text-primary-500 flex-shrink-0" />
        <p class="text-[11px] text-secondary-600">
          We sent a 6-digit code to <span class="font-semibold text-secondary-900">{{ formattedPhone }}</span>
        </p>
      </div>

      <!-- OTP Inputs -->
      <div class="flex gap-2 sm:gap-2.5 mb-4">
        <input
          v-for="(digit, index) in otp"
          :key="index"
          :ref="(el) => { if (el) otpInputs[index] = el }"
          :value="digit"
          @input="handleOtpInput(index, $event)"
          @keydown="handleOtpKeydown(index, $event)"
          @paste="handlePaste"
          type="tel"
          inputmode="numeric"
          maxlength="1"
          class="w-11 h-12 sm:w-12 sm:h-12 text-center text-lg font-bold text-secondary-900 bg-secondary-50 border border-secondary-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
          :class="{ 'border-primary-500 ring-2 ring-primary-500/20': digit }"
        />
      </div>

      <!-- Error -->
      <p v-if="error" class="text-[11px] text-accent-500 mb-3">{{ error }}</p>

      <!-- Resend -->
      <div class="flex items-center justify-between mb-5">
        <div class="flex items-center gap-1.5 text-[11px] text-secondary-400">
          <Clock class="w-3.5 h-3.5" />
          <span v-if="resendTimer > 0">Resend in {{ resendTimer }}s</span>
          <span v-else>Code expired</span>
        </div>
        <button
          @click="handleResend"
          :disabled="resendTimer > 0 || isResending"
          class="text-[11px] font-semibold transition-colors cursor-pointer"
          :class="resendTimer > 0 ? 'text-secondary-300 cursor-not-allowed' : 'text-primary-500 hover:text-primary-600'"
        >
          {{ isResending ? 'Sending...' : 'Resend Code' }}
        </button>
      </div>

      <!-- Security Note -->
      <div class="flex items-start gap-2 bg-secondary-50 border border-secondary-200 rounded-lg p-3 mb-4">
        <ShieldCheck class="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
        <p class="text-[10px] text-secondary-500 leading-relaxed">
          Never share your OTP with anyone. Our team will never ask for this code.
        </p>
      </div>

      <!-- Verify Button -->
      <button
        @click="handleVerify"
        :disabled="!isOtpComplete || isVerifying"
        class="w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
        :class="isOtpComplete && !isVerifying
          ? 'text-white shadow-lg hover:opacity-90 active:scale-[0.98]'
          : 'bg-secondary-200 text-secondary-400 cursor-not-allowed'"
        :style="isOtpComplete && !isVerifying ? { background: merchant.hexColor, boxShadow: `0 4px 15px ${merchant.hexColor}40` } : {}"
      >
        <Loader2 v-if="isVerifying" class="w-4 h-4 animate-spin" />
        <template v-else>
          <ShieldCheck class="w-4 h-4" />
          <span>Verify & Redeem</span>
        </template>
      </button>
    </div>
  </div>
</template>