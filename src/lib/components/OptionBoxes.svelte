<script lang="ts">
  import Translation from '$lib/components/Translation.svelte';
  import { createEventDispatcher } from 'svelte';

  export let op1: string; // TODO: make this an array instead of hard coding 3 options
  export let op2: string;
  export let op3: string;
  export let title: string;
  export let key: string;
  export let value: string; // TODO: highlight the clicked button on render
  export let errorMessage: string | null = null;

  $: hasError = errorMessage ? true : false;

  const dispatch = createEventDispatcher();

  function onClick(event: any) {
    const clickedButton = event.currentTarget;
    const value = clickedButton.innerText;
    const payload = { key, value };

    // 1. We remove "selected" from all <button> with the class "selected"
    const allButtons = clickedButton.parentElement.children;
    for (let button of allButtons) {
      button.classList.remove('selected');
    }

    // 2. Add the class "selected" to the clicked button
    clickedButton.classList.add('selected');

    // 3. Dispatch the value to the parent component.
    dispatch('input', payload);
  }
</script>

<div class="option-boxes {hasError ? 'has-error' : 'no-error'}">
  <h4>{title}</h4>
  <div class="buttons">
    <button on:click={onClick}>{op1}</button>
    <button on:click={onClick}>{op2}</button>
    <button on:click={onClick}>{op3}</button>
  </div>
  {#if hasError}
    <p class="error">{errorMessage}</p>
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
  :global(button.selected) {
    border: 1px solid var(--blue-4);
    background-color: var(--blue-3);
    color: white;
  }

  p.error {
    color: var(--red-1);
  }
</style>
