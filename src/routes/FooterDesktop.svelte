<script>
	import people_footer from '$lib/images/people-footer.jpg';
	import Board_detection_footer from '$lib/images/Board-detection-footer.jpg';
	import bluelogo from '$lib/images/interflux-singapore-logo-blue-on-white.svg';
	import Accordion from './Accordion.svelte';
</script>

<footer>
	<div class="left">
		<h2>Contact</h2>
		<Accordion style="color:black" />
		<img id="logo" src={bluelogo} alt="Interflux Singapore logo" />
	</div>
	<div class="right">
		<img src={Board_detection_footer} alt="machine" />
		<img src={people_footer} alt="people" />
	</div>
</footer>

<style>
	footer {
		width: 100%;
		background: white;
		display: flex;
		justify-content: space-between;
	}
	.left {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	footer .top img {
		width: 100vw;
		height: auto;
		position: relative;
		z-index: 0;
	}
	h2 {
		font-size: 35px;
		line-height: 100%;
		color: var(--grey-7);
		width: 100%;
		max-width: 360px;
	}
</style>
