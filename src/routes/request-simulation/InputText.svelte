<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let type;
	export let label;
	export let description;
	export let optional;
	export let key;
	// we do not need to write let value bacause it is a variable that crated by the users, not exposed by the parent. Whereas all other "export let" mean they are hardcode by html/us.
	let id = 'input-' + label.toLowerCase().replace(/\s/g, '-');

	const dispatch = createEventDispatcher();

	function onKeyUp(event) {
		const input = event.currentTarget; // <input> First set the clicking event and selected box with <input> element, creat a variable called "input"
		const value = input.value; // use that variable, and look for its value (innet java) and create another variable called "value"
		// console.log('------');
		// console.log('InputText onKeyUp()', key, value);

		const dataBundle = { key, value }; // create a variable that has a object contains a set of data, which in this case are "key" and "value".

		dispatch('input', dataBundle); // create a function called "input", to use  "dispatch" to send the dataBundle we collected (inclueds key and value).
		// This "input" function will be fired when it is called in different page
	}
</script>

<div class="input">
	<div class="title">
		<label for={id}>{label} </label>
		{#if optional}
			<p>(optional)</p>
		{/if}
	</div>
	{#if description}
		<p>{description}</p>
	{/if}
	<input {type} {id} on:keyup={onKeyUp} />
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
</style>
