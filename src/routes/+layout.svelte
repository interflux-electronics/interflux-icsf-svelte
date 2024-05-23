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

  $: title = $page?.data?.seo?.title || 'ICSF Select6 jetfluxer';
  $: description =
    $page?.data?.seo?.description ||
    'ICSF Select6 is our stand-alone jet fluxing machine, also known as a jet fluxer.';
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
