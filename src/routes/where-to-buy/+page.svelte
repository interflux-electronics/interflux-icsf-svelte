<script lang="ts">
  import ColumnLayout from '$lib/components/ColumnLayout.svelte';
  import Flag from '$lib/components/Flag.svelte';
  import Country from '$lib/models/Country.ts';
  import Company from '$lib/models/Company.ts';
  import Button from '$lib/components/Button.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  function sortByName(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  $: suppliers = data.suppliers.map((record) => new Company(record)).sort(sortByName);
  $: countries = data.countries.map((record) => new Country(record));

  function onInput(event: any) {
    const { key, value } = event.detail;
    this[key] = value;
    console.log(key, value);
  }

  function findCountry(id) {
    return countries.find((country) => country.id === 'BE').nameEnglish;
  }
</script>

<ColumnLayout>
  <div class="liner">
    <header>
      <Button url="/" label="Go back" icon="back" theme="medium grey-text" />
    </header>

    <h2>Where to buy?</h2>

    <p>All the companies below are approved and trained suppliers of ICSF Select6:</p>

    <ul>
      {#each suppliers as supplier}
        <li>
          <h3>{supplier.name}</h3>
          {#if supplier.website}
            <p><a href={supplier.websiteLink}>{supplier.websiteLabel}</a></p>
          {/if}
          {#if supplier.email}
            <p><a href="mailto:{supplier.email}">{supplier.email}</a></p>
          {/if}
          <p>Phone: {supplier.phone}</p>
          <p>Address: {supplier.address}</p>
          <div class="country">
            <Flag country={supplier.country(countries)} />
            <p>{supplier.country(countries).nameEnglish}</p>
          </div>
        </li>
      {/each}
    </ul>

    <footer>
      <Button url="/" label="Go back" theme="medium grey-text" icon="back" />
    </footer>
  </div>
</ColumnLayout>

<style lang="scss">
  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    list-style: none;
    padding: 0;
    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 5px 10px 0 RGBA(0, 0, 0, 0.2);
      h3 {
        background-color: var(--blue-3);
        color: white;
        padding: 4px 6px 3px;
        margin-bottom: 12px;
      }
    }
  }
  .country {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 12px;
    p {
      font-family: 'Nunito Sans SemiBold', sans-serif;
    }
  }
  p {
    a {
      color: var(--blue-0);
      text-decoration: underline;
    }
  }
</style>
