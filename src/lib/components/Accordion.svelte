<script>
  import Translation from '$lib/components/Translation.svelte';
  import MediaQuery from '$lib/components/MediaQuery.svelte';
  import WhitePlusSvg from '$lib/images/icon-plus-white.svg';
  import WhiteMinusSvg from '$lib/images/icon-minus-white.svg';
  import GreyPlusSvg from '$lib/images/icon-plus-grey.svg';
  import GreyMinusSvg from '$lib/images/icon-minus-grey.svg';
</script>

<div class="accordion">
  <details>
    <summary>
      <h3><Translation phrase="Address" /></h3>
      <MediaQuery query="(max-width: 800px)" let:matches>
        {#if matches}
          <img src={WhitePlusSvg} class="plus" alt="" aria-hidden="true" />
          <img src={WhiteMinusSvg} class="minus" alt="" aria-hidden="true" />
        {/if}
      </MediaQuery>
      <MediaQuery query="(min-width: 801px)" let:matches>
        {#if matches}
          <img src={GreyPlusSvg} class="plus" alt="" aria-hidden="true" />
          <img src={GreyMinusSvg} class="minus" alt="" aria-hidden="true" />
        {/if}
      </MediaQuery>
    </summary>

    <div class="content">
      <p>2 Kallang Pudding Road #04-12, Mactech Building Singapore 349307</p>
      <p><Translation phrase="Singapore" /></p>
    </div>
  </details>

  <details>
    <summary>
      <h3><Translation phrase="Email" /></h3>
      <MediaQuery query="(max-width: 800px)" let:matches>
        {#if matches}
          <img src={WhitePlusSvg} class="plus" alt="" aria-hidden="true" />
          <img src={WhiteMinusSvg} class="minus" alt="" aria-hidden="true" />
        {/if}
      </MediaQuery>
      <MediaQuery query="(min-width: 801px)" let:matches>
        {#if matches}
          <img src={GreyPlusSvg} class="plus" alt="" aria-hidden="true" />
          <img src={GreyMinusSvg} class="minus" alt="" aria-hidden="true" />
        {/if}
      </MediaQuery>
    </summary>

    <div class="content">
      <p>ask@interflux.sg</p>
    </div>
  </details>

  <details>
    <summary>
      <h3><Translation phrase="Phone" /></h3>
      <MediaQuery query="(max-width: 800px)" let:matches>
        {#if matches}
          <img src={WhitePlusSvg} class="plus" alt="" aria-hidden="true" />
          <img src={WhiteMinusSvg} class="minus" alt="" aria-hidden="true" />
        {/if}
      </MediaQuery>
      <MediaQuery query="(min-width: 801px)" let:matches>
        {#if matches}
          <img src={GreyPlusSvg} class="plus" alt="" aria-hidden="true" />
          <img src={GreyMinusSvg} class="minus" alt="" aria-hidden="true" />
        {/if}
      </MediaQuery>
    </summary>

    <div class="content">
      <p>+65 68487818</p>
    </div>
  </details>
</div>

<style>
  .accordion {
    padding: 70px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  details {
    display: flex;
    width: 100%;
    max-width: 400px;
    border-bottom: 1px solid white;
  }
  details[open] img.plus {
    display: none;
  }
  details[open] img.minus {
    display: block;
  }
  img.minus {
    display: none;
  }
  summary {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  .content {
    padding: 0 0 12px;
  }
  details h3 {
    font-family: 'Nunito Sans Bold', sans-serif;
    font-size: 18px;
    line-height: 100%;
    color: white;
    line-height: 250%;
  }
  details p {
    font-family: 'Nunito Sans Regular', sans-serif;
    font-size: 16px;
    line-height: 180%;
    color: white;
  }
  @media only screen and (min-width: 801px) {
    details h3,
    p,
    .content p {
      color: var(--grey-7);
    }
    .accordion {
      width: 100%;
      padding: 0px;
    }
    details {
      border-bottom: 1px solid var(--grey-5);
    }
  }
</style>
