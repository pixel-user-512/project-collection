<script setup>
import { ref, computed } from 'vue'
import { Gift, History, Store } from '@lucide/vue'
import RedemptionForm from './RedemptionForm.vue'
import OtpVerification from './OtpVerification.vue'
import RedemptionSuccess from './RedemptionSuccess.vue'
import RedemptionHistory from './RedemptionHistory.vue'

const props = defineProps({
  showChrome: {
    type: Boolean,
    default: true,
  },
})

// Merchant data (dynamic per partnered merchant)
const merchants = [
  {
    name: 'GCash',
    vanityUrl: 'gcash',
    hexColor: '#007CFF',
    tagline: 'Redeem your eGift',
    logo: 'gcash',
  },
  {
    name: 'ShopeePay',
    vanityUrl: 'shopeepay',
    hexColor: '#EE4D2D',
    tagline: 'Redeem your eGift',
    logo: 'shopeepay',
  },
  {
    name: 'Maya',
    vanityUrl: 'maya',
    hexColor: '#00A6A6',
    tagline: 'Redeem your eGift',
    logo: 'maya',
  },
  {
    name: 'GrabPay',
    vanityUrl: 'grabpay',
    hexColor: '#00B14F',
    tagline: 'Redeem your eGift',
    logo: 'grabpay',
  },
  {
    name: 'Coins.ph',
    vanityUrl: 'coinsph',
    hexColor: '#F7931A',
    tagline: 'Redeem your eGift',
    logo: 'coinsph',
  },
]

const selectedMerchantIndex = ref(0)
const showMerchantPicker = ref(false)

const merchant = computed(() => merchants[selectedMerchantIndex.value])

// Flow state: 'form' | 'otp' | 'success'
const currentStep = ref('form')
const showHistory = ref(false)
const isSubmitting = ref(false)
const formData = ref({})
const referenceNumber = ref('')

// Sample redemption history
const historyItems = ref([
  {
    id: 'RDM-2024-001',
    code: 'GC-4821-9034',
    amount: '₱500.00',
    date: 'Aug 20, 2024',
    status: 'successful',
  },
  {
    id: 'RDM-2024-002',
    code: 'GC-7712-4456',
    amount: '₱1,000.00',
    date: 'Aug 18, 2024',
    status: 'redeemed',
  },
  {
    id: 'RDM-2024-003',
    code: 'GC-3390-1287',
    amount: '₱250.00',
    date: 'Aug 15, 2024',
    status: 'processing',
  },
  {
    id: 'RDM-2024-004',
    code: 'GC-9054-6671',
    amount: '₱750.00',
    date: 'Aug 12, 2024',
    status: 'voided',
  },
  {
    id: 'RDM-2024-005',
    code: 'GC-1188-3390',
    amount: '₱300.00',
    date: 'Aug 10, 2024',
    status: 'cancelled',
  },
])

const selectMerchant = (index) => {
  selectedMerchantIndex.value = index
  showMerchantPicker.value = false
  // Reset flow when switching merchants
  currentStep.value = 'form'
  formData.value = {}
  referenceNumber.value = ''
  showHistory.value = false
}

const handleFormSubmit = (data) => {
  formData.value = data
  isSubmitting.value = true

  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false
    currentStep.value = 'otp'
  }, 1200)
}

const handleOtpVerified = () => {
  // Generate a reference number
  referenceNumber.value = 'RDM-' + Math.random().toString(36).slice(2, 8).toUpperCase()
  currentStep.value = 'success'
}

const handleBackToForm = () => {
  currentStep.value = 'form'
}

const handleNewRedemption = () => {
  currentStep.value = 'form'
  formData.value = {}
  referenceNumber.value = ''
}

const handleResendOtp = () => {
  // Simulate resending OTP
  return new Promise((resolve) => {
    setTimeout(resolve, 800)
  })
}
</script>

<template>
  <div class="w-full h-full bg-secondary-900 light:bg-secondary-100 overflow-y-auto relative flex flex-col">
    <!-- Browser Chrome Bar -->
    <div v-if="props.showChrome" class="flex items-center gap-2 px-3 sm:px-4 py-2 bg-secondary-800 light:bg-white border-b border-secondary-700 light:border-secondary-200 flex-shrink-0">
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
          <span class="truncate">https://redemption.{{ merchant.vanityUrl }}.com/redeem</span>
        </div>
      </div>
    </div>

    <!-- Mobile Frame Container -->
    <div class="flex-1 flex items-center justify-center p-2 sm:p-4 mb-10">
      <div class="w-full max-w-[430px] bg-white light:bg-white rounded-2xl shadow-2xl overflow-hidden relative flex flex-col border border-secondary-200 light:border-secondary-200">
        <!-- Merchant Header -->
        <div class="flex-shrink-0 h-40" :style="{ background: `linear-gradient(135deg, ${merchant.hexColor}, ${merchant.hexColor}cc)` }">
          <div class="px-4 sm:px-5 py-3 sm:py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <!-- Merchant Logo -->
                <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <!-- GCash Logo -->
                  <svg v-if="merchant.logo === 'gcash'" class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#007CFF"/>
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#007CFF"/>
                    <circle cx="12" cy="12" r="2" fill="#007CFF"/>
                  </svg>
                  <!-- ShopeePay Logo -->
                  <svg v-else-if="merchant.logo === 'shopeepay'" class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#EE4D2D"/>
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#EE4D2D"/>
                    <circle cx="12" cy="12" r="2" fill="#EE4D2D"/>
                  </svg>
                  <!-- Maya Logo -->
                  <svg v-else-if="merchant.logo === 'maya'" class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#00A6A6"/>
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#00A6A6"/>
                    <circle cx="12" cy="12" r="2" fill="#00A6A6"/>
                  </svg>
                  <!-- GrabPay Logo -->
                  <svg v-else-if="merchant.logo === 'grabpay'" class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#00B14F"/>
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#00B14F"/>
                    <circle cx="12" cy="12" r="2" fill="#00B14F"/>
                  </svg>
                  <!-- Coins.ph Logo -->
                  <svg v-else class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#F7931A"/>
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#F7931A"/>
                    <circle cx="12" cy="12" r="2" fill="#F7931A"/>
                  </svg>
                </div>
                <div class="flex flex-col" >
                  <div class="text-white font-bold text-sm sm:text-base leading-tight">{{ merchant.name }}</div>
                  <div class="text-white/70 text-[9px] sm:text-[10px]">{{ merchant.tagline }}</div>
                </div>
              </div>
              <div class="flex items-center gap-1.5">
                <!-- Merchant Picker -->
                <div class="relative">
                  <button
                    @click="showMerchantPicker = !showMerchantPicker"
                    class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors cursor-pointer"
                    :aria-label="'Switch merchant'"
                  >
                    <Store class="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                  </button>
                  <transition name="dropdown">
                    <div v-if="showMerchantPicker" class="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl shadow-2xl border border-secondary-200 overflow-hidden z-30">
                      <div class="px-3 py-2 text-[9px] font-semibold text-secondary-400 uppercase tracking-wider border-b border-secondary-100">Partnered Merchants</div>
                      <button
                        v-for="(m, index) in merchants"
                        :key="m.vanityUrl"
                        @click="selectMerchant(index)"
                        class="w-full px-3 py-2.5 flex items-center gap-2.5 hover:bg-secondary-50 transition-colors cursor-pointer"
                      >
                        <span class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" :style="{ background: m.hexColor }">
                          <Gift class="w-2.5 h-2.5 text-white" />
                        </span>
                        <span class="text-[11px] font-medium text-secondary-700 flex-1 text-left">{{ m.name }}</span>
                        <span v-if="selectedMerchantIndex === index" class="w-1.5 h-1.5 rounded-full" :style="{ background: m.hexColor }"></span>
                      </button>
                    </div>
                  </transition>
                </div>
                <!-- History Button -->
                <button
                  @click="showHistory = !showHistory"
                  class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors cursor-pointer"
                  :aria-label="showHistory ? 'Close history' : 'View redemption history'"
                >
                  <History class="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Area -->
        <div class="bg-secondary-50 light:bg-secondary-50">
          <!-- History Panel -->
          <transition name="fade-slide">
            <div v-if="showHistory" class="absolute inset-0 z-20 bg-secondary-50 light:bg-secondary-50">
              <RedemptionHistory :items="historyItems" @close="showHistory = false" />
            </div>
          </transition>

          <!-- Step Content -->
          <div>
            <!-- Form Step -->
            <RedemptionForm
              v-if="currentStep === 'form'"
              :merchant="merchant"
              :is-submitting="isSubmitting"
              @submit="handleFormSubmit"
            />

            <!-- OTP Step -->
            <OtpVerification
              v-else-if="currentStep === 'otp'"
              :merchant="merchant"
              :phone="formData.mobileno"
              @verified="handleOtpVerified"
              @back="handleBackToForm"
              @resend="handleResendOtp"
            />

            <!-- Success Step -->
            <RedemptionSuccess
              v-else
              :merchant="merchant"
              :reference-number="referenceNumber"
              :redemption-code="formData.redemptionCode || 'ABC12345'"
              @new-redemption="handleNewRedemption"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>