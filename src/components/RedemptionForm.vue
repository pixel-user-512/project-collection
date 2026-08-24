<script setup>
import { ref, computed } from 'vue'
import { Smartphone, KeyRound, Mail, ShieldCheck, Loader2 } from '@lucide/vue'

const props = defineProps({
  merchant: {
    type: Object,
    required: true,
  },
  isSubmitting: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['submit'])

const redemptionCode = ref('')
const mobileno = ref('')
const confirmMobileno = ref('')
const email = ref('')

const errors = ref({
  redemptionCode: '',
  mobileno: '',
  confirmMobileno: '',
  email: '',
})

const formatRedemptionCode = (value) => {
  // Allow alphanumeric, uppercase, max 8 chars
  return value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8)
}

const formatMobile = (value) => {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 3) return digits
  if (digits.length <= 7) return `${digits.slice(0, 3)} ${digits.slice(3)}`
  return `${digits.slice(0, 3)} ${digits.slice(3, 7)} ${digits.slice(7)}`
}

const handleCodeInput = (e) => {
  redemptionCode.value = formatRedemptionCode(e.target.value)
  errors.value.redemptionCode = ''
}

const handleMobileInput = (e) => {
  mobileno.value = formatMobile(e.target.value)
  errors.value.mobileno = ''
  // Clear confirm error if it no longer matches
  if (confirmMobileno.value && confirmMobileno.value !== mobileno.value) {
    errors.value.confirmMobileno = 'Mobile numbers do not match'
  } else {
    errors.value.confirmMobileno = ''
  }
}

const handleConfirmMobileInput = (e) => {
  confirmMobileno.value = formatMobile(e.target.value)
  errors.value.confirmMobileno = ''
}

const handleEmailInput = (e) => {
  email.value = e.target.value
  errors.value.email = ''
}

const validate = () => {
  errors.value = { redemptionCode: '', mobileno: '', confirmMobileno: '', email: '' }
  let valid = true

  // Redemption code: exactly 8 alphanumeric chars
  if (redemptionCode.value.length !== 8) {
    errors.value.redemptionCode = 'Redemption code must be exactly 8 characters'
    valid = false
  }

  // Mobile number: at least 10 digits
  const mobileDigits = mobileno.value.replace(/\D/g, '')
  if (mobileDigits.length < 10) {
    errors.value.mobileno = 'Enter a valid mobile number'
    valid = false
  }

  // Confirm mobile: must match
  if (confirmMobileno.value !== mobileno.value) {
    errors.value.confirmMobileno = 'Mobile numbers do not match'
    valid = false
  }

  // Email: basic validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    errors.value.email = 'Enter a valid email address'
    valid = false
  }

  return valid
}

const isFormValid = computed(() => {
  return redemptionCode.value.length === 8 &&
    mobileno.value.replace(/\D/g, '').length >= 10 &&
    confirmMobileno.value === mobileno.value &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
})

const handleSubmit = () => {
  if (!validate() || props.isSubmitting) return
  emit('submit', {
    redemptionCode: redemptionCode.value,
    mobileno: mobileno.value.replace(/\s/g, ''),
    email: email.value,
  })
}
</script>

<template>
  <div class="flex flex-col">
    <!-- Hero Banner -->
    <div class="px-4 sm:px-5 py-4 sm:py-5 flex-shrink-0" :style="{ background: `linear-gradient(135deg, ${merchant.hexColor}, ${merchant.hexColor}cc)` }">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
          <KeyRound class="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
        </div>
        <div>
          <div class="text-white font-bold text-sm sm:text-base leading-tight">Redeem your eGift</div>
          <div class="text-white/70 text-[10px] sm:text-[11px] mt-0.5">Enter your details to redeem</div>
        </div>
      </div>
    </div>

    <!-- Form Content -->
    <div class="p-4 sm:p-5">
      <!-- Redemption Code -->
      <div class="mb-4">
        <label class="block text-[11px] sm:text-xs font-semibold text-secondary-700 mb-1.5">
          Redemption Code
        </label>
        <div class="relative">
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400">
            <KeyRound class="w-4 h-4" />
          </div>
          <input
            :value="redemptionCode"
            @input="handleCodeInput"
            type="text"
            inputmode="text"
            placeholder="ABC12345"
            maxlength="8"
            class="w-full bg-secondary-50 border border-secondary-200 rounded-lg pl-9 pr-3 py-2.5 text-sm text-secondary-900 placeholder-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-mono uppercase tracking-wider"
            :class="{ 'border-accent-500 focus:border-accent-500 focus:ring-accent-500/20': errors.redemptionCode }"
          />
        </div>
        <p v-if="errors.redemptionCode" class="text-[10px] text-accent-500 mt-1">{{ errors.redemptionCode }}</p>
        <p v-else class="text-[10px] text-secondary-400 mt-1">Enter the 8-character code from your eGift</p>
      </div>

      <!-- Mobile Number -->
      <div class="mb-4">
        <label class="block text-[11px] sm:text-xs font-semibold text-secondary-700 mb-1.5">
          Mobile Number
        </label>
        <div class="relative">
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400">
            <Smartphone class="w-4 h-4" />
          </div>
          <input
            :value="mobileno"
            @input="handleMobileInput"
            type="tel"
            inputmode="numeric"
            placeholder="09XX XXX XXXX"
            class="w-full bg-secondary-50 border border-secondary-200 rounded-lg pl-9 pr-3 py-2.5 text-sm text-secondary-900 placeholder-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            :class="{ 'border-accent-500 focus:border-accent-500 focus:ring-accent-500/20': errors.mobileno }"
          />
        </div>
        <p v-if="errors.mobileno" class="text-[10px] text-accent-500 mt-1">{{ errors.mobileno }}</p>
        <p v-else class="text-[10px] text-secondary-400 mt-1">We'll send a one-time PIN to verify your number</p>
      </div>

      <!-- Retype Mobile Number -->
      <div class="mb-4">
        <label class="block text-[11px] sm:text-xs font-semibold text-secondary-700 mb-1.5">
          Retype Mobile Number
        </label>
        <div class="relative">
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400">
            <Smartphone class="w-4 h-4" />
          </div>
          <input
            :value="confirmMobileno"
            @input="handleConfirmMobileInput"
            type="tel"
            inputmode="numeric"
            placeholder="09XX XXX XXXX"
            class="w-full bg-secondary-50 border border-secondary-200 rounded-lg pl-9 pr-3 py-2.5 text-sm text-secondary-900 placeholder-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            :class="{ 'border-accent-500 focus:border-accent-500 focus:ring-accent-500/20': errors.confirmMobileno }"
          />
        </div>
        <p v-if="errors.confirmMobileno" class="text-[10px] text-accent-500 mt-1">{{ errors.confirmMobileno }}</p>
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label class="block text-[11px] sm:text-xs font-semibold text-secondary-700 mb-1.5">
          Email Address
        </label>
        <div class="relative">
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400">
            <Mail class="w-4 h-4" />
          </div>
          <input
            :value="email"
            @input="handleEmailInput"
            type="email"
            inputmode="email"
            placeholder="you@email.com"
            class="w-full bg-secondary-50 border border-secondary-200 rounded-lg pl-9 pr-3 py-2.5 text-sm text-secondary-900 placeholder-secondary-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            :class="{ 'border-accent-500 focus:border-accent-500 focus:ring-accent-500/20': errors.email }"
          />
        </div>
        <p v-if="errors.email" class="text-[10px] text-accent-500 mt-1">{{ errors.email }}</p>
        <p v-else class="text-[10px] text-secondary-400 mt-1">We'll send your eGift receipt to this email</p>
      </div>

      <!-- Security Note -->
      <div class="flex items-start gap-2 bg-secondary-50 border border-secondary-200 rounded-lg p-3 mb-4">
        <ShieldCheck class="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
        <p class="text-[10px] text-secondary-500 leading-relaxed">
          Your transaction is secured. We never store your personal information.
        </p>
      </div>

      <!-- Submit Button -->
      <button
        @click="handleSubmit"
        :disabled="!isFormValid || isSubmitting"
        class="w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
        :class="isFormValid && !isSubmitting
          ? 'text-white shadow-lg hover:opacity-90 active:scale-[0.98]'
          : 'bg-secondary-200 text-secondary-400 cursor-not-allowed'"
        :style="isFormValid && !isSubmitting ? { background: merchant.hexColor, boxShadow: `0 4px 15px ${merchant.hexColor}40` } : {}"
      >
        <Loader2 v-if="isSubmitting" class="w-4 h-4 animate-spin" />
        <template v-else>
          <KeyRound class="w-4 h-4" />
          <span>Redeem Now</span>
        </template>
      </button>
    </div>
  </div>
</template>