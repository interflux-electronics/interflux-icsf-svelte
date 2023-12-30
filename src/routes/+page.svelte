<script>
	import MediaQuery from '$lib/components/MediaQuery.svelte';
	import closeshot from '$lib/images/close-shot.png';
	import board_bg from '$lib/images/board-background.png';
	import machine_hr from '$lib/images/machine-hr.png';
	import Hero from './Hero.svelte';
	import FooterMobile from './FooterMobile.svelte';
	import FooterDesktop from './FooterDesktop.svelte';
	import CTA from './CTA.svelte';
	import Video from './Video.svelte';
	import What from './What.svelte';
</script>

<MediaQuery query="(max-width: 800px)" let:matches>
	{#if matches}
		<main id="mobile">
			<Hero />
			<Video />
			<CTA />
			<What />
			<img id="closeshot" src={closeshot} alt="closeshot" />
		</main>
		<FooterMobile />
	{/if}
</MediaQuery>

<MediaQuery query="(min-width: 801px)" let:matches>
	{#if matches}
		<main id="desktop">
			<div class="moving-bg" style="background-image: url({board_bg})" />
			<div class="spotlight" />
			<div class="liner">
				<div class="left">
					<Hero />
					<CTA />
					<img id="closeshot" src={closeshot} alt="closeshot" />
				</div>
				<div class="right">
					<img id="machine" src={machine_hr} alt="ICSF machine" />
					<What />
				</div>
			</div>
			<Video />
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
		background: var(--blue-5);
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
	@keyframes right-to-left-background {
		from {
			background-position: 0% center;
		}
		to {
			background-position: 10000px center;
		}
	}
	.moving-bg {
		background-color: rgb(26 49 74);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 520px;
		background-size: auto 100%;
		background-position: 0% center;
		animation: right-to-left-background 400s linear infinite;
		border-bottom: 1px solid white;
		z-index: 2;
	}
	.spotlight {
		position: absolute;
		z-index: 1;
		width: 1200px;
		height: 1200px;
		top: 100px;
		left: calc(50% - 300px);
		background: radial-gradient(closest-side, var(--blue-3), transparent);
	}
	img#machine {
		position: absolute;
		width: 450px;
		right: -50px;
		top: 119px;
		z-index: 3;
	}
	img#closeshot {
		width: 100%;
		height: auto;
	}
</style>
