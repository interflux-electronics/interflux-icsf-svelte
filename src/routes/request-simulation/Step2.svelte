<script>
	import Circle from './Circle.svelte';
	import InputText from './InputText.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	$: dataStep2 = {
		projectName: null,
		palletWidth: null,
		palletHeight: null,
		boardReference: null,
		waveSpeed: null
	};

	function onInput(event) {
		const key = event.detail.key;
		const value = event.detail.value;

		// Does the same thing!
		// const { key, value } = event.detail;

		// console.log('Step2 onInput()', key, value);

		dataStep2[key] = value;

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
		on:input={onInput}
	/>
	<InputText
		type="email"
		label="Pallet width"
		description="For example: 420mm or 30 inches"
		key="palletWidth"
		on:input={onInput}
	/>
	<InputText type="text" label="Pallet height" key="palletHeight" on:input={onInput} />
	<InputText
		type="text"
		label="Wave solder conveyor speed"
		optional={true}
		key="waveSpeed"
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
