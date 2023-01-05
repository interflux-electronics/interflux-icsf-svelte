<script>
	import MediaQuery from './MediaQuery.svelte';
	import closeshot from '$lib/images/close-shot.png';
	import Hero from './Hero.svelte';
	import Footer from './Footer.svelte';
	import CTA from './CTA.svelte';
	import What from './What.svelte';
</script>

<MediaQuery query="(max-width: 450px)" let:matches>
	{#if matches}
		<Hero />
		<CTA />
		<What />
		<img src={closeshot} alt="closeshot" />
		<Footer />
	{/if}
</MediaQuery>

<MediaQuery query="(min-width: 451px) and (max-width: 1280px)" let:matches>
	{#if matches}
		<div class="left-column-top">
			<Hero />
			<CTA />
			<img src={closeshot} alt="closeshot" />
		</div>
		<div class="right-column-top">
			<What />
			<img src={closeshot} alt="closeshot" />
		</div>
		<div class="left-column-bottom">
			<Footer />
		</div>
	{/if}
</MediaQuery>

<style>
</style>
