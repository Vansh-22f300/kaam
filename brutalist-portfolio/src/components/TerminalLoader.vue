<script setup lang="ts">
import { ref, onMounted } from "vue";

// 1. Controls whether the whole loading screen is visible
const isVisible = ref(true);

// 2. The lines currently visible on the screen
const displayedLines = ref<string[]>([]);

// 3. Progress bar control
const showProgress = ref(false);
const progress = ref(0);

// 4. The SDE boot sequence (Notice the C++ easter egg)
const bootSequence = [
  "> INITIATING SDE PROTOCOLS...",
  "> #include <iostream>",
  "> using namespace std;",
  "> COMPILING KERNEL... OK.",
  "> MOUNTING VUE 3 ENGINE... OK.",
  "> INJECTING CYBER YELLOW... OK.",
  "> SYSTEM READY.",
];

onMounted(() => {
  let delay = 0;

  // Loop through each line and push it to the screen with a slight delay
  bootSequence.forEach((line, index) => {
    delay += Math.random() * 300 + 100; // Random delay between 100ms and 400ms for realism

    setTimeout(() => {
      displayedLines.value.push(line);

      // If it's the last line, wait a bit longer, then slide down
      if (index === bootSequence.length - 1) {
        setTimeout(() => {
          isVisible.value = false;
          // Immediately trigger progress bar
          showProgress.value = true;
          animateProgress();
        }, 1800);
      }
    }, delay);
  });
});

// Animate progress bar from 0 to 100 over 2 seconds
const animateProgress = () => {
  const startTime = Date.now();
  const duration = 2000; // 2 seconds

  const tick = () => {
    const elapsed = Date.now() - startTime;
    const percentage = Math.min((elapsed / duration) * 100, 100);
    progress.value = percentage;

    if (percentage < 100) {
      requestAnimationFrame(tick);
    } else {
      // Hide progress bar after completion
      setTimeout(() => {
        showProgress.value = false;
      }, 300);
    }
  };

  requestAnimationFrame(tick);
};
</script>

<template>
  <div>
    <div
      v-if="isVisible"
      class="terminal-overlay"
      :class="{ 'fade-out': !isVisible }"
    >
      <div class="terminal-frame">
        <div class="frame-header">
          <div class="frame-title">[ SDE-INIT // v1.0 ]</div>
          <div class="frame-controls">
            <div class="control"></div>
            <div class="control"></div>
            <div class="control"></div>
          </div>
        </div>
        <div class="terminal-window">
          <div
            v-for="(line, index) in displayedLines"
            :key="index"
            class="terminal-line"
            :class="`line-${index}`"
          >
            {{ line }}
          </div>
          <div class="terminal-line blinking-cursor">_</div>
        </div>
        <div class="frame-footer"></div>
      </div>
    </div>

    <!-- Progress Bar -->
    <div v-if="showProgress" class="progress-overlay">
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
        </div>
        <div class="progress-label">
          SYSTEM INITIALIZATION: {{ Math.round(progress) }}%
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.terminal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-color);
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.1);
}

.terminal-overlay.fade-out {
  opacity: 0;
  transform: translateY(100vh) scale(0.95);
}

.terminal-frame {
  display: flex;
  flex-direction: column;
  border: var(--border-heavy);
  background-color: var(--bg-color);
  box-shadow: 12px 12px 0px var(--accent-yellow);
  max-width: 900px;
  width: 100%;
  animation: frame-zoom 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards;
}

@keyframes frame-zoom {
  0% {
    transform: scale(0.92);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.frame-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--accent-yellow);
  color: var(--bg-color);
  padding: 0.6rem 1.2rem;
  border-bottom: var(--border-heavy);
  border-bottom-color: var(--bg-color);
}

.frame-title {
  font-family: monospace;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.06em;
}

.frame-controls {
  display: flex;
  gap: 0.5rem;
}

.control {
  width: 12px;
  height: 12px;
  background-color: var(--bg-color);
  border: 1px solid var(--bg-color);
}

.terminal-window {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 2rem;
  min-height: 300px;
  justify-content: flex-end;
}

.terminal-line {
  font-family: monospace;
  font-size: clamp(0.95rem, 1.8vw, 1.3rem);
  font-weight: bold;
  color: var(--text-main);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  opacity: 0;
  animation: line-in 0.35s ease-out forwards;
}

.line-0 {
  animation-delay: 0.1s;
}
.line-1 {
  animation-delay: 0.35s;
}
.line-2 {
  animation-delay: 0.6s;
}
.line-3 {
  animation-delay: 0.85s;
}
.line-4 {
  animation-delay: 1.1s;
}
.line-5 {
  animation-delay: 1.35s;
}
.line-6 {
  animation-delay: 1.6s;
}
.line-7 {
  animation-delay: 1.85s;
}

@keyframes line-in {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.terminal-line:last-child {
  color: var(--accent-yellow);
}

.blinking-cursor {
  animation:
    blink 0.8s step-end infinite,
    line-in 0.35s ease-out forwards;
  animation-delay: 1.85s;
  color: var(--accent-yellow);
}

@keyframes blink {
  0%,
  49%,
  100% {
    opacity: 1;
  }
  50%,
  99% {
    opacity: 0;
  }
}

.frame-footer {
  height: 3px;
  background-color: var(--accent-yellow);
}

@media (max-width: 768px) {
  .terminal-overlay {
    padding: 1rem;
  }

  .terminal-frame {
    box-shadow: 8px 8px 0px var(--accent-yellow);
  }

  .frame-title {
    font-size: 0.9rem;
  }

  .terminal-window {
    padding: 1.5rem;
    min-height: 250px;
  }

  .frame-controls {
    gap: 0.35rem;
  }

  .control {
    width: 10px;
    height: 10px;
  }
}

@media (max-width: 640px) {
  .terminal-frame {
    border-width: 2px;
    box-shadow: 5px 5px 0px var(--accent-yellow);
  }

  .frame-header {
    padding: 0.5rem 0.8rem;
  }

  .frame-title {
    font-size: 0.8rem;
  }

  .terminal-window {
    padding: 1rem;
    min-height: 200px;
    gap: 0.4rem;
  }

  .terminal-line {
    font-size: clamp(0.85rem, 1.5vw, 1rem);
  }
}

/* Progress Bar Styles */
.progress-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-color);
  z-index: 9998;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  animation: progress-fade-in 0.3s ease-out forwards;
}

@keyframes progress-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.progress-container {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: progress-enter 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards;
}

@keyframes progress-enter {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.progress-bar {
  width: 100%;
  height: 12px;
  background-color: #1a1a1a;
  border: var(--border-heavy);
  border-color: var(--text-main);
  overflow: hidden;
  box-shadow: 6px 6px 0px var(--accent-yellow);
}

.progress-fill {
  height: 100%;
  background-color: #22c55e;
  width: 0%;
  transition: width 0.05s linear;
  box-shadow: inset 0 0 8px rgba(34, 197, 94, 0.5);
}

.progress-label {
  font-family: monospace;
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--text-main);
  letter-spacing: 0.06em;
  text-align: center;
}

@media (max-width: 768px) {
  .progress-overlay {
    padding: 1rem;
  }

  .progress-bar {
    height: 10px;
    border-width: 2px;
    box-shadow: 4px 4px 0px var(--accent-yellow);
  }

  .progress-label {
    font-size: 0.85rem;
  }
}

@media (max-width: 640px) {
  .progress-container {
    max-width: 100%;
  }

  .progress-bar {
    height: 8px;
    box-shadow: 3px 3px 0px var(--accent-yellow);
  }

  .progress-label {
    font-size: 0.8rem;
  }
}
</style>
