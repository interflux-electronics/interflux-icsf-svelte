<script lang="ts">
  import Translation from '$lib/components/Translation.svelte';
  import Button from '$lib/components/Button.svelte';
  import Image1 from '$lib/images/x-circle.svg';
  import Image2 from '$lib/images/board-detection-bg-v2.png';
  import Image3 from '$lib/images/primary-interflux-symbol-2.svg';

  export let failResponse: string | null = null;
</script>

<section style="background-image: url({Image2})">
  <div class="content">
    <img src={Image3} alt="logo" />
    <img id="check-icon" src={Image1} alt="tick" />
    <h2><Translation phrase="Sorry" /></h2>
    <p>
      <Translation
        phrase="We were unable to submit your request. We do apologies. Please use the contact button below."
      />
    </p>
    <details>
      <summary><Translation phrase="See logs" /></summary>
      <p>{failResponse}</p>
    </details>
    <div class="bottom-links">
      <Button label="Homepage" url="/" theme="medium white-background" />
      <Button label="Contact us" url="mailto:ask@interflux.com.sg" theme="medium white-border" />
    </div>
  </div>
</section>

<style>
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
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    max-width: 280px;
    margin-bottom: 10vw;
  }
  img#check-icon {
    width: 161px;
  }
  .bottom-links {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  p {
    text-align: center;
  }
</style>
