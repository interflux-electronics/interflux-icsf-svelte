<script>
  import Button from '$lib/components/Button.svelte';
  import Success_Icon from '$lib/images/check-circle-white.svg';
  import Close_Shot_Bg from '$lib/images/close-shot-bg.png';
  import Interflux_Logo_2 from '$lib/images/primary-interflux-symbol-2.svg';
</script>

<section style="background-image: url({Close_Shot_Bg})">
  <div class="content">
    <img src={Interflux_Logo_2} alt="logo" />
    <img id="check-icon" src={Success_Icon} alt="tick" />
    <h2>Sucess</h2>
    <p>
      Thank you for the request. It is submitted successfully! We will get back to you shortly via
      email!
    </p>
    <div class="bottom-links">
      <Button label="Home" url="/" theme="medium white-background" />
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
