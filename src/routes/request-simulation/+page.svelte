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

	// The pattern for a full name is at least 2 characters and only letters.
	const fullNameRegex = /[A-Za-z]{2,}/;

	// The fullName is only valid if its value matches the fullNameRegex.
	$: fullNameIsValid = allData.fullName && fullNameRegex.test(allData.fullName) ? true : false;

	// The pattern for an email consists of any amount of characters, then an @ symbol,
	// then minimum 2 characters, then a dot, then minimum 2 characters.
	const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/;

	// The email is only valid if it matches the emailRegex.
	$: emailIsValid = emailRegex.test(allData.email);

	$: step1IsValid = true; // TODO

	$: palletWidthIsValid = allData.palletWidth ? true : false;
	$: palletLengthIsValid = allData.palletLength ? true : false;
	$: step2IsValid = palletWidthIsValid && palletLengthIsValid;

	$: cycleTimeIsValid = allData.cycleTime ? true : false;
	$: solderProcessIsValid = allData.solderProcess ? true : false;
	$: fluxProcessIsValid = allData.fluxProcess ? true : false;
	$: step3IsValid = cycleTimeIsValid && solderProcessIsValid && fluxProcessIsValid;

	// The step 4 form is only valid if both the fullName and email are valid.
	// Disable the submit button until this is valid.
	// Only allow submission once valid.
	$: step4IsValid = fullNameIsValid && emailIsValid;

	// The form can only be submitted if all steps are valid.
	$: readyForSubmission = step1IsValid && step2IsValid && step3IsValid && step4IsValid;

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

	function onInput(event: any) {
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

		if (!readyForSubmission) {
			console.warn('NOT SUBMITTING');
			console.warn('The form is not valid');
			return; // this prevents the rest of the logic from being executed
		}

		view = 'submitting';

		const file = allData.image;
		const uuid = self.crypto.randomUUID();

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

				<!-- TEMPORARY -->
				<div>
					<p>Step2 is valid: <mark>{step2IsValid}</mark></p>
					<p>Step3 is valid: <mark>{step3IsValid}</mark></p>
					<p>Full name is valid: <mark>{fullNameIsValid}</mark></p>
					<p>Email is valid: <mark>{emailIsValid}</mark></p>
					<p>Step 4 is valid: <mark>{step4IsValid}</mark></p>
					<p>Form is ready for submission: <mark>{readyForSubmission}</mark></p>
				</div>
				<!-- TEMPORARY -->
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
