<script>
  import './styles.css';

  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

  // For visitor analytics in Vercel
  inject({ mode: dev ? 'development' : 'production' });

  // For speed analytics in Vercel
  injectSpeedInsights();
</script>

<div class="app">
  <slot />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
