<script>
  import Translation from '$lib/components/Translation.svelte';
  import Image1 from '$lib/images/blue-interflux-symbol-2IF logo.svg';
  import Image2 from '$lib/images/board-background.png';
  import Image3 from '$lib/images/machine.png';
  import Image4 from '$lib/images/arrow-down.svg';
  import Image5 from '$lib/images/ICSF-select-6-white.svg';
</script>

<section id="hero">
  <div class="top-bg" style="background-image: url({Image2})" />
  <div class="liner">
    <a href="/">
      <img src={Image1} alt="IF logo" />
    </a>
    <img id="ICSF" src={Image5} alt="ICSF Select6" />
    <img id="machine" src={Image3} alt="ICSF machine" />
    <h1>
      <Translation phrase="World's most intelligent selective **jet fluxer**." hasMarkdown={true} />
    </h1>
    <img id="arrow" src={Image4} alt="arrow" />
  </div>
</section>

<style>
  @keyframes right-to-left-background {
    from {
      background-position: 0% center;
    }
    to {
      background-position: 10000% center;
    }
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
  }
  #hero {
    background: radial-gradient(ellipse at center, var(--blue-3), var(--blue-5));
  }
  #hero .liner {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 360px;
    position: relative;
    box-sizing: border-box;
  }
  #hero .top-bg {
    background-color: rgb(26 49 74);
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    width: 100%;
    background-size: auto 100%;
    background-position: 0% center;
    animation: right-to-left-background 200s linear infinite;
    border-bottom: 1px solid white;
  }

  #hero img#ICSF {
    padding-top: 40px;
  }
  #hero img#machine {
    position: relative;
    top: -56px;
    width: 100%;
  }

  #hero img#arrow {
    position: absolute;
    bottom: 70px;
  }
  #hero h1 {
    font-family: 'Nunito Sans Regular', sans-serif;
    color: white;
    font-size: 22px;
    line-height: 180%;
    position: relative;
    top: -122px;
    max-width: 320px;
    text-align: center;
    font-weight: normal;
    margin: 13px 0;
  }
  #hero h1 :global(strong) {
    font-family: 'Nunito Sans ExtraBold', sans-serif;
  }
  @media only screen and (min-width: 801px) {
    #hero {
      background: none;
      z-index: 99;
    }
    #hero .top-bg {
      display: none;
    }
    #hero .liner {
      gap: 60px;
    }
    #hero img#ICSF {
      width: 200px;
      height: auto;
    }
    #hero h1 {
      top: auto;
    }
    #hero img#arrow {
      position: relative;
      bottom: -10px;
    }
    #hero img#machine {
      display: none;
    }
  }
</style>
