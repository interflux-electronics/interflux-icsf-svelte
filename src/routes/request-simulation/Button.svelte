<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import backIcon from '$lib/images/back-icon.svg';
	import emailIcon from '$lib/images/email-icon.svg';
	import boltIcon from '$lib/images/bolt-icon.svg';
	import shopIcon from '$lib/images/shop-icon.svg';

	export let theme: string;
	export let label: string;
	export let icon: string = '';

	let showBackIcon = icon === 'back';
	let showEmailIcon = icon === 'email';
	let showBoltIcon = icon === 'bolt';
	let showShopIcon = icon === 'shop';

	const dispatch = createEventDispatcher();

	function onClick() {
		console.log('<button> in <Button> was clicked!');
		dispatch('click');
	}
</script>

<button class={theme} on:click={onClick}>
	{#if showBackIcon}
		<img src={backIcon} alt="" aria-hidden="true" width="20" height="20" />
	{/if}
	{#if showEmailIcon}
		<img src={emailIcon} alt="" aria-hidden="true" width="20" height="20" />
	{/if}
	{#if showBoltIcon}
		<img src={boltIcon} alt="" aria-hidden="true" width="20" height="20" />
	{/if}
	{#if showShopIcon}
		<img src={shopIcon} alt="" aria-hidden="true" width="20" height="20" />
	{/if}
	<span>{label}</span>
</button>

<style>
	.button {
		background-color: var(--green-1);
		display: flex;
		border: solid 2px;
		border-color: var(--green-2);
		border-radius: 3px;
		justify-content: center;
		gap: 10px;
		height: 46px;
		align-items: center;
		color: white;
		width: 150px;
	}

	.button span {
		font-size: 17px;
		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.5s;
	}

	.button:hover {
		background-color: var(--green-2);
		border-color: var(--green-3);
	}

	.button span:after {
		content: '\00bb';
		position: absolute;
		opacity: 0;
		top: 0;
		right: -20px;
		transition: 0.5s;
	}

	.button:hover span {
		padding-right: 25px;
	}

	.button:hover span:after {
		opacity: 1;
		right: 0;
	}
</style>
