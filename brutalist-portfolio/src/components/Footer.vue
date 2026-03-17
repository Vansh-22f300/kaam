<script setup lang="ts">
// You can replace these with your actual links later
const email = "mailto:vanshmittal021@gmail.com";
const github = "https://github.com/Vansh-22f300";
const linkedin = "https://linkedin.com/in/vansh-mittal-vm";
</script>

<template>
  <footer class="brutalist-footer">
    <div class="footer-content">
      <h2 class="footer-title">AVAILABLE FOR WORK.</h2>

      <div class="link-grid">
        <a :href="email" class="footer-link" rel="noreferrer">
          <span class="link-label">EMAIL //</span>
          <span class="link-text">
            vanshmittal021@gmail.com
            <span class="link-arrow">→</span>
          </span>
        </a>

        <a :href="github" target="_blank" class="footer-link" rel="noreferrer">
          <span class="link-label">GITHUB //</span>
          <span class="link-text">
            Vansh-22f300
            <span class="link-arrow">→</span>
          </span>
        </a>

        <a
          :href="linkedin"
          target="_blank"
          class="footer-link"
          rel="noreferrer"
        >
          <span class="link-label">LINKEDIN //</span>
          <span class="link-text">
            /IN/VANSH-MITTAL-VM
            <span class="link-arrow">→</span>
          </span>
        </a>
      </div>
    </div>

    <div class="copyright-bar">
      <span class="copyright-left"
        >© {{ new Date().getFullYear() }} // SDE PORTFOLIO</span
      >
      <div class="copyright-divider"></div>
      <span class="copyright-right">BUILT WITH VUE + TS</span>
    </div>
  </footer>
</template>

<style scoped>
.brutalist-footer {
  background-color: var(--accent-yellow);
  color: var(
    --bg-color
  ); /* We flip the colors: Yellow background, Black text */
  border-top: var(--border-heavy);
  padding-top: 4rem;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 50px 50px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 4rem;
  letter-spacing: -0.05em;
  border-bottom: 4px solid var(--bg-color); /* Thick black border */
  padding-bottom: 1rem;
  animation: title-enter 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards;
}

@keyframes title-enter {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.link-grid {
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
}

.footer-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 2px solid var(--bg-color);
  color: var(--bg-color);
  text-decoration: none;
  font-family: monospace;
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: bold;
  transition: all 0.12s linear;
  position: relative;
}

.footer-link:hover {
  background-color: var(--bg-color);
  color: var(--accent-yellow);
  padding-left: 1rem;
  padding-right: 1rem;
  transform: translate(4px, 0);
  box-shadow: -6px 0 0 var(--bg-color);
}

.link-label {
  opacity: 0.7;
  transition: opacity 0.1s linear;
  letter-spacing: 0.04em;
}

.footer-link:hover .link-label {
  opacity: 1;
}

.link-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.link-arrow {
  display: inline-block;
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.12s linear;
}

.footer-link:hover .link-arrow {
  opacity: 1;
  transform: translateX(8px);
}

.copyright-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: var(--bg-color);
  color: var(--text-main);
  font-family: monospace;
  font-weight: bold;
  border-top: var(--border-heavy);
  text-transform: uppercase;
  gap: 1rem;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
}

.copyright-divider {
  width: 2px;
  height: 1rem;
  background-color: #333;
}

.copyright-left,
.copyright-right {
  flex: 1;
}

@media (max-width: 900px) {
  .footer-link {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .footer-link:hover {
    transform: translate(2px, 0);
    box-shadow: -4px 0 0 var(--bg-color);
  }
}

@media (max-width: 640px) {
  .footer-content {
    padding: 0 1rem;
  }

  .footer-title {
    margin-bottom: 2.5rem;
  }

  .link-grid {
    margin-bottom: 2rem;
  }

  .footer-link {
    padding: 1.2rem 0;
    font-size: 1rem;
  }

  .copyright-bar {
    flex-direction: column;
    gap: 0.8rem;
    text-align: center;
    padding: 1.2rem 1rem;
  }

  .copyright-divider {
    display: none;
  }

  .copyright-left,
  .copyright-right {
    width: 100%;
  }
}
</style>
