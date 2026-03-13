<script setup lang="ts">
// We will add logic here later if needed, but for now, it's purely visual.
</script>

<template>
  <section class="hero-container">
    <div class="content-wrapper">
      <h1 class="hero-title">
        Turning complex problems into elegant interfaces.
      </h1>
      <p class="hero-subtitle">
        I build fast, accessible web applications with Vue and TypeScript.
      </p>
      
      <button class="brutalist-btn">
        [ VIEW PROJECTS ]
      </button>
    </div>
  </section>
</template>

<style scoped>
.hero-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
  /* Adds a subtle grid background to enhance the technical SDE feel */
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-title {
  /* clamp() makes the text massive on desktop but scale down for mobile */
  font-size: clamp(3rem, 8vw, 7rem); 
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 2rem;
  letter-spacing: -0.05em; /* Tighter letter spacing looks more aggressive */
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-family: monospace; /* Gives it that raw code/terminal feel */
  color: #a0a0a0;
  margin-bottom: 4rem;
  max-width: 800px;
  line-height: 1.5;
}

/* The Cyber Yellow Brutalist Button */
.brutalist-btn {
  background-color: transparent;
  color: var(--text-main);
  font-size: 1.25rem;
  font-weight: bold;
  font-family: monospace;
  padding: 1rem 2rem;
  border: var(--border-heavy);
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.1s linear; /* Fast, harsh transition, not soft */
  box-shadow: 4px 4px 0px var(--text-main);
}

.brutalist-btn:hover {
  background-color: var(--accent-yellow);
  color: var(--bg-color); /* Swap text to black so it's readable on yellow */
  border-color: var(--accent-yellow);
  box-shadow: var(--shadow-harsh);
  transform: translate(-4px, -4px); /* Physically moves the button up and left */
}
</style>