<script>
	import { onMount } from 'svelte';
	import CameraCapture from './CameraPreview.svelte';
	//import { getMediaStream, getImageCapture } from '../../helpers/cameraHelper'

	const cameraWidth = 500;
	const cameraHeight = 500;
	let pictureUrl = null;
	let imageCapture = null;
	let mediaStreamPromise = null;

	function getMediaStream(constraints = { video: true }) {
		return navigator.mediaDevices.getUserMedia(constraints);
	}

	function getImageCapture(mediaStream) {
		const track = mediaStream.getVideoTracks()[0];
		return new ImageCapture(track);
	}

	onMount(async () => {
		mediaStreamPromise = getMediaStream({ video: true }).then((mediaStream) => {
			imageCapture = getImageCapture(mediaStream);
			return mediaStream;
		});
	});
	function takePicture() {
		imageCapture
			.takePhoto()
			.then((blob) => {
				pictureUrl = URL.createObjectURL(blob);
			})
			.catch((err) => console.log('Error while taking photo ', err));
	}
</script>

<div class="camera">
	<div class="camera-video">
		{#await mediaStreamPromise}
			<h1>Waiting for camera....</h1>
		{:then mediaStream}
			<CameraCapture {mediaStream} previewWidth={cameraWidth} previewHeight={cameraHeight} />
		{:catch error}
			<h1>Error: {error.message}</h1>
		{/await}

		{#if pictureUrl}
			<img
				class="taken-picture"
				src={pictureUrl}
				alt="result"
				height={cameraHeight}
				width={cameraWidth}
			/>
		{/if}
	</div>
	<button class="take-picture-btn" on:click={takePicture}>Take picture !</button>
</div>

<style>
	.camera {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.camera-video {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.taken-picture {
		object-fit: contain;
		border: 5px solid brown;
	}
	.take-picture-btn {
		align-self: center;
	}
</style>
