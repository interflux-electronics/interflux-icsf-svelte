<script>
	export let op1;
	export let op2;
	export let op3;
	export let title;
</script>

<div class="option-boxs">
	<h4>{title}</h4>
	<div class="option-box">
		<button class="selected">{op1}</button>
		<button>{op2}</button>
		<button>{op3}</button>
	</div>
</div>

<style>
	.option-boxs {
		display: flex;
		flex-direction: column;
		gap: 15px;
		margin-bottom: 20px;
	}
	.option-box {
		display: flex;
	}

	button {
		font-family: 'Nunito Sans Semibold';
		background-color: white;
		font-size: 18px;
		padding: 7px 15px;
		margin: -1px;
		outline: 0;
		display: flex;
		border: 1px solid var(--grey-2);
		justify-content: center;
		width: 110px;
		color: var(--grey-7);
		cursor: pointer;
	}

	button:hover {
		box-shadow: 0 0 0 1px var(--blue-3) inset;
		border-color: var(--blue-3);
		z-index: 1;
	}

	.option-box button.selected {
		border: 1px solid var(--blue-4);
		background-color: var(--blue-3);
		color: white;
	}
</style>
