<script setup lang="ts">
// We will add logic here later if needed, but for now, it's purely visual.
</script>

<template>
  <section class="hero-container">
    <div class="content-wrapper">
      <div class="hero-rail">
        <span>STATUS: OPEN TO OPPORTUNITIES</span>
        <span>STACK: VUE + TS + NODE</span>
      </div>

      <div class="hero-eyebrow">VANSH MITTAL // SDE</div>
      <h1 class="hero-title">
        Turning complex problems into elegant interfaces.
      </h1>
      <p class="hero-subtitle">
        I build fast, accessible web applications with Vue and TypeScript.
      </p>

      <div class="hero-actions">
        <button class="brutalist-btn">[ VIEW PROJECTS ]</button>
        <div class="hero-tag">2026 PORTFOLIO BUILD</div>
      </div>
    </div>
  </section>
</template>
<!-- 
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
</style> -->
<style scoped>
/* 1. The Container */
.hero-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
  /* A raw, technical grid background */
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  animation: hero-enter 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.1) both;
}

.hero-rail {
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  border: 2px solid var(--text-main);
  padding: 0.65rem 0.9rem;
  margin-bottom: 2.2rem;
  font-family: monospace;
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  color: #d6d6d6;
}
.hero-title {
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 2rem;
  letter-spacing: -0.05em;
  position: relative; /* Required for the glitch pseudo-elements */
}

/* 3. The Glitch Effect (The Advanced Feature) */
/* We create a hidden duplicate of the text using ::before */
.hero-title::before {
  content: "Turning complex problems into elegant interfaces.";
  position: absolute;
  top: 0;
  left: -2px;
  color: var(--text-main);
  background: transparent;
  overflow: hidden;
  clip-path: inset(0 0 0 0); /* Hides it by default */
  text-shadow: -2px 0 var(--accent-yellow); /* Creates the harsh color split */
  z-index: 2;
}

/* When you hover over the title, the glitch animation triggers */
.hero-title:hover::before {
  animation: glitch-anim 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
}

/* The mechanical keyframes that slice the text rapidly */
@keyframes glitch-anim {
  0% {
    clip-path: inset(10% 0 80% 0);
    transform: translate(-2px, 2px);
  }
  20% {
    clip-path: inset(80% 0 5% 0);
    transform: translate(2px, -2px);
  }
  40% {
    clip-path: inset(30% 0 50% 0);
    transform: translate(-2px, 2px);
  }
  60% {
    clip-path: inset(90% 0 5% 0);
    transform: translate(2px, -2px);
  }
  80% {
    clip-path: inset(15% 0 70% 0);
    transform: translate(-2px, 2px);
  }
  100% {
    clip-path: inset(50% 0 30% 0);
    transform: translate(2px, -2px);
  }
}

/* 4. The Subtitle */
.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-family: monospace;
  color: #a0a0a0;
  margin-bottom: 4rem;
  max-width: 800px;
  line-height: 1.5;
}

/* 5. The Cyber Yellow Action Button */
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
  transition: all 0.1s linear;
  box-shadow: 4px 4px 0px var(--text-main);
}

.brutalist-btn:hover {
  background-color: var(--accent-yellow);
  color: var(--bg-color);
  border-color: var(--accent-yellow);
  box-shadow: var(--shadow-harsh);
  transform: translate(-4px, -4px);
}

.brutalist-btn:active {
  transform: translate(0, 0);
  box-shadow: none;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-tag {
  border: 2px solid var(--text-main);
  font-family: monospace;
  font-size: 0.82rem;
  font-weight: bold;
  letter-spacing: 0.06em;
  color: var(--text-main);
  padding: 0.8rem 1rem;
}

@keyframes hero-enter {
  0% {
    opacity: 0;
    transform: translateY(48px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 900px) {
  .hero-rail {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .hero-container {
    padding: 1rem;
  }

  .brutalist-btn {
    width: 100%;
  }

  .hero-tag {
    width: 100%;
    text-align: center;
  }
}
.hero-eyebrow {
  font-family: monospace;
  color: var(--accent-yellow);
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
  margin-top: 1.5rem;
  letter-spacing: 0.1em;
}
</style>
