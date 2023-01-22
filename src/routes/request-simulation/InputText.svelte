<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let type: string = 'text';
	export let label: string;
	export let description: string = '';
	export let optional: boolean = false;
	export let key: string;
	export let value: string;
	export let errorMessage: string | null = null; // the error message shown to users

	$: hasError = errorMessage ? true : false; // whether to show the red errors or not

	// Here we sanitise the value passed in.
	// If the value passed in is undefined or null, show "" to the user rather than "undefined".
	$: cleanValue = value || '';

	// The ID we will use to link the <label> to the <input>
	let id = 'input-' + label.toLowerCase().replace(/\s/g, '-');

	const dispatch = createEventDispatcher();

	function onKeyUp(event: any) {
		const input = event.currentTarget; // <input> First set the clicking event and selected box with <input> element, creat a variable called "input"
		const value = input.value; // use that variable, and look for its value (innet java) and create another variable called "value"
		// console.log('------');
		// console.log('InputText onKeyUp()', key, value);

		const dataBundle = { key, value }; // create a variable that has a object contains a set of data, which in this case are "key" and "value".

		dispatch('input', dataBundle); // create a function called "input", to use  "dispatch" to send the dataBundle we collected (inclueds key and value).
		// This "input" function will be fired when it is called in different page
	}
</script>

<div class="input {hasError ? 'has-error' : 'no-error'}">
	<div class="title">
		<label for={id}>{label} </label>
		{#if optional}
			<p>(optional)</p>
		{/if}
	</div>
	{#if description}
		<p>{description}</p>
	{/if}
	<input {type} {id} value={cleanValue} on:keyup={onKeyUp} />
	{#if hasError}
		<p class="error">{errorMessage}</p>
	{/if}
</div>

<style>
	.input {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin: 20px 0px;
	}
	.input p {
		color: var(--grey-5);
	}
	.title {
		display: flex;
		align-items: center;
		gap: 5px;
	}
	.title label {
		font-family: 'Nunito Sans Bold', sans-serif;
		font-size: 16px;
	}
	.title p {
		font-family: 'Nunito Sans Regular', sans-serif;
		font-size: 16px;
		color: var(--grey-7);
	}
	input {
		width: 100%;
		display: flex;
		line-height: 120%;
		padding: 2vw -2vw;
		padding: 9px 12px;
		box-sizing: border-box;
		border-radius: 3px;
		font-size: 16px;
		color: var(--grey-7);
		border-style: none;
		border: 1px solid var(--grey-2);
		box-shadow: none;
		outline: 0;
	}
	input:hover {
		border-color: var(--green-1);
	}
	input:focus {
		border-color: 2px solid var(--green-2);
		color: var(--green-3);
		outline: var(--green-2);
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	}
	p.error {
		background-color: var(--red-1);
		color: white;
	}
	.has-error input {
		border-color: var(--red-1);
	}
</style>
