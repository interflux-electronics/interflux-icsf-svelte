<script>
	import MediaQuery from './MediaQuery.svelte';
	import closeshot from '$lib/images/close-shot.png';
	import board_bg from '$lib/images/board-background.png';
	import machine from '$lib/images/machine.png';
	import Hero from './Hero.svelte';
	import FooterMobile from './FooterMobile.svelte';
	import FooterDesktop from './FooterDesktop.svelte';
	import CTA from './CTA.svelte';
	import What from './What.svelte';
</script>

<MediaQuery query="(max-width: 700px)" let:matches>
	{#if matches}
		<main id="mobile">
			<Hero />
			<CTA />
			<What />
			<img id="closeshot" src={closeshot} alt="closeshot" />
		</main>
		<!-- <Footer /> -->
		<FooterMobile />
	{/if}
</MediaQuery>

<MediaQuery query="(min-width: 701px)" let:matches>
	{#if matches}
		<main id="desktop">
			<div class="moving-bg" style="background-image: url({board_bg})" />
			<div class="liner">
				<div class="left">
					<Hero />
					<CTA />
					<img id="closeshot" src={closeshot} alt="closeshot" />
				</div>
				<div class="right">
					<img id="machine" src={machine} alt="ICSF machine" />
					<What />
				</div>
			</div>
		</main>
		<FooterDesktop />
	{/if}
</MediaQuery>

<style>
	#desktop {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
		background: radial-gradient(#23578c, #1b436c);
		width: 100%;
		position: relative;
		padding-bottom: 100px;
	}

	.liner {
		max-width: 950px;
		padding: 0px 40px;
		display: flex;
		justify-content: space-between;
		gap: 7vw;
		box-sizing: border-box;
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.left,
	.right {
		display: flex;
		flex-direction: column;
		z-index: 99;
		width: 50%;
		max-width: 450px;
		position: relative;
	}

	.left {
		gap: 50px;
	}

	img#machine {
		z-index: 99;
		-webkit-transform: scaleX(-1);
		transform: scaleX(-1);
	}

	@keyframes right-to-left-background {
		from {
			background-position: 0% center;
		}
		to {
			background-position: 10000% center;
		}
	}

	main .moving-bg {
		background-color: rgb(26 49 74);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 520px;
		background-size: auto 100%;
		background-position: 0% center;
		animation: right-to-left-background 200s linear infinite;
		border-bottom: 1px solid white;
	}

	img#closeshot {
		width: 100%;
		height: auto;
	}

	img#machine {
		position: absolute;
		width: 500px;
		right: -50px;
		top: 76px;
	}
</style>
