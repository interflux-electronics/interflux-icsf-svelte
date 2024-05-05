<script lang="ts">
  import Translation from '$lib/components/Translation.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  // All the options the user can choose given as a list of strings.
  export let options: Array<string> = [];

  // The label which will appear above the options.
  export let label: string;

  // The key and value which will be sent up to the parent upon selection.
  export let key: string;
  export let value: string;

  // For error handling.
  export let errorMessage: string | null = null;

  function selectOption(event: any) {
    const button = event.currentTarget;
    const value = button.dataset.option;
    const payload = { key, value };
    dispatch('input', payload);
  }

  function deselectOption(event: any) {
    dispatch('input', null);
  }
</script>

<div class="option-boxes {errorMessage ? 'has-error' : 'no-error'}">
  <h4><Translation phrase={label} /></h4>
  <div class="buttons">
    {#key value}
      {#each options as option}
        {#if option === value}
          <button on:click={deselectOption} class="selected" data-option={option}>
            <Translation phrase={option} />
          </button>
        {:else}
          <button on:click={selectOption} data-option={option}>
            <Translation phrase={option} />
          </button>
        {/if}
      {/each}
    {/key}
  </div>
  {#if errorMessage}
    <p class="error"><Translation phrase={errorMessage} /></p>
  {/if}
</div>

<style>
  .option-boxes {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
  }
  .buttons {
    display: flex;
  }
  button {
    font-family: 'Nunito Sans Semibold';
    background-color: white;
    font-size: 18px;
    padding: 7px 15px;
    margin: -1px;
    outline: 0;
    display: flex;
    border: 1px solid var(--grey-2);
    justify-content: center;
    width: 110px;
    color: var(--grey-7);
    cursor: pointer;
  }
  button:hover {
    box-shadow: 0 0 0 1px var(--blue-3) inset;
    border-color: var(--blue-3);
    z-index: 1;
  }
  button.selected {
    border: 1px solid var(--blue-4);
    background-color: var(--blue-3);
    color: white;
  }
  p.error {
    color: var(--red-1);
  }
</style>
