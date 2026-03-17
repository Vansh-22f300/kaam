<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import type { Project } from "../data/portfolioData";

const props = withDefaults(
  defineProps<{
    project: Project;
    delay?: number;
  }>(),
  {
    delay: 0,
  },
);

// --- THE NEW OBSERVER LOGIC ---
const cardRef = ref<HTMLElement | null>(null); // Hooks into the HTML element
const isVisible = ref(false); // Controls our CSS class
let observer: IntersectionObserver;

onMounted(() => {
  // Triggers when 10% of the card enters the viewport
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        // Stop observing once it reveals so it doesn't animate twice
        if (cardRef.value) observer.unobserve(cardRef.value);
      }
    },
    { threshold: 0.1 },
  );

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

<script lang="ts">
export default {};
</script>

<template>
  <article
    ref="cardRef"
    class="project-card"
    :class="{ revealed: isVisible }"
    :style="{ '--card-delay': `${props.delay}ms` }"
  >
    <div class="card-noise"></div>
    <div class="card-header">
      <h3 class="project-title">{{ props.project.title }}</h3>
    </div>

    <div class="card-body">
      <p class="project-desc">{{ props.project.description }}</p>

      <div class="tech-stack">
        <span
          v-for="tech in props.project.techStack"
          :key="tech"
          class="tech-tag"
        >
          [{{ tech }}]
        </span>
      </div>
    </div>

    <div class="card-footer">
      <a
        :href="props.project.githubUrl"
        class="card-link"
        target="_blank"
        rel="noreferrer"
      >
        GITHUB <span class="arrow">↗</span>
      </a>
      <a
        v-if="props.project.liveUrl"
        :href="props.project.liveUrl"
        class="card-link"
        target="_blank"
        rel="noreferrer"
      >
        LIVE DEMO <span class="arrow">↗</span>
      </a>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  border: var(--border-heavy);
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.12s linear;
}

.project-card.revealed {
  animation: brutal-snap 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards;
  animation-delay: var(--card-delay, 0ms);
}

@keyframes brutal-snap {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-noise {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 234, 0, 0.08),
    transparent 45%
  );
  transition: opacity 0.1s linear;
}

.project-card.revealed:hover {
  transform: translate(-6px, -6px);
  box-shadow: 12px 12px 0px var(--accent-yellow);
  border-color: var(--accent-yellow);
}

.project-card.revealed:hover .card-noise {
  opacity: 1;
}

.card-header {
  border-bottom: var(--border-heavy);
  padding: 1.5rem;
  transition: border-color 0.1s linear;
}

.project-card.revealed:hover .card-header {
  border-bottom-color: var(--accent-yellow);
}

.project-title {
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  line-height: 1.05;
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
  border: 1px solid transparent;
  padding: 0.2rem 0.3rem;
  transition: all 0.1s linear;
}

.tech-tag:hover {
  color: var(--accent-yellow);
  border-color: var(--accent-yellow);
  transform: translate(-2px, -2px);
}

.card-footer {
  border-top: var(--border-heavy);
  display: flex;
  transition: border-color 0.1s linear;
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
  transition: all 0.1s linear;
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

.card-link:hover .arrow {
  display: inline-block;
  transform: translate(2px, -2px);
}

.card-link:focus-visible {
  outline: 2px solid var(--accent-yellow);
  outline-offset: -2px;
}

@media (max-width: 640px) {
  .project-card.revealed:hover {
    transform: translate(-3px, -3px);
    box-shadow: 6px 6px 0px var(--accent-yellow);
  }

  .card-header,
  .card-body {
    padding: 1.1rem;
  }

  .project-title {
    font-size: 1.2rem;
  }
}
</style>
