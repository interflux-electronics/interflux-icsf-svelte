<script lang="ts">
  import ColumnLayout from '$lib/components/ColumnLayout.svelte';
  import Button from '$lib/components/Button.svelte';
  import InputText from '$lib/components/InputText.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  let view = 'loading';

  $: showLoading = view === 'loading';
  $: showForm = view === 'form';

  $: countrySearch = '';

  function onInput(event: any) {
    const { key, value } = event.detail;
    this[key] = value;
    console.log(key, value);
  }
</script>

<ColumnLayout>
  <div class="liner">
    <header>
      <Button url="/" label="Go back" icon="back" theme="medium grey-text" />
    </header>

    <h2>Find supplier</h2>

    <ul>
      {#each data.suppliers as supplier}
        <li>{supplier.attributes['business-name']}</li>
      {/each}
    </ul>

    {#if showLoading}
      <p>Loading ...</p>
    {/if}

    {#if showForm}
      <div class="fields">
        <InputText
          type="text"
          label="Project name"
          optional={true}
          key="projectName"
          value={countrySearch}
          on:input={onInput}
        />
      </div>
    {/if}

    <footer>
      <Button url="/" label="Go back" theme="medium grey-text" icon="back" />
    </footer>
  </div>
</ColumnLayout>
