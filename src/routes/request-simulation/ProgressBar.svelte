<script>
	import Circle from './Circle.svelte';
</script>

<div class="progress-bar">
	<div class="circles">
		<Circle checked={true} />
		<Circle checked={false} />
		<Circle checked={false} />
		<Circle checked={false} />
	</div>
	<div class="line" />
</div>

<style>
	.progress-bar {
		display: flex;
		align-items: center;
		position: relative;
		width: fit-content;
		margin: 8vw 0vw;
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
		max-width: 250px;
	}
</style>
