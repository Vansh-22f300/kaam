<script setup lang="ts">
// Import your dummy data and your new Card component
import { computed, ref } from "vue";
import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard.vue";

const searchQuery = ref("");
const activeTech = ref("ALL");

const availableTech = computed(() => {
  const tech = new Set<string>();
  projects.forEach((project) => {
    project.techStack.forEach((item) => tech.add(item));
  });
  return ["ALL", ...Array.from(tech).sort((a, b) => a.localeCompare(b))];
});

const filteredProjects = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesTech =
      activeTech.value === "ALL" ||
      project.techStack.includes(activeTech.value);
    const matchesQuery =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.techStack.join(" ").toLowerCase().includes(query);

    return matchesTech && matchesQuery;
  });
});

const clearFilters = () => {
  searchQuery.value = "";
  activeTech.value = "ALL";
};
</script>

<template>
  <section id="projects" class="grid-section">
    <div class="content-wrapper">
      <div class="grid-rail">
        <span
          >{{ filteredProjects.length }} / {{ projects.length }} CASE
          STUDIES</span
        >
        <span>FILTER + SEARCH ENABLED</span>
      </div>
      <h2 class="section-title">SELECTED WORKS.</h2>

      <div class="controls-panel">
        <input
          v-model="searchQuery"
          type="text"
          class="search-input"
          placeholder="SEARCH BY TITLE / TECH / DESCRIPTION"
          aria-label="Search projects"
        />

        <div class="chip-row">
          <button
            v-for="tech in availableTech"
            :key="tech"
            class="chip"
            :class="{ active: activeTech === tech }"
            @click="activeTech = tech"
          >
            {{ tech }}
          </button>
          <button class="chip reset" @click="clearFilters">RESET</button>
        </div>
      </div>

      <div v-if="filteredProjects.length" class="grid-container">
        <ProjectCard
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :project="project"
          :delay="index * 120"
        />
      </div>

      <div v-else class="empty-state">
        <p class="empty-title">NO MATCHING PROJECTS FOUND.</p>
        <p class="empty-copy">
          Try a different keyword or reset active tech filters.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-section {
  padding: 6rem 2rem;
  background-color: var(--bg-color);
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.grid-rail {
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  border: 2px solid var(--text-main);
  padding: 0.65rem 0.9rem;
  margin-bottom: 1.5rem;
  font-family: monospace;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  color: #d6d6d6;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  border-bottom: var(--border-heavy);
  padding-bottom: 1rem;
  letter-spacing: -0.05em;
}

.controls-panel {
  border: 2px solid var(--text-main);
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: rgba(11, 11, 11, 0.9);
}

.search-input {
  width: 100%;
  background-color: transparent;
  border: 2px solid #4a4a4a;
  color: var(--text-main);
  padding: 0.8rem 1rem;
  font-family: monospace;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
  transition: all 0.1s linear;
}

.search-input::placeholder {
  color: #666;
}

.search-input:focus {
  outline: none;
  border-color: var(--accent-yellow);
  box-shadow: 4px 4px 0px var(--accent-yellow);
  transform: translate(-2px, -2px);
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip {
  border: 2px solid var(--text-main);
  background-color: transparent;
  color: var(--text-main);
  font-family: monospace;
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  padding: 0.4rem 0.7rem;
  cursor: pointer;
  transition: all 0.1s linear;
}

.chip:hover {
  transform: translate(-2px, -2px);
  box-shadow: 4px 4px 0px var(--accent-yellow);
  border-color: var(--accent-yellow);
}

.chip.active {
  background-color: var(--accent-yellow);
  color: var(--bg-color);
  border-color: var(--accent-yellow);
}

.chip.reset {
  margin-left: auto;
}

.empty-state {
  border: var(--border-heavy);
  padding: 2rem;
  text-align: center;
  background-color: rgba(11, 11, 11, 0.85);
}

.empty-title {
  font-family: monospace;
  font-size: 1rem;
  font-weight: bold;
  color: var(--accent-yellow);
  letter-spacing: 0.06em;
  margin-bottom: 0.5rem;
}

.empty-copy {
  font-family: monospace;
  color: #b0b0b0;
  font-size: 0.9rem;
}

/* Responsive CSS Grid: 1 column on mobile, 2 or 3 on desktop */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.2rem;
}

@media (max-width: 900px) {
  .grid-rail {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .grid-section {
    padding: 4rem 1rem;
  }

  .section-title {
    margin-bottom: 2rem;
  }

  .controls-panel {
    padding: 0.8rem;
  }

  .chip {
    font-size: 0.7rem;
    padding: 0.35rem 0.55rem;
  }

  .chip.reset {
    margin-left: 0;
  }

  .grid-container {
    gap: 1.2rem;
    grid-template-columns: 1fr;
  }
}
</style>
