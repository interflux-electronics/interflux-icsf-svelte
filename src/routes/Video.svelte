<script>
	import Button from '$lib/components/Button.svelte';

	function playVideo() {
		document.querySelector('video')?.play();
		document.querySelector('video+button')?.remove();
	}
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

	<Button label="Play video" theme="large green-background" icon="play" on:click={playVideo} />
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
		position: relative;
	}
	video {
		max-width: 100%;
		height: auto;
	}
	video + :global(button) {
		position: absolute;
	}
</style>
