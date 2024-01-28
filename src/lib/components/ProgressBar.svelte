<script lang="ts">
	import circle_unchecked from '$lib/images/circle-unchecked.svg';
	import circle_check from '$lib/images/circle-check.svg';

	export let total: number;
	export let checked: number;

	$: steps = buildSteps(total, checked);

	function buildSteps(total: number, checked: number) {
		let list = [];
		let count = 0;

		while (count < total) {
			const step = { checked: checked > count ? true : false };
			list.push(step);
			console.log(step);
			count++;
		}

		return list;
	}
</script>

<div class="progress-bar">
	<div class="circles">
		{#each steps as step}
			{#if step.checked}
				<img src={circle_check} alt="progress bar" />
			{:else}
				<img src={circle_unchecked} alt="progress bar" />
			{/if}
		{/each}
	</div>
	<div class="line" />
</div>

<style lang="scss">
	.progress-bar {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		width: fit-content;
		align-content: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	.circles {
		display: flex;
		gap: 35px;
		z-index: 2;
		position: relative;
	}
	.line {
		display: flex;
		height: 2px;
		background-color: var(--green-2);
		width: 100%;
		position: absolute;
		align-items: center;
	}
</style>
