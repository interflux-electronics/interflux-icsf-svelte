<script>
	import circle_unchecked from '$lib/images/circle-unchecked.svg';
	import board_example from '$lib/images/board-example.png';
</script>

<div class="progress-bar">
	<div class="circles">
		<img src={circle_unchecked} alt="progress bar" />
		<img src={circle_unchecked} alt="progress bar" />
		<img src={circle_unchecked} alt="progress bar" />
		<img src={circle_unchecked} alt="progress bar" />
	</div>
	<div class="line" />
</div>

<h2>Please provide a picture of your circuit board</h2>

<h4>Picture Guide:</h4>
<img id="board_example" src={board_example} alt="board example" />

<div class="CTA">
	<a href="/">Upload my board</a>
	<a href="/">Take a photo</a>
</div>

<style>
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

	h2 {
		font-family: 'Nunito Sans Light', sans-serif;
		font-size: 24px;
		line-height: 150%;
		width: 100%;
	}

	h4 {
		width: 100%;
	}

	#board_example {
		width: 100%;
		height: auto;
	}

	.CTA {
		display: flex;
		flex-direction: column;
		margin: 10vw 0vw;
		width: 100%;
	}

	.CTA a {
		background-color: rgba(57, 132, 81, 1);
		display: flex;
		border: solid 2px;
		border-color: rgba(46, 107, 65, 1);
		border-radius: 3px;
		justify-content: center;
		gap: 10px;
		width: 100%;
		height: 46px;
		align-items: center;
		margin: 25px 0px 15px 0px;
		color: white;
	}
</style>
