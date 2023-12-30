<script>
	import Link from '$lib/components/Link.svelte';
	import selective from '$lib/images/selective-soldering.svg';
	import wave from '$lib/images/wave-soldering.svg';
	import Brocher from '$lib/documents/Interflux-ICSF2022v2.pdf';
</script>

<div class="liner padding">
	<video
		controls
		width="1920"
		height="1080"
		poster="https://cdn.interflux.com/videos/ICSF-Select6/ICSF-Select6@1920x1080.jpg"
	>
		<source
			src="https://cdn.interflux.com/videos/ICSF-Select6/ICSF-Select6@1920x1080.webm"
			type="video/webm"
		/>
		<source
			src="https://cdn.interflux.com/videos/ICSF-Select6/ICSF-Select6@1920x1080.mp4"
			type="video/mp4"
		/>
		<track default kind="captions" />
	</video>
</div>

<style>
	.liner {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 950px;
		padding: 0px 40px;
		box-sizing: border-box;
		margin-top: 40px;
	}
	video {
		max-width: 100%;
		height: auto;
	}
</style>
