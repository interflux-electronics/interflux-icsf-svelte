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

<MediaQuery query="(max-width: 500px)" let:matches>
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

<MediaQuery query="(min-width: 501px)" let:matches>
	{#if matches}
		<main id="desktop">
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
				<div class="moving-bg" style="background-image: url({board_bg})" />
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
	}

	.liner {
		display: flex;
		gap: 50px;
		padding: 0 50px;
	}

	.left,
	.right {
		display: flex;
		flex-direction: column;
		z-index: 99;
	}

	.left {
		gap: 30px;
	}

	img#machine {
		z-index: 99;
		-webkit-transform: scaleX(-1);
		transform: scaleX(-1);
	}

	main .moving-bg {
		background-color: rgb(26 49 74);
		position: absolute;
		top: 0;
		left: 0;
		height: 60%;
		width: 100%;
		background-size: auto 100%;
		background-position: 0% center;
		animation: right-to-left-background 200s linear infinite;
		border-bottom: 1px solid white;
	}

	img#closeshot {
		width: 100%;
		height: auto;
	}
</style>
