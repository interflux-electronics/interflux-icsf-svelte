<script>
  import Translation from '$lib/components/Translation.svelte';
  import Button from '$lib/components/Button.svelte';
  import Image1 from '$lib/images/check-circle-white.svg';
  import Image2 from '$lib/images/close-shot-bg.png';
  import Image3 from '$lib/images/primary-interflux-symbol-2.svg';
  import { page } from '$app/stores';

  $: locale = $page.data.locale || 'en';
</script>

<section style="background-image: url({Image2})">
  <div class="content">
    <img src={Image3} alt="logo" />
    <img id="check-icon" src={Image1} alt="tick" />
    <h2><Translation phrase="Success" /></h2>
    <p>
      <Translation
        phrase="Thank you for the request. It is submitted successfully! We will get back to you shortly via email!"
      />
    </p>
    <div class="bottom-links">
      <Button label="Homepage" url="/{locale}" theme="medium white-background" />
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
    background-color: var(--green-3);
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
    align-items: center;
    gap: 15px;
  }
  p {
    text-align: center;
  }
</style>
