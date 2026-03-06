<script lang="ts">
  import { page } from '$app/stores';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import './styles.css';
  import OgWide from '$lib/images/og-wide.jpg';
  import OgSquare from '$lib/images/og-wide.jpg';

  // For visitor analytics in Vercel
  inject({ mode: dev ? 'development' : 'production' });

  // For speed analytics in Vercel
  injectSpeedInsights();

  $: title = 'Interflux ICSF Select6';
  $: alt = "ICSF Select6 World's most intelligent selective fluxer.";
  $: description = "World's most intelligent selective fluxer for electronics manufacturers.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />

  <meta property="og:image" content={OgWide} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={alt} />

  <meta property="og:image" content={OgSquare} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="1200" />
  <meta property="og:image:alt" content={alt} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={OgSquare} />
  <meta name="twitter:image:alt" content={alt} />
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
