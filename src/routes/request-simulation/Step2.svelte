<script lang="ts">
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import InputText from '$lib/components/InputText.svelte';
	import { createEventDispatcher } from 'svelte';

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

<ProgressBar total={4} checked={1} />

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
