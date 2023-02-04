<script lang="ts">
	import InputText from '$lib/components/InputText.svelte';
	import { createEventDispatcher } from 'svelte';
	import Circle from './Circle.svelte';

	export let userData: any;

	export let palletWidthError: string | null = null;
	export let palletLengthError: string | null = null;

	const dispatch = createEventDispatcher();

	function onInput(event: any) {
		const key = event.detail.key;
		const value = event.detail.value;
		dispatch('input', { key, value });
	}
</script>

<div>
	<div class="progress-bar">
		<div class="circles">
			<Circle checked={true} />
			<Circle checked={false} />
			<Circle checked={false} />
			<Circle checked={false} />
		</div>
		<div class="line" />
	</div>
</div>

<h2>Please provide the specs of your circuit board</h2>
<div class="fields">
	<InputText
		type="text"
		label="Project name"
		optional={true}
		key="projectName"
		value={userData.projectName}
		on:input={onInput}
	/>

	<InputText
		type="text"
		label="Pallet width"
		description="For example: 420mm or 30 inches"
		key="palletWidth"
		value={userData.palletWidth}
		errorMessage={palletWidthError}
		on:input={onInput}
	/>

	<InputText
		type="text"
		label="Pallet length"
		description="For example: 450mm or 17 inches"
		key="palletLength"
		value={userData.palletLength}
		errorMessage={palletLengthError}
		on:input={onInput}
	/>

	<InputText
		type="text"
		label="Wave solder conveyor speed"
		optional={true}
		key="waveSpeed"
		value={userData.waveSpeed}
		on:input={onInput}
	/>
</div>

<style>
	h2 {
		font-family: 'Nunito Sans Light', sans-serif;
		font-size: 24px;
		line-height: 150%;
		width: 100%;
	}
	.progress-bar {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		width: fit-content;
		margin: 2vw 0vw;
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
