<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import circle_unchecked from '$lib/images/circle-unchecked.svg';
	import board_example from '$lib/images/board-example.png';
	import uploadFile from '$lib/images/upload-file.png'; // TODO: replace with SVG

	export let userData: any;

	const dispatch = createEventDispatcher();

	$: imageBlob = userData.image ? URL.createObjectURL(userData.image) : null;
	$: userSelectedImage = imageBlob ? true : false;

	function onImageSelect(event: any) {
		debugger;
		const files = event.target.files;
		const file = files[0];
		dispatch('input', { key: 'image', value: file });
	}

	function removePreviewImage() {
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
<img id="board_example" src={board_example} alt="board example" />

<p>Your photo:</p>
{#if userSelectedImage}
	<div class="preview">
		<img src={imageBlob} alt="" aria-hidden="true" />
		<button on:click={removePreviewImage}>Remove</button>
	</div>
{:else}
	<div class="upload">
		<label for="image-upload">
			<img src={uploadFile} alt="" aria-hidden="true" />
			<span>Select image</span>
		</label>
		<input type="file" accept="image/*" id="image-upload" on:change={onImageSelect} />
	</div>
{/if}

<style>
	.upload label {
		width: 100%;
		height: calc(100vw - 60px);
		border: 1px dashed #ccc;
		border-radius: 3px;
		padding: 10px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
		cursor: pointer;
	}
	.upload label span {
		color: var(--grey-7);
		font-size: 16px;
	}
	.upload input[type='file'] {
		display: none;
	}
	.preview img {
		width: 100%;
		height: auto;
		margin-bottom: 20px;
	}
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
	/* h4 {
		width: 100%;
	} */
	#board_example {
		width: 100%;
		height: auto;
	}

	@media only screen and (min-width: 701px) {
		.upload label {
			height: 350px;
		}
	}
</style>
