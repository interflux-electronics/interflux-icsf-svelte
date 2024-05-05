<script>
  import Translation from '$lib/components/Translation.svelte';
  import Accordion from '$lib/components/Accordion.svelte';
  import Image1 from '$lib/images/interflux-singapore-logo-blue-on-white.svg';
  import Image2 from '$lib/images/Board-detection-footer.jpg';
  import Image3 from '$lib/images/people-footer.jpg';
</script>

<footer>
  <div class="liner">
    <div class="left">
      <div class="top">
        <h2><Translation phrase="Contact" /></h2>
        <Accordion />
      </div>
      <img id="logo" src={Image1} alt="Interflux Singapore logo" />
    </div>
    <div class="right">
      <img style="width" src={Image2} alt="machine" />
      <img src={Image3} alt="people" />
    </div>
  </div>
</footer>

<style>
  footer {
    display: flex;
    justify-content: center;
    background: white;
  }
  .liner {
    max-width: 900px;
    padding: 50px 40px;
    display: flex;
    justify-content: space-between;
    gap: 7vw;
    box-sizing: border-box;
    width: 100%;
  }
  .top {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .left {
    color: var(--grey-7);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    max-width: 400px;
    justify-content: space-between;
  }
  h2 {
    font-size: 35px;
    line-height: 100%;
    color: var(--grey-7);
    width: 100%;
    max-width: 360px;
  }
  .right {
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 400px;
    height: auto;
    gap: 30px;
    padding: 10px 0px;
  }
  img {
    width: 100%;
    height: auto;
  }
</style>
