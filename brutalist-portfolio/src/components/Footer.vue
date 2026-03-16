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
        <a :href="email" class="footer-link">
          <span class="link-label">EMAIL //</span>
          <span class="link-text">vanshmittal021@gmail.com</span>
        </a>
        
        <a :href="github" target="_blank" class="footer-link">
          <span class="link-label">GITHUB //</span>
          <span class="link-text">Vansh-22f300</span>
        </a>
        
        <a :href="linkedin" target="_blank" class="footer-link">
          <span class="link-label">LINKEDIN //</span>
          <span class="link-text">/IN/YOURUSERNAME</span>
        </a>
      </div>
    </div>
    
    <div class="copyright-bar">
      <span>© {{ new Date().getFullYear() }} // SDE PORTFOLIO</span>
      <span>BUILT WITH VUE + TS</span>
    </div>
  </footer>
</template>

<style scoped>
.brutalist-footer {
  background-color: var(--accent-yellow);
  color: var(--bg-color); /* We flip the colors: Yellow background, Black text */
  border-top: var(--border-heavy);
  padding-top: 4rem;
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
  transition: all 0.1s linear;
}

.footer-link:hover {
  background-color: var(--bg-color);
  color: var(--accent-yellow);
  padding-left: 1rem; /* Snaps the text inward slightly on hover */
  padding-right: 1rem;
}

.link-label {
  opacity: 0.7;
}

.copyright-bar {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background-color: var(--bg-color);
  color: var(--text-main);
  font-family: monospace;
  font-weight: bold;
  border-top: var(--border-heavy);
  text-transform: uppercase;
}

/* Make it stack neatly on mobile */
@media (max-width: 768px) {
  .footer-link {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .copyright-bar {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>