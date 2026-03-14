<script setup lang="ts">
// We duplicate the text array twice in the template to create a seamless infinite loop
const skills = [
  "VUE.JS", "TYPESCRIPT", "JAVASCRIPT", "HTML", "CSS", 
  "SYSTEM DESIGN", "NODE.JS", "POSTGRESQL", "GIT"
]
</script>

<template>
  <section class="marquee-container">
    <div class="marquee-track">
      <div class="marquee-content" v-for="n in 2" :key="n">
        <span v-for="(skill, index) in skills" :key="index" class="skill-item">
          {{ skill }} <span class="separator">//</span>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-container {
  width: 100vw;
  overflow: hidden; /* Hides the text that scrolls off-screen */
  background-color: var(--accent-yellow);
  color: var(--bg-color); /* Pitch black text on yellow background */
  padding: 1.5rem 0;
  border-top: var(--border-heavy);
  border-bottom: var(--border-heavy);
  
  /* Pushes the container slightly outside normal document flow 
     to ensure it touches the absolute edges of the screen */
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.marquee-track {
  display: flex;
  width: max-content;
  /* The linear timing makes it mechanical and continuous, not soft or slow */
  animation: scrollText 20s linear infinite;
}

.marquee-content {
  display: flex;
  white-space: nowrap;
}

.skill-item {
  font-size: 2rem;
  font-weight: 900;
  font-family: monospace; /* Keeps the SDE code aesthetic */
  text-transform: uppercase;
  padding: 0 1rem;
}

.separator {
  color: var(--bg-color);
  opacity: 0.5; /* Dims the slashes slightly for visual hierarchy */
  padding-left: 1rem;
}

/* The Magic Loop: Translates exactly 50% (one full instance of the array) */
@keyframes scrollText {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Optional: Pause the scrolling if the user hovers over it */
.marquee-container:hover .marquee-track {
  animation-play-state: paused;
  cursor: default;
}
</style>