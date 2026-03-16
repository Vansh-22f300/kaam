<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Reactive variables to track the exact pixel coordinates
const x = ref(0);
const y = ref(0);

// Tracks if we are hovering over a button or link
const isHovering = ref(false);

// The function that updates our coordinates
const updateMouse = (e: MouseEvent) => {
  x.value = e.clientX;
  y.value = e.clientY;
};

onMounted(() => {
  // 1. Listen to mouse movements globally
  window.addEventListener('mousemove', updateMouse);

  // 2. Find all buttons and links to trigger our 'hover' state
  // We use a slight delay to ensure the DOM is fully painted first
  setTimeout(() => {
    const interactiveElements = document.querySelectorAll('a, button');
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => isHovering.value = true);
      el.addEventListener('mouseleave', () => isHovering.value = false);
    });
  }, 500);
});

onUnmounted(() => {
  // Always clean up event listeners to prevent memory leaks!
  window.removeEventListener('mousemove', updateMouse);
});
</script>

<template>
  <div 
    class="brutalist-cursor"
    :class="{ 'cursor-hover': isHovering }"
    :style="{ transform: `translate3d(${x}px, ${y}px, 0)` }"
  ></div>
</template>

<style scoped>
.brutalist-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: #ffffff; /* Solid white */
  
  /* THE MAGIC PROPERTY: Inverts colors of whatever is underneath it */
  mix-blend-mode: difference; 
  
  /* CRITICAL: Prevents the custom cursor from blocking your physical mouse clicks */
  pointer-events: none; 
  
  z-index: 9999;
  
  /* Centers the square exactly on the tip of the actual mouse pointer */
  margin-left: -10px;
  margin-top: -10px;
  
  /* Brutalist shape: pure square */
  border-radius: 0; 
  
  /* Mechanical, snappy transition when changing shapes */
  transition: width 0.15s ease-out, height 0.15s ease-out, border-radius 0.15s ease-out, margin 0.15s ease-out;
}

/* The Mutated Hover State */
.cursor-hover {
  width: 80px;
  height: 80px;
  border-radius: 50%; /* Morphs into a giant circle */
  margin-left: -40px;
  margin-top: -40px;
  background-color: #ffffff;
}
</style>