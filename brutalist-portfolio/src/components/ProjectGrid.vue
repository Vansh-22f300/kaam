<script setup lang="ts">
// Import your dummy data and your new Card component
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard.vue';
</script>

<template>
  <section class="grid-section">
    <div class="content-wrapper">
      <h2 class="section-title">SELECTED WORKS.</h2>
      
      <div class="grid-container">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id" 
          :project="project" 
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-section {
  padding: 6rem 2rem;
  background-color: var(--bg-color);
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 3rem;
  border-bottom: var(--border-heavy);
  padding-bottom: 1rem;
  letter-spacing: -0.05em;
}

/* Responsive CSS Grid: 1 column on mobile, 2 or 3 on desktop */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem; /* Huge gaps for that raw, spaced-out brutalist look */
}
</style>