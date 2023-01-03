<script>
	import Circle from './Circle.svelte';
	import InputText from './InputText.svelte';
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
	<InputText type="text" label="Project name" optional={true} />
	<InputText type="email" label="Pallet width" description="For example: 420mm or 30 inches" />
	<InputText type="text" label="Pallet height" />
	<InputText type="text" label="Board reference" optional={true} />
	<InputText type="text" label="Wave solder conveyor speed" optional={true} />
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
