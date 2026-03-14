<script setup lang="ts">
import type { Project } from '../data/portfolioData';

// Tell Vue this component expects a "project" object as a prop
defineProps<{
  project: Project
}>();
</script>

<template>
  <article class="project-card">
    <div class="card-header">
      <h3 class="project-title">{{ project.title }}</h3>
    </div>
    
    <div class="card-body">
      <p class="project-desc">{{ project.description }}</p>
      
      <div class="tech-stack">
        <span v-for="tech in project.techStack" :key="tech" class="tech-tag">
          [{{ tech }}]
        </span>
      </div>
    </div>

    <div class="card-footer">
      <a :href="project.githubUrl" class="card-link" target="_blank">GITHUB ↗</a>
      <a v-if="project.liveUrl" :href="project.liveUrl" class="card-link" target="_blank">LIVE DEMO ↗</a>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  border: var(--border-heavy);
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  transition: all 0.1s linear; /* Harsh, fast transition */
}

/* The Brutalist Hover Effect */
.project-card:hover {
  transform: translate(-6px, -6px);
  box-shadow: 12px 12px 0px var(--accent-yellow);
  border-color: var(--accent-yellow);
}

.card-header {
  border-bottom: var(--border-heavy);
  padding: 1.5rem;
}

/* In Brutalism, elements often inherit border colors on hover */
.project-card:hover .card-header {
  border-bottom-color: var(--accent-yellow);
}

.project-title {
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.05em;
}

.card-body {
  padding: 1.5rem;
  flex-grow: 1; /* Pushes footer to the bottom */
}

.project-desc {
  font-family: monospace;
  color: #a0a0a0;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  font-family: monospace;
  font-size: 0.85rem;
  font-weight: bold;
  color: var(--text-main);
}

.card-footer {
  border-top: var(--border-heavy);
  display: flex;
}

.project-card:hover .card-footer {
  border-top-color: var(--accent-yellow);
}

.card-link {
  flex: 1;
  text-align: center;
  padding: 1rem;
  font-family: monospace;
  font-weight: bold;
  border-right: var(--border-heavy);
  transition: background-color 0.1s linear;
}

.project-card:hover .card-link {
  border-right-color: var(--accent-yellow);
}

.card-link:last-child {
  border-right: none;
}

.card-link:hover {
  background-color: var(--accent-yellow);
  color: var(--bg-color);
}
</style>