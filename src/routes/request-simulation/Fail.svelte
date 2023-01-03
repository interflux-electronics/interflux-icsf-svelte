<script>
	import X_Icon from '$lib/images/x-circle.svg';
	import Board_detection_bg from '$lib/images/board-detection-bg.png';
	import Interflux_Logo_2 from '$lib/images/primary-interflux-symbol-2.svg';
	import Link from '../Link.svelte';
</script>

<section style="background-image: url({Board_detection_bg})">
	<div class="content">
		<img src={Interflux_Logo_2} alt="logo" />
		<img id="check-icon" src={X_Icon} alt="tick" />
		<h2>Unsucessful</h2>
		<p>Something went wrong! Please contact us or try again later.</p>
		<div class="bottom-links">
			<Link label="Home" url="/" theme="button primary boarder blue" />
			<Link label="Contact us" url="mailto:ask@interflux.com.sg" theme="button secondary white" />
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: auto;
		position: relative;
		background-color: var(--blue-3);
		color: white;
		background-size: 100% auto;
		background-position: center top;
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 50px;
		max-width: 280px;
		margin-bottom: 10vw;
	}

	img#check-icon {
		width: 161px;
	}

	.bottom-links {
		display: flex;
		flex-direction: column;
		gap: 15px;
		align-items: center;
		margin: 5vw 0vw;
	}
</style>
