<script>
	import people from '$lib/images/people.png';
	import whitelogo from '$lib/images/interflux-singapore-logo-white.svg';
	import Accordion from './Accordion.svelte';
</script>

<footer>
	<div class="top">
		<img id="people" src={people} alt="people" />
		<div class="text">
			<h2 id="contact">Contact</h2>
		</div>
	</div>

	<Accordion>
		<p>love ya</p>
	</Accordion>
	<img id="logo" src={whitelogo} alt="Interflux Singapore logo" />
</footer>

<style>
	footer {
		background: linear-gradient(#1f4e7d, #163759);
	}
	.top {
		position: relative;
	}
	.top img {
		width: 100vw;
		height: auto;
		position: relative;
		z-index: 0;
	}
	.top .text {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.top h2 {
		font-size: 35px;
		line-height: 100%;
		color: white;
		width: 100%;
		padding: 0 6vw;
		padding: 0 6vw;
		max-width: 360px;
	}

	#logo {
		width: 100%;
		height: auto;
		margin: 20vw auto;
		max-width: 360px;
	}
</style>
