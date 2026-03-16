<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Reactive reference to hold our formatted time string
const currentTime = ref('');
const currentDay = ref('');

// A function to grab the exact current time and format it
const updateTime = () => {
  const now = new Date();
  
  // Formats to something like "10:38:45 PM"
  currentTime.value = now.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  
  // Get the day name (MON, TUE, etc.)
  const dayName = now.toLocaleString('en-IN', { weekday: 'short' }).toUpperCase();
  currentDay.value = dayName;
};

// We need to store the interval ID so we can destroy it if the component unmounts
let timerId: ReturnType<typeof setInterval>;

onMounted(() => {
  updateTime(); // Set the time immediately on load
  timerId = setInterval(updateTime, 1000); // Update it every 1 second
});

onUnmounted(() => {
  clearInterval(timerId); // Prevent memory leaks
});
</script>

<template>
  <div class="sde-badge">
    <div class="status-indicator">
      <div class="dot"></div>
      <span>SYS.ONLINE</span>
    </div>
    
    <div class="system-info">
      <span class="location">DELHI // IST</span>
      <span class="day-time">{{ currentDay }} · [{{ currentTime }}]</span>
    </div>
  </div>
</template>

<style scoped>
.sde-badge {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: var(--bg-color);
  border: 2px solid var(--text-main);
  padding: 1.1rem 1.2rem;
  z-index: 9000;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-family: monospace;
  box-shadow: 4px 4px 0px var(--accent-yellow);
  transition: all 0.1s linear;
  cursor: default;
}
.sde-badge:hover {
  box-shadow: 8px 8px 0px var(--accent-yellow);
  transform: translate(-2px, -2px);
  border-color: var(--accent-yellow);
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.04em;
  color: var(--text-main);
  border-bottom: 1px solid #333;
  padding-bottom: 0.6rem;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: green;
  border: 1px solid var(--accent-yellow);
  border-radius: 0;
  animation: pulse 1.2s ease-in-out infinite;
  box-shadow: 0 0 8px var(--accent-yellow);
}

@keyframes pulse {
  0% { 
    opacity: 1;
    box-shadow: 0 0 8px var(--accent-yellow);
  }
  50% { 
    opacity: 0.3;
    box-shadow: 0 0 2px var(--accent-yellow);
  }
  100% {
    opacity: 1;
    box-shadow: 0 0 8px var(--accent-yellow);
  }
}

.system-info {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.8rem;
}

.location {
  color: #b0b0b0;
  letter-spacing: 0.06em;
}

.day-time {
  color: var(--accent-yellow);
  font-weight: bold;
  letter-spacing: 0.03em;
}

@media (max-width: 640px) {
  .sde-badge {
    bottom: 1.2rem;
    right: 1.2rem;
    padding: 0.9rem 1rem;
    font-size: 0.75rem;
  }

  .dot {
    width: 6px;
    height: 6px;
  }

  .status-indicator {
    font-size: 0.75rem;
    gap: 0.4rem;
  }

  .system-info {
    font-size: 0.75rem;
    gap: 0.25rem;
  }

  .sde-badge:hover {
    box-shadow: 4px 4px 0px var(--accent-yellow);
    transform: translate(-1px, -1px);
  }
}
</style>