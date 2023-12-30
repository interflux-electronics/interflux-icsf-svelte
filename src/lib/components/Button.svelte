<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let label: string;
	export let theme: string;
	export let icon: string = '';
	export let url: string = '';
	export let external: boolean = false;

	$: target = external ? '_blank' : null;
	$: rel = external ? 'noreferrer' : null;

	const dispatch = createEventDispatcher();

	function onClick() {
		dispatch('click');
	}
</script>

{#if url}
	<a href={url} class="button {theme}" {target} {rel}>
		<Icon {icon} />
		<span>{label}</span>
	</a>
{:else}
	<button class="button {theme}" on:click={onClick}>
		<Icon {icon} />
		<span>{label}</span>
	</button>
{/if}

<style>
	.button {
		padding: 0;
		border: 0;
		outline: none;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		white-space: nowrap;
		cursor: pointer;
		transition: all 100ms ease-out;
	}
	.button :global(img),
	.button :global(svg),
	.button :global(svg [fill]) {
		transition: all 100ms ease-out;
	}

	/* large */

	.large {
		line-height: 50px;
		padding: 0 20px;
		font-size: 20px;
		font-family: 'Nunito Sans SemiBold', sans-serif;
		border-style: solid;
		border-width: 2px;
		border-radius: 3px;
	}
	.large :global(img),
	.large :global(svg) {
		height: 22px;
		width: auto;
	}
	.large:hover :global(img),
	.large:focus :global(img),
	.large:hover :global(svg),
	.large:focus :global(svg) {
		transform: scale(1.2);
	}

	/* medium */

	.medium {
		line-height: 36px;
		padding: 0 15px;
		font-size: 15px;
		font-family: 'Nunito Sans SemiBold', sans-serif;
		border-style: solid;
		border-width: 1px;
		border-radius: 3px;
	}

	/* green background */

	.green-background {
		background-color: var(--green-2);
		border-color: var(--green-3);
		color: white;
	}
	.green-background :global(svg [fill]) {
		fill: white;
	}
	.green-background:hover,
	.green-background:focus {
		background-color: var(--green-3);
		border-color: var(--green-2);
		box-shadow: 0 0 0 2px var(--green-2);
	}
	.green-background:active {
		background-color: var(--green-3);
		border-color: var(--green-3);
		box-shadow: 0 0 0 2px var(--green-3);
	}

	/* green border */

	.green-border {
		background-color: transparent;
		border-color: var(--green-2);
		color: var(--green-2);
	}
	.green-border :global(svg [fill]) {
		fill: var(--green-1);
	}
	.green-border:hover,
	.green-border:focus {
		background-color: var(--green-1);
		color: white;
		box-shadow: 0 0 0 1px var(--green-2);
	}
	.green-border:active {
		background-color: var(--green-2);
		color: white;
		box-shadow: 0 0 0 1px var(--green-2);
	}
	.green-border:hover :global(svg [fill]),
	.green-border:focus :global(svg [fill]),
	.green-border:active :global(svg [fill]) {
		fill: white;
	}

	/* white border */

	.white-border {
		background-color: transparent;
		border-color: white;
		color: white;
	}
	.white-border:hover,
	.white-border:focus {
		background-color: rgba(255, 255, 255, 0.2);
		box-shadow: 0 0 0 1px white;
	}
</style>
