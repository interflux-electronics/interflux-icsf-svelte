<script>
	import Circle from './Circle.svelte';
	import InputText from './InputText.svelte';
	import OptionBoxs from './OptionBoxs.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	$: dataStep3 = {
		cycleTime: null,
		fluxBrand: null,
		fluxConsumption: null,
		boardReference: null,
		knownIssue: null,
		solderProcess: null,
		fluxProcess: null
	};

	function onInput(event) {
		const key = event.detail.key;
		const value = event.detail.value;
		//console.log('Step3 onInput()', key, value);
		dataStep3[key] = value;
		dispatch('input', { key, value });
	}

	function onSelect(event) {
		const key = event.detail.key;
		const value = event.detail.value;
		console.log('Step3 onSelect()', key, value);
		dataStep3[key] = value;
		dispatch('select', { key, value });
	}
	//
</script>

<div>
	<div class="progress-bar">
		<div class="circles">
			<Circle checked={true} />
			<Circle checked={true} />
			<Circle checked={false} />
			<Circle checked={false} />
		</div>
		<div class="line" />
	</div>
</div>

<h2>Please provide the specs of your circuit board</h2>
<div class="fields">
	<InputText type="text" label="Required cycle time" key="cycleTime" on:input={onInput} />
	<InputText
		type="text"
		label="Flux brand or type"
		description="For example: Interflux"
		optional={true}
		key="fluxBrand"
		on:input={onInput}
	/>
	<InputText
		type="text"
		label="Actual flux consumption"
		optional={true}
		key="fluxConsumption"
		on:input={onInput}
	/>
	<InputText
		type="text"
		label="Board reference"
		optional={true}
		key="boardReference"
		on:input={onInput}
	/>
	<OptionBoxs
		title="Solder process"
		op1="Wave"
		op2="Selective"
		op3="Others"
		key="solderProcess"
		on:select={onSelect}
	/>
	<OptionBoxs
		title="Actual flux application process"
		op1="Spray"
		op2="Jet"
		op3="Foam"
		key="fluxProcess"
		on:select={onSelect}
	/>
	<InputText
		type="text"
		label="Known issues with the process"
		optional={true}
		key="knownIssue"
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
