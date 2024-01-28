<script lang="ts">
  import ColumnLayout from '$lib/components/ColumnLayout.svelte';
  import Country from '$lib/models/Country.ts';
  import Company from '$lib/models/Company.ts';
  import Button from '$lib/components/Button.svelte';
  import InputText from '$lib/components/InputText.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: suppliers = data.suppliers.map((record) => new Company(record));
  $: countries = data.countries.map((record) => new Country(record));

  $: search = '';

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

    <h2>Find supplier</h2>

    <div class="fields">
      <InputText
        type="text"
        label="Search"
        optional={true}
        key="projectName"
        value={search}
        on:input={onInput}
      />
    </div>

    <ul>
      {#each suppliers as supplier}
        <li>
          <p>Name: {supplier.name}</p>
          <p>Website: {supplier.website}</p>
          <p>Email: {supplier.email}</p>
          <p>Phone: {supplier.phone}</p>
          <p>Address: {supplier.address}</p>
          <p>Country: {supplier.country(countries).nameEnglish}</p>
        </li>
      {/each}
    </ul>

    <ul>
      {#each countries as country}
        <li>
          <p>Name: {country.nameEnglish}</p>
          <p>Code: {country.id}</p>
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
  }
</style>
