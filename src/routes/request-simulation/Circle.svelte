<script lang="ts">
	import circle_unchecked from '$lib/images/circle-unchecked.svg';
	import circle_check from '$lib/images/circle-check.svg';

	export let checked: boolean;
</script>

{#if checked}
	<img src={circle_check} alt="progress bar" />
{:else}
	<img src={circle_unchecked} alt="progress bar" />
{/if}

<style>
	img {
		width: 40px;
	}
</style>
