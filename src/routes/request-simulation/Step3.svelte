<script lang="ts">
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import InputText from '$lib/components/InputText.svelte';
	import OptionBoxes from '$lib/components/OptionBoxes.svelte';
	import { createEventDispatcher } from 'svelte';

	export let userData: any;

	export let cycleTimeError: string | null = null;
	export let solderProcessError: string | null = null;
	export let fluxProcessError: string | null = null;

	const dispatch = createEventDispatcher();

	function onInput(event: any) {
		const key = event.detail.key;
		const value = event.detail.value;
		dispatch('input', { key, value });
	}
</script>

<ProgressBar total={4} checked={2} />

<h2>Please provide the specs of your circuit board</h2>

<div class="fields">
	<InputText
		type="text"
		label="Required cycle time"
		key="cycleTime"
		value={userData.cycleTime}
		errorMessage={cycleTimeError}
		on:input={onInput}
	/>

	<InputText
		type="text"
		label="Flux brand or type"
		description="For example: Interflux"
		optional={true}
		key="fluxBrand"
		value={userData.fluxBrand}
		on:input={onInput}
	/>

	<InputText
		type="text"
		label="Actual flux consumption"
		optional={true}
		key="fluxConsumption"
		value={userData.fluxConsumption}
		on:input={onInput}
	/>

	<InputText
		type="text"
		label="Board reference"
		optional={true}
		key="boardReference"
		value={userData.boardReference}
		on:input={onInput}
	/>

	<OptionBoxes
		title="Solder process"
		op1="Wave"
		op2="Selective"
		op3="Others"
		key="solderProcess"
		value={userData.solderProcess}
		errorMessage={solderProcessError}
		on:input={onInput}
	/>

	<OptionBoxes
		title="Actual flux application process"
		op1="Spray"
		op2="Jet"
		op3="Foam"
		key="fluxProcess"
		value={userData.fluxProcess}
		errorMessage={fluxProcessError}
		on:input={onInput}
	/>

	<InputText
		type="text"
		label="Known issues with the process"
		optional={true}
		key="knownIssue"
		value={userData.knownIssue}
		on:input={onInput}
	/>
</div>
