<script lang="ts">
	import Step1 from './Step1.svelte';
	import Step2 from './Step2.svelte';
	import Step3 from './Step3.svelte';
	import Step4 from './Step4.svelte';
	import Button from './Button.svelte';
	import Link from '../Link.svelte';
	import Sending from './Sending.svelte';
	import Success from './Success.svelte';
	import Fail from './Fail.svelte';
	import LeftsideDesktop from './LeftsideDesktop.svelte';
	import { tick } from 'svelte';

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
	$: userData = {};

	$: formIsValid = step1IsValid && step2IsValid && step3IsValid && step4IsValid;

	$: step1IsValid = true; // TODO: refactor
	$: step2IsValid = !palletWidthError && !palletLengthError;
	$: step3IsValid = true; // TODO: refector
	$: step4IsValid = !fullNameError && !emailError;

	// We only show input errors after they clicked "Continue", not when the show is first shown.
	let showErrorsStep1 = false;
	let showErrorsStep2 = false;
	let showErrorsStep3 = false;
	let showErrorsStep4 = false;

	$: palletWidthError = showErrorsStep2
		? !userData.palletWidth
			? 'Please enter a value'
			: null
		: null;

	$: palletLengthError = showErrorsStep2
		? !userData.palletLength
			? 'Please enter a value'
			: null
		: null;

	// The pattern for a full name is at least 2 characters and only letters.
	const fullNameRegex = /[A-Za-z]{2,}/;

	// The pattern for an email consists of any amount of characters, then an @ symbol,
	// then minimum 2 characters, then a dot, then minimum 2 characters.
	const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/;

	$: fullNameError = showErrorsStep4
		? !userData.fullName
			? 'Please enter your name'
			: !fullNameRegex.test(userData.fullName)
			? 'Please enter at least 2 characters'
			: null
		: null;

	$: emailError = showErrorsStep4
		? !userData.email
			? 'Please enter your email'
			: !emailRegex.test(userData.email)
			? 'Please enter a valid email'
			: null
		: null;

	// In production, all the domain names below are redirected to the main one.
	// jet-fluxer.com (main)
	// jetfluxer.com
	// www.jet-fluxer.com
	// www.jetfluxer.com
	// That allows us to deduct whether we are in production or development by
	// looking at the URL alone.
	const isProduction = location && location.hostname === 'jet-fluxer.com';
	const apiHost = isProduction ? 'https://api.interflux.com' : 'http://localhost:3000';
	const apiHeaders = {
		'Content-Type': 'application/vnd.api+json',
		Accept: 'application/vnd.api+json'
	};

	function onInput(event: any) {
		const { key, value } = event.detail;
		userData[key] = value;
		console.log(userData);
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

	async function onContinueStep1() {
		showErrorsStep1 = true;
		await tick(); // await for Svelte to recompute
		if (step1IsValid) {
			nextStep();
		}
	}

	async function onContinueStep2() {
		showErrorsStep2 = true;
		await tick(); // await for Svelte to recompute
		if (step2IsValid) {
			nextStep();
		}
	}

	async function onContinueStep3() {
		showErrorsStep3 = true;
		await tick(); // await for Svelte to recompute
		if (step3IsValid) {
			nextStep();
		}
	}

	async function onSubmitStep4() {
		console.log('onSubmitStep4()');

		showErrorsStep4 = true;

		await tick(); // await for Svelte to recompute

		if (!step4IsValid || !formIsValid) {
			console.warn('not submitting!');
			console.warn('step 4 is not valid');
			return; // this prevents the rest of the logic from being executed
		}

		if (!formIsValid) {
			console.warn('not submitting!');
			console.warn('form is not valid');
			return; // this prevents the rest of the logic from being executed
		}

		view = 'submitting';

		const file = userData.image;
		const uuid = self.crypto.randomUUID();

		userData.image = await uploadImage(file, uuid);

		console.log('submitting ...');
		console.log({ userData });

		const attributes = userData;

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

	async function uploadImage(file: File, id: string) {
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

		const uploadSuccess = await uploadFileToCDN(uploadURL, file);

		console.debug({ uploadSuccess });

		if (!uploadSuccess) {
			console.warn('upload failed');
			return null;
		}

		console.log('upload success');

		return cdnPath;
	}

	async function fetchUploadURL(fileName: string) {
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

	async function uploadFileToCDN(uploadURL: string, file: File) {
		return new Promise((resolve, reject) => {
			try {
				const xhr = new XMLHttpRequest();
				xhr.upload.addEventListener('progress', (ev) => {
					const uploadProgress = Math.round((ev.loaded / ev.total) * 100);
					console.log(`${uploadProgress}%`);
				});
				xhr.addEventListener('load', () => resolve(true));
				xhr.addEventListener('error', () => reject(false));
				xhr.addEventListener('abort', () => reject(false));
				xhr.open('PUT', uploadURL);
				xhr.overrideMimeType(file.type);
				xhr.setRequestHeader('x-amz-acl', 'public-read');
				xhr.send(file);
			} catch (error) {
				console.error('some random error occured');
				reject(false);
			}
		});
	}
</script>

{#if showForm}
	<div class="container">
		<LeftsideDesktop />
		<section id="right">
			<div class="liner">
				<header>
					{#if showStep1}
						<Link url="/" label="Go back" icon="back" theme="back" />
					{:else}
						<Button label="Go back" icon="back" theme="back" on:click={prevStep} />
					{/if}
				</header>

				{#if showStep1}
					<Step1 {userData} on:input={onInput} />
				{/if}

				{#if showStep2}
					<Step2 {userData} {palletWidthError} {palletLengthError} on:input={onInput} />
				{/if}

				{#if showStep3}
					<Step3 {userData} on:input={onInput} />
				{/if}

				{#if showStep4}
					<Step4 {userData} {fullNameError} {emailError} on:input={onInput} />
				{/if}

				<footer>
					{#if showStep1}
						<Link url="/" label="Go back" icon="back" theme="back" />
						<Button label="Continue" theme="button primary green" on:click={onContinueStep1} />
					{/if}

					{#if showStep2}
						<Button label="Go back" icon="back" theme="back" on:click={prevStep} />
						<Button label="Continue" theme="button primary green" on:click={onContinueStep2} />
					{/if}

					{#if showStep3}
						<Button label="Go back" icon="back" theme="back" on:click={prevStep} />
						<Button label="Continue" theme="button primary green" on:click={onContinueStep3} />
					{/if}

					{#if showStep4}
						<Button label="Go back" icon="back" theme="back" on:click={prevStep} />
						<Button label="Submit" theme="button primary green" on:click={onSubmitStep4} />
					{/if}
				</footer>
			</div>
		</section>
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
	.container {
		display: flex;
		min-height: 100vh;
	}

	#right .liner {
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

	@media only screen and (min-width: 701px) {
		.liner {
			padding: 50px 90px;
		}

		#right {
			width: 65%;
		}

		#right .liner {
			padding: 50px 120px;
			max-width: 380px;
		}
	}
</style>
