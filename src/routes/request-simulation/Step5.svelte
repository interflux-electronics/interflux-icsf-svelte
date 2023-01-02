<script>
	import Circle from '../Circle.svelte';
	import InputText from '../InputText.svelte';
</script>

<div>
	<div class="progress-bar">
		<div class="circles">
			<Circle checked={true} />
			<Circle checked={true} />
			<Circle checked={true} />
			<Circle checked={true} />
		</div>
		<div class="line" />
	</div>
</div>

<h2>Contact detail</h2>
<div class="fields">
	<InputText label="Full name" />
	<InputText type="email" label="Email" />
	<InputText label="Company name" optional={true} />
</div>

<style>
	.line {
		display: flex;
		height: 2px;
		background-color: var(--green-2);
		width: 100%;
		position: absolute;
		align-items: center;
	}

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
</style>
