<script lang="ts">
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import ImageUploader from '$lib/components/ImageUploader.svelte';
	import { createEventDispatcher } from 'svelte';
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

<ProgressBar total={4} checked={0} />

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
	img#board-example {
		max-width: 100%;
		height: auto;
	}
</style>
