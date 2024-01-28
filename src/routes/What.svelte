<script>
  import Button from '$lib/components/Button.svelte';
  import selective from '$lib/images/selective-soldering.svg';
  import wave from '$lib/images/wave-soldering.svg';
  import PDF from '$lib/documents/Interflux-ICSF2022v2.pdf';

  function playVideo() {
    document.querySelector('video')?.play();
    document.querySelector('video+button')?.remove();
  }
</script>

<section id="what">
  <div class="liner">
    <h2>What is ICSF?</h2>
    <p>ICSF Select6 is our stand-alone jet fluxing machine, also known as a jet fluxer.</p>
    <p>
      Our innovative fluxer offers a high speed, high precision, real selective fluxing process. The
      machine is designed to optimize the amount of flux for each individual solder joint,
      maintaining the required cycle times, even for high volume wave soldering.
    </p>
    <p>ICSF Select6 is suitable for electronics manufacturers who do:</p>
    <div class="soldering-row">
      <div class="soldering-container">
        <img src={selective} alt="mail icon" />
        <p>selective soldering</p>
      </div>
      <div class="soldering-container">
        <img src={wave} alt="mail icon" />
        <p>wave soldering</p>
      </div>
    </div>
    <div class="buttons">
      <Button
        label="Download specification (PDF)"
        url={PDF}
        theme="medium white-border"
        external={true}
      />
      <Button label="Play video" theme="medium white-border" on:click={playVideo} />
    </div>
  </div>
</section>

<style>
  section {
    color: white;
    display: flex;
    justify-content: center;
  }
  .liner {
    padding: 80px 40px;
    max-width: 400px;
    box-sizing: border-box;
  }
  h2 {
    font-family: 'Nunito Sans Bold', sans-serif;
    font-size: 35px;
    line-height: 100%;
    color: white;
    margin-bottom: 30px;
  }
  p + p {
    margin-top: 16px;
  }
  .soldering-row {
    margin-top: 40px;
    display: flex;
    gap: 40px;
  }
  .buttons {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
  @media (max-width: 800px) {
    section {
      background: radial-gradient(ellipse at bottom, var(--blue-3), var(--blue-5));
    }
  }
  @media (min-width: 801px) {
    section {
      padding-top: 780px;
    }
    .liner {
      padding: 0px;
      width: 100%;
    }
    .soldering-row {
      width: 100%;
      max-width: 450px;
    }
    .soldering-row img {
      max-width: 100px;
    }
    .soldering-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
</style>
