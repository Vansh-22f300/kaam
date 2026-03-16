<script setup>
import HeroSection from './components/HeroSection.vue'
import MarqueeSkills from './components/MarqueeSkills.vue'
import ProjectGrid from './components/ProjectGrid.vue'
import Footer from './components/Footer.vue'
import TerminalLoader from './components/TerminalLoader.vue'
import CustomCursor from './components/CustomCursor.vue'
import SdeBadge from './components/SdeBadge.vue'
import ContactForm from './components/ContactForm.vue';
</script>

<template>
  <div>
    <CustomCursor />
  <SdeBadge />
  <main>
    <TerminalLoader />
    <HeroSection />
    <MarqueeSkills />
    <!-- <div style="height: 100vh;"></div> -->
<ProjectGrid />
<ContactForm />
  <Footer />
      </main>
  </div>
</template>


<style scoped>
main{
  display: flex;
  flex-direction: column;
}
</style>
