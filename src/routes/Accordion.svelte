<script>
  import MediaQuery from '$lib/components/MediaQuery.svelte';
  import plus_white from '$lib/images/icon-plus-white.svg';
  import minus_white from '$lib/images/icon-minus-white.svg';
  import plus_grey from '$lib/images/icon-plus-grey.svg';
  import minus_grey from '$lib/images/icon-minus-grey.svg';
</script>

<div class="accordion">
  <details>
    <summary>
      <h3>Address</h3>
      <MediaQuery query="(max-width: 800px)" let:matches>
        {#if matches}
          <img src={plus_white} class="cross" alt="" aria-hidden="true" />
          <img src={minus_white} class="minus" alt="" aria-hidden="true" />
        {/if}
      </MediaQuery>
      <MediaQuery query="(min-width: 801px)" let:matches>
        {#if matches}
          <img src={plus_grey} class="cross" alt="" aria-hidden="true" />
          <img src={minus_grey} class="minus" alt="" aria-hidden="true" />
        {/if}
      </MediaQuery>
    </summary>

    <div class="content">
      <p>2 Kallang Pudding Road #04-12, Mactech Building Singapore 349307</p>
    </div>
  </details>

  <details>
    <summary>
      <h3>Email</h3>
      <MediaQuery query="(max-width: 800px)" let:matches>
        {#if matches}
          <img src={plus_white} class="cross" alt="" aria-hidden="true" />
          <img src={minus_white} class="minus" alt="" aria-hidden="true" />
        {/if}
      </MediaQuery>
      <MediaQuery query="(min-width: 801px)" let:matches>
        {#if matches}
          <img src={plus_grey} class="cross" alt="" aria-hidden="true" />
          <img src={minus_grey} class="minus" alt="" aria-hidden="true" />
        {/if}
      </MediaQuery>
    </summary>

    <div class="content">
      <p>ask@interflux.sg</p>
    </div>
  </details>

  <details>
    <summary>
      <h3>Phone</h3>
      <MediaQuery query="(max-width: 800px)" let:matches>
        {#if matches}
          <img src={plus_white} class="cross" alt="" aria-hidden="true" />
          <img src={minus_white} class="minus" alt="" aria-hidden="true" />
        {/if}
      </MediaQuery>
      <MediaQuery query="(min-width: 801px)" let:matches>
        {#if matches}
          <img src={plus_grey} class="cross" alt="" aria-hidden="true" />
          <img src={minus_grey} class="minus" alt="" aria-hidden="true" />
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
  details[open] img.cross {
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

    /* summary { */
    /* border-bottom: 1px solid var(--grey-7); */
    /* } */
  }
</style>
