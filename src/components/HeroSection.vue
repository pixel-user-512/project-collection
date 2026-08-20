<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Blob3DBackground from './Blob3DBackground.vue'

gsap.registerPlugin(ScrollTrigger)

const typedText = ref('')
const currentIndex = ref(0)
const isDeleting = ref(false)

const roles = ['Frontend Developer', 'Vue.js Specialist', 'UI/UX Enthusiast', 'Problem Solver']

let typingTimer = null
let heroTimeline = null
let cleanupFns = []
let curtainTrigger = null
let tiltTween = null

const greetingRef = ref(null)
const nameRef = ref(null)
const roleRef = ref(null)
const descriptionRef = ref(null)
const buttonsRef = ref(null)
const contentRef = ref(null)
const heroSectionRef = ref(null)
const resumeBtnRef = ref(null)

// Word-level adaptive contrast: each word samples the lava pixels directly
// behind it and picks its own ink color. A word only changes when the blob
// under *that word* changes - neighbours are left alone.

const typeEffect = () => {
  const currentRole = roles[currentIndex.value]
  const currentLength = typedText.value.length

  if (!isDeleting.value) {
    typedText.value = currentRole.substring(0, currentLength + 1)

    if (currentLength === currentRole.length) {
      isDeleting.value = true
      typingTimer = setTimeout(typeEffect, 2000)
      return
    }
    typingTimer = setTimeout(typeEffect, 100)
  } else {
    typedText.value = currentRole.substring(0, currentLength - 1)

    if (currentLength === 0) {
      isDeleting.value = false
      currentIndex.value = (currentIndex.value + 1) % roles.length
      typingTimer = setTimeout(typeEffect, 500)
      return
    }
    typingTimer = setTimeout(typeEffect, 50)
  }
}

onMounted(() => {
  typingTimer = setTimeout(typeEffect, 500)

  // Hero entrance animation - Apple style blur reveal
  heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

  heroTimeline
    .fromTo(
      greetingRef.value,
      { opacity: 0, y: 30, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', clearProps: 'filter', duration: 0.8 }
    )
    .fromTo(
      nameRef.value,
      { opacity: 0, y: 50, filter: 'blur(12px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', clearProps: 'filter', duration: 1.1 },
      '-=0.4'
    )
    .fromTo(
      roleRef.value,
      { opacity: 0, y: 50, filter: 'blur(12px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', clearProps: 'filter', duration: 1.1 },
      '-=0.6'
    )
    .fromTo(
      descriptionRef.value,
      { opacity: 0, y: 40, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', clearProps: 'filter', duration: 1 },
      '-=0.5'
    )
    .fromTo(
      buttonsRef.value,
      { opacity: 0, y: 30, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', clearProps: 'filter', duration: 0.8, stagger: 0.15 },
      '-=0.5'
    )

  // Curtain lift effect - the hero content gently floats up and fades
  // as the about section covers it, creating the "curtain reveal" feel
  curtainTrigger = gsap.to(contentRef.value, {
    yPercent: -30,
    opacity: 0.2,
    ease: 'none',
    scrollTrigger: {
      trigger: heroSectionRef.value,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })

  // 3D tilt effect on the name - follows the mouse with a smooth,
  // springy response. The name tilts in 3D space like a holographic
  // foil card catching the light.
  const nameEl = nameRef.value
  const maxTilt = 14

  const handleNameMouseMove = (e) => {
    const rect = nameEl.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    if (tiltTween) tiltTween.kill()
    tiltTween = gsap.to(nameEl, {
      rotationY: x * maxTilt * 2,
      rotationX: -y * maxTilt * 2,
      transformPerspective: 600,
      transformOrigin: 'center center',
      duration: 0.4,
      ease: 'power2.out',
    })
  }

  const handleNameMouseLeave = () => {
    if (tiltTween) tiltTween.kill()
    tiltTween = gsap.to(nameEl, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.4)',
    })
  }

  nameEl.addEventListener('mousemove', handleNameMouseMove)
  nameEl.addEventListener('mouseleave', handleNameMouseLeave)
  cleanupFns.push(() => {
    nameEl.removeEventListener('mousemove', handleNameMouseMove)
    nameEl.removeEventListener('mouseleave', handleNameMouseLeave)
  })
})

onUnmounted(() => {
  clearTimeout(typingTimer)
  if (heroTimeline) heroTimeline.kill()
  if (curtainTrigger) curtainTrigger.scrollTrigger?.kill()
  cleanupFns.forEach((fn) => fn())
})
</script>

<template>
  <section
    ref="heroSectionRef"
    id="home"
    class="relative h-screen flex items-center justify-center overflow-hidden sticky top-0"
  >
    <!-- Background grid pattern -->
    <div class="absolute inset-0 bg-grid opacity-20"></div>

    <!-- 3D lava lamp background blobs -->
    <Blob3DBackground />

    <!-- NOTE: No z-index / stacking context on contentRef so the
         mix-blend-mode elements below can see the blobs behind them.
         DOM order keeps content above the blobs. -->
    <div ref="contentRef" class="relative text-center px-4 sm:px-6 lg:px-8 mx-auto ">
      <p
        ref="greetingRef"
        class="text-primary-400 tracking-widest text-sm mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
      >
      PORTFOLIO
      </p>
      <h1
        ref="nameRef"
        class="font-griaste text-5xl sm:text-6xl md:text-7xl text-white light:text-secondary-900 mb-4 foil-text name-glow"
      >
        Kenneth Cortez
      </h1>
      <h2
        ref="roleRef"
        class="text-2xl sm:text-3xl md:text-4xl  font-semibold text-secondary-300 light:text-secondary-800 mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
      >
        I'm a <span class="text-primary-500 light:text-primary-600">{{ typedText }}</span>
        <span class="animate-pulse text-primary-500 light:text-primary-600">|</span>
      </h2>
      <!-- Description: each word is split into its own span at runtime and
           colored from the pixels behind it. No mix-blend-mode - that
           inverted the hue and produced magenta text over the emerald lava. -->
      <p
        ref="descriptionRef"
        class="light:text-black text-white text-lg mb-8 max-w-2xl mx-auto"
      >
        I build modern, responsive web applications. In every project, creating a seamless user experience is my primary focus.
      </p>
      <div ref="buttonsRef" class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#projects"
          class="bg-primary-600  hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 w-full sm:w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] light:drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
        >
          View My Work
        </a>
        <!-- Resume button: same per-word adaptation, plus the border tracks
             the majority background so the outline never vanishes. -->
        <a
          ref="resumeBtnRef"
          href="https://docs.google.com/document/d/1pxuH9Ue2NJ18GnzGR44gVKfEIvoe9YvMHj26P7A0RDY/edit?usp=sharing"
          target="_blank"
          class="resume-btn light:text-primary-800 light:border-primary-800 relative border border-white text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
        >
          MY RESUME
        </a>
      </div>
    </div>

  </section>
</template>

<style scoped>
/* Adaptive contrast text.

   useAdaptiveTextContrast wraps each word of these elements in a
   `.adaptive-seg` span at mount, then samples the lava canvas pixels behind
   every span on a slow tick. Each span sets its own inline `color` /
   `text-shadow`, so a word sitting over a bright blob turns dark while the
   words beside it - still over dark lava - stay light and untouched.

   The spans are created imperatively so they don't carry Vue's scoped-style
   data attribute; :deep() is required to reach them.

   The transition is what makes the handoff read as a gradual color shift
   rather than a snap as a blob edge sweeps across the line. */
.contrast-adaptive :deep(.adaptive-seg) {
  transition:
    color 450ms cubic-bezier(0.4, 0, 0.2, 1),
    text-shadow 450ms cubic-bezier(0.4, 0, 0.2, 1);
}

.resume-btn {
  transition:
    border-color 450ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 300ms ease,
    box-shadow 300ms ease;
}

/* Respect reduced-motion: still adapt, just instantly */
@media (prefers-reduced-motion: reduce) {
  .contrast-adaptive :deep(.adaptive-seg),
  .resume-btn {
    transition: none;
  }
}
</style>
