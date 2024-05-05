<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Image1 from '$lib/images/primary-interflux-symbol-2.svg';
  import Image2 from '$lib/images/x-circle.svg';
  import Image3 from '$lib/images/board-detection-bg-v2.png';
  import { page } from '$app/stores';

  export let status: number = 500;
  export let message: string = '';

  $: locale = $page.data.locale || 'en';
</script>

<section style="background-image: url({Image3})">
  <div class="content">
    <img id="logo" src={Image1} alt="logo" />
    <img id="cross" src={Image2} alt="tick" />
    {#if status === 404}
      <h1>Page not found</h1>
      <p>You've found a page which does not exist. Please return to our homepage or contact us.</p>
    {:else}
      <h1>Sorry</h1>
      <p>Something did not go as planned! 🔥</p>
      <p>Please return to our homepage or contact us.</p>
    {/if}
    <div class="buttons">
      <Button label="Go back to jetfluxer.com" url="/{locale}" theme="medium white-background" />
      <Button label="Contact us" url="mailto:ask@interflux.com.sg" theme="medium white-border" />
    </div>
  </div>
</section>

<style style="scss">
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    min-height: 100vh;
    position: relative;
    background-color: var(--blue-3);
    color: white;
    background-size: 100% auto;
    background-position: center top;
  }
  h1 {
    font-size: 24px;
    margin: 0 0 20px;
  }
  img#cross {
    margin: 50px 0;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 280px;
    margin-bottom: 10vw;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 15px;
    align-items: center;
  }
  p {
    text-align: center;
  }
</style>
