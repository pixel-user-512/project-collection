<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import TechStack from './components/TechStack.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'
import MouseTrail from './components/MouseTrail.vue'
import IntroLoader from './components/IntroLoader.vue'
import { useLenis } from './composables/useLenis'

useLenis()
</script>

<template>
  <div class="min-h-screen bg-dark-900 light:bg-secondary-50">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <TechStack />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
    <BackToTop />
    <MouseTrail />
    <IntroLoader />
  </div>
</template>