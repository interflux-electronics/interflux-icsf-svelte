<script>
	import Step1 from './Step1.svelte';
	import Step2 from './Step2.svelte';
	import Step3 from './Step3.svelte';
	import Step4 from './Step4.svelte';
	import Button from './Button.svelte';
	import Link from '../Link.svelte';
	import Sending from './Sending.svelte';
	import Success from './Success.svelte';
	import Fail from './Fail.svelte';

	let view = 'form';

	$: showForm = view === 'form';
	$: showSending = view === 'submitting';
	$: showSuccess = view === 'success';
	$: showFail = view === 'fail';

	let step = 1;

	$: showStep1 = step === 1; // true
	$: showStep2 = step === 2; // false
	$: showStep3 = step === 3; // false
	$: showStep4 = step === 4; // false

	// All the data which was entered by the user.
	$: allData = {};

	// In production, all the domain names below are redirected to the main one.
	// jet-fluxer.com (main)
	// jetfluxer.com
	// www.jet-fluxer.com
	// www.jetfluxer.com
	// That allows us to deduct whether we are in production or development by
	// looking at the URL alone.
	const isProduction = location.hostname === 'jet-fluxer.com';
	const apiHost = isProduction ? 'https://api.interflux.com' : 'http://localhost:3000';
	const apiHeaders = {
		'Content-Type': 'application/vnd.api+json',
		Accept: 'application/vnd.api+json'
	};

	function onInput(event) {
		const { key, value } = event.detail;
		allData[key] = value;
		console.log(allData);
	}

	function nextStep() {
		console.log('next step!');
		step = step + 1;
		scrollToTop();
	}

	function prevStep() {
		console.log('previous step!');
		step = step - 1;
		scrollToTop();
	}

	function scrollToTop() {
		window.scrollTo({ top: 0 });
	}

	async function onClickSubmit() {
		console.log('onClickSubmit()');

		view = 'submitting';

		const file = allData.image;
		const uuid = 'ffdc94a0-96de-4f97-9dac-14fd5fbc82fe'; // TODO: generate

		allData.image = await uploadImage(file, uuid);

		console.log('submitting ...');
		console.log({ allData });

		const attributes = allData;

		attributes.id = uuid;

		fetch(`${apiHost}/v1/public/simulation-requests`, {
			method: 'POST',
			headers: new Headers(apiHeaders),
			body: JSON.stringify({
				data: {
					attributes
				}
			})
		})
			.then((response) => response.json())
			.then((json) => {
				if (json.data.id) {
					console.log('submit success');
					view = 'success';
				} else {
					console.error('submit failed');
					view = 'fail';
				}
			})
			.catch((response) => {
				console.error('submit failed');
				console.error(response);
				view = 'fail';
			});
	}

	async function uploadImage(file, id) {
		console.log('uploadImage()');
		console.log({ file, id });

		if (!file) {
			console.warn('user did not select image');
			return null;
		}

		const fileExt = file.name.split('.').pop(-1);
		const fileName = `${id}.${fileExt}`;
		const response = await fetchUploadURL(fileName);

		if (!response) {
			console.warn('no response');
			return null;
		}

		const { uploadURL, cdnPath } = response;

		console.log({ uploadURL, cdnPath });

		if (!uploadURL) {
			console.warn('no uploadURL');
			return null;
		}

		if (!cdnPath) {
			console.warn('no cdnPath');
			return null;
		}

		// TODO: enable once internet connected
		// const uploadSuccess = await uploadFileToCDN(uploadURL, file);

		const uploadSuccess = true;

		console.debug({ uploadSuccess });

		if (!uploadSuccess) {
			console.warn('upload failed');
			return null;
		}

		console.log('upload success');

		return cdnPath;
	}

	async function fetchUploadURL(fileName) {
		return new Promise((resolve, reject) => {
			const url = `${apiHost}/v1/public/simulation-requests/image-upload-url`;

			console.log('---');
			console.log('fetchUploadURL');
			console.log({ isProduction, apiHost, url, fileName });
			console.log('---');

			return fetch(url, {
				method: 'POST',
				body: JSON.stringify({ fileName }),
				headers: new Headers(apiHeaders)
			})
				.then((response) => response.json())
				.then((data) => {
					resolve({
						uploadURL: data['upload-url'],
						cdnPath: data['cdn-path']
					});
				})
				.catch((response) => {
					console.error('failed to fetch upload URL');
					console.error(response);
					reject();
				});
		});
	}

	// async function uploadFileToCDN(uploadURL, file) {
	// 	return new Promise((resolve, reject) => {
	// 		try {
	// 			const xhr = new XMLHttpRequest();
	// 			xhr.upload.addEventListener('progress', (ev) => {
	// 				const uploadProgress = Math.round((ev.loaded / ev.total) * 100);
	// 				console.log(`${uploadProgress}%`);
	// 			});
	// 			xhr.addEventListener('load', () => resolve(true));
	// 			xhr.addEventListener('error', () => reject(false));
	// 			xhr.addEventListener('abort', () => reject(false));
	// 			xhr.open('PUT', uploadURL);
	// 			xhr.overrideMimeType(file.type);
	// 			xhr.setRequestHeader('x-amz-acl', 'public-read');
	// 			xhr.send(file);
	// 		} catch (error) {
	// 			console.error('some random error occured');
	// 			reject(false);
	// 		}
	// 	});
	// }
</script>

{#if showForm}
	<div class="liner">
		<header>
			{#if showStep1}
				<Link url="/" label="Go back" icon="back" theme="back" />
			{:else}
				<Button label="Go back" icon="back" theme="back" on:click={prevStep} />
			{/if}
		</header>

		{#if showStep1}
			<Step1 data={allData} on:input={onInput} />
		{/if}

		{#if showStep2}
			<Step2 data={allData} on:input={onInput} />
		{/if}

		{#if showStep3}
			<Step3 data={allData} on:input={onInput} />
		{/if}

		{#if showStep4}
			<Step4 data={allData} on:input={onInput} />
		{/if}

		<footer>
			{#if showStep1}
				<Link url="/" label="Go back" icon="back" theme="back" />
			{:else}
				<Button label="Go back" icon="back" theme="back" on:click={prevStep} />
			{/if}

			{#if showStep4}
				<Button label="Submit" theme="button primary green" on:click={onClickSubmit} />
			{:else}
				<Button label="Continue" theme="button primary green" on:click={nextStep} />
			{/if}
		</footer>
	</div>
{/if}

{#if showSending}
	<Sending />
{/if}

{#if showSuccess}
	<Success />
{/if}

{#if showFail}
	<Fail />
{/if}

<style>
	.liner {
		display: flex;
		flex-direction: column;
		max-width: 450px;
		padding: 30px;
		gap: 30px;
	}
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
</style>
