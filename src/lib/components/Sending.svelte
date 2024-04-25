<script>
  import iconDots from '$lib/images/icon-dots.svg';
  import backgroundImage from '$lib/images/close-shot-bg.png';
  import interfluxLogo from '$lib/images/primary-interflux-symbol-2.svg';
</script>

<section style="background-image: url({backgroundImage})">
  <div class="content">
    <img src={interfluxLogo} alt="logo" class="logo" />
    <img src={iconDots} alt="" aria-hidden="true" class="icon" />
    <h2>Sending</h2>
    <p>One moment please.</p>
  </div>
</section>

<style>
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
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
  img.icon {
    animation: rotate 500ms linear;
    animation-name: rotate;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-fill-mode: backwards;
  }
  p {
    text-align: center;
  }
</style>
