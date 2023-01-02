<script>
	import back_icon from '$lib/images/back-icon.svg';
	import Step1 from './Step1.svelte';
	import Step3 from './Step3.svelte';
	import Step4 from './Step4.svelte';
	import Step5 from './Step5.svelte';
</script>

<div class="liner">
	<header>
		<a href="/" class="back">
			<img src={back_icon} alt="go back" />
			<span>Go back</span>
		</a>
	</header>

	<Step1 />

	<Step3 />

	<Step4 />

	<Step5 />

	<footer>
		<a href="/" class="back">
			<img src={back_icon} alt="go back" />
			<span>Go back</span>
		</a>
		<a href="/" class="continue">
			<span>Submit</span>
		</a>
	</footer>
</div>

<style>
	.liner {
		display: flex;
		flex-direction: column;
		max-width: 450px;
		padding: 50px;
		gap: 40px;
	}

	.back {
		display: flex;
		gap: 10px;
	}

	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	footer .continue {
		background-color: rgba(57, 132, 81, 1);
		display: flex;
		border: solid 2px;
		border-color: rgba(46, 107, 65, 1);
		border-radius: 3px;
		justify-content: center;
		gap: 10px;
		height: 46px;
		align-items: center;
		color: white;
		width: 150px;
	}
</style>
