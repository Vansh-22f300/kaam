<script setup>
import HeroSection from './components/HeroSection.vue'
import MarqueeSkills from './components/MarqueeSkills.vue'
import ProjectGrid from './components/ProjectGrid.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <main>
    <HeroSection />
    <MarqueeSkills />
    <ProjectGrid/>
  <Footer />
      </main>
</template>


<style scoped>
main{
  display: flex;
  flex-direction: column;
}
</style>
