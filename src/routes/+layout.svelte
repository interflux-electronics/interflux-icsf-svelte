<script lang="ts">
  import { page } from '$app/stores';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import './styles.css';

  // For visitor analytics in Vercel
  inject({ mode: dev ? 'development' : 'production' });

  // For speed analytics in Vercel
  injectSpeedInsights();

  $: title = $page?.data?.seo?.title || 'Interflux ICSF Select6';
  $: description =
    $page?.data?.seo?.description ||
    "World's most intelligent selective fluxer for electronics manufacturers.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="app">
  <slot />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
  }
</style>
