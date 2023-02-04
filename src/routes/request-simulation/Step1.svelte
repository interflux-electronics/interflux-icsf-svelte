<script lang="ts">
	import ImageUploader from '$lib/components/ImageUploader.svelte';
	import { createEventDispatcher } from 'svelte';
	import circle_unchecked from '$lib/images/circle-unchecked.svg';
	import board_example from '$lib/images/board-example.png';

	export let userData: any;

	const dispatch = createEventDispatcher();

	function onImageUploadComplete(event: any) {
		console.log('onImageUploadComplete()');
		const imageURL = event.detail.imageURL;
		console.log(imageURL);
		dispatch('input', { key: 'image', value: imageURL });
	}

	function onRemoveImage() {
		dispatch('input', { key: 'image', value: null });
	}
</script>

<div class="progress-bar">
	<div class="circles">
		<img src={circle_unchecked} alt="progress bar" />
		<img src={circle_unchecked} alt="progress bar" />
		<img src={circle_unchecked} alt="progress bar" />
		<img src={circle_unchecked} alt="progress bar" />
	</div>
	<div class="line" />
</div>

<h2>Please provide a top down picture of your circuit board.</h2>

<p>Example photo:</p>
<img id="board-example" src={board_example} alt="board example" />

<p>Your photo:</p>
<ImageUploader
	label="Please select an image of your circuit board."
	maxSize={10}
	imageURL={userData.image}
	on:uploadcomplete={onImageUploadComplete}
	on:removeimage={onRemoveImage}
/>

<style>
	.progress-bar {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		width: fit-content;
		margin: 2vw 0vw;
		align-content: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	.circles {
		display: flex;
		gap: 35px;
		z-index: 2;
		position: relative;
	}
	.line {
		display: flex;
		height: 2px;
		background-color: var(--green-2);
		width: 100%;
		position: absolute;
		align-items: center;
	}
	h2 {
		font-family: 'Nunito Sans Light', sans-serif;
		font-size: 24px;
		line-height: 150%;
		width: 100%;
	}
	img#board-example {
		max-width: 100%;
		height: auto;
	}
</style>
