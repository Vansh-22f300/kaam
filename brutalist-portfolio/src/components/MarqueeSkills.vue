<script setup lang="ts">
// We duplicate the text array twice in the template to create a seamless infinite loop
const skills = [
  "VUE.JS",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "HTML",
  "CSS",
  "SYSTEM DESIGN",
  "NODE.JS",
  "POSTGRESQL",
  "GIT",
];
</script>

<template>
  <section class="marquee-section">
    <div class="marquee-header">
      <h2 class="header-label">CORE TECH STACK</h2>
      <div class="header-divider"></div>
    </div>
    <div class="marquee-container">
      <div class="marquee-track">
        <div class="marquee-content" v-for="n in 2" :key="n">
          <span
            v-for="(skill, index) in skills"
            :key="index"
            class="skill-item"
          >
            {{ skill }} <span class="separator">//</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-section {
  background-color: var(--bg-color);
  border-bottom: var(--border-heavy);
  padding: 0;
}

.marquee-header {
  padding: 1.2rem 2rem 0.8rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.header-label {
  font-family: monospace;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 0.08em;
  color: var(--accent-yellow);
  text-transform: uppercase;
  margin: 0;
}

.header-divider {
  flex: 1;
  height: 2px;
  background-color: var(--accent-yellow);
  opacity: 0.4;
}

.marquee-container {
  width: 100vw;
  overflow: hidden;
  background-color: var(--accent-yellow);
  color: var(--bg-color);
  padding: 1.2rem 0;
  border-top: 2px solid var(--bg-color);
  border-bottom: 2px solid var(--bg-color);
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  transition: all 0.1s linear;
}

.marquee-container:hover {
  padding: 1.4rem 0;
  box-shadow: inset 0 -4px 0px rgba(0, 0, 0, 0.15);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: scrollText 22s linear infinite;
  transition: animation-play-state 0.1s linear;
}

.marquee-container:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-content {
  display: flex;
  white-space: nowrap;
}

.skill-item {
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  font-weight: 900;
  font-family: monospace;
  text-transform: uppercase;
  padding: 0 1rem;
  letter-spacing: -0.02em;
  transition: all 0.1s linear;
}

.skill-item:hover {
  transform: scale(1.05);
}

.separator {
  color: var(--bg-color);
  opacity: 0.4;
  padding-left: 1rem;
  transition: opacity 0.1s linear;
}

.marquee-container:hover .separator {
  opacity: 0.7;
}

@keyframes scrollText {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media (max-width: 768px) {
  .marquee-header {
    padding: 1.5rem 1rem 0.8rem;
  }

  .header-label {
    font-size: 0.95rem;
  }

  .marquee-container {
    padding: 1.2rem 0;
  }

  .marquee-container:hover {
    padding: 1.4rem 0;
  }
}
</style>
