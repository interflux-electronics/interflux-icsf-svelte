<script>
  import Button from '$lib/components/Button.svelte';
  import Translation from '$lib/components/Translation.svelte';
  import { page } from '$app/stores';

  $: locale = $page.data.locale || 'en';
</script>

<section id="call-to-action">
  <div class="liner padding">
    <Button
      url="/{locale}/request-simulation"
      label="Request Simulation"
      icon="bolt"
      theme="large green-background"
    />

    <div class="text">
      <p>
        <Translation
          phrase="Send us a photo of your circuit board and we will send back to you a detailed report that can simulate how fast, how precise ICSF can jet flux your board for your project, for free!"
        />
      </p>
    </div>

    <div class="buttons">
      <Button
        url="mailto:ask@interflux.com.sg"
        label="Ask question"
        icon="email"
        theme="medium green-border"
        external={true}
      />
      <Button
        url="/{locale}/where-to-buy"
        label="Where to buy?"
        icon="shop"
        theme="medium green-border"
      />
    </div>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
  }
  .liner {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 40px;
    gap: 30px;
    background-color: white;
  }
  .buttons {
    display: flex;
    gap: 15px;
  }
  .buttons :global(button),
  .buttons :global(a) {
    flex: 1;
  }
  p {
    font-size: 16px;
    color: var(--grey-7);
  }
  @media (max-width: 800px) {
    section {
      display: flex;
      align-items: center;
    }
  }
</style>
