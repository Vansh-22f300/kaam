<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { Project } from '../data/portfolioData';

defineProps<{
  project: Project
}>();

// --- THE NEW OBSERVER LOGIC ---
const cardRef = ref<HTMLElement | null>(null); // Hooks into the HTML element
const isVisible = ref(false); // Controls our CSS class
let observer: IntersectionObserver;

onMounted(() => {
  // Triggers when 10% of the card enters the viewport
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      // Stop observing once it reveals so it doesn't animate twice
      if (cardRef.value) observer.unobserve(cardRef.value); 
    }
  }, { threshold: 0.1 });

  // Start watching the card
  if (cardRef.value) {
    observer.observe(cardRef.value);
  }
});

onUnmounted(() => {
  // Always clean up to prevent memory leaks
  if (observer) observer.disconnect();
});
</script>

<template>
  <article 
    ref="cardRef" 
    class="project-card"
    :class="{ 'revealed': isVisible }"
  >
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
/* --- UPDATED: The initial hidden state --- */
.project-card {
  border: var(--border-heavy);
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  
  /* Start invisible and pushed down 100px */
  opacity: 0; 
  transform: translateY(100px); 
  transition: all 0.1s linear; 
}

/* --- NEW: The Snapping Reveal Animation --- */
.project-card.revealed {
  animation: brutal-snap 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards;
}

@keyframes brutal-snap {
  0% { opacity: 0; transform: translateY(100px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* --- UPDATED: Only allow hover effects AFTER it is revealed --- */
.project-card.revealed:hover {
  transform: translate(-6px, -6px);
  box-shadow: 12px 12px 0px var(--accent-yellow);
  border-color: var(--accent-yellow);
}


/* --- THE REST OF YOUR CSS REMAINS UNCHANGED --- */
.card-header {
  border-bottom: var(--border-heavy);
  padding: 1.5rem;
}

.project-card.revealed:hover .card-header {
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
  flex-grow: 1; 
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

.project-card.revealed:hover .card-footer {
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

.project-card.revealed:hover .card-link {
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