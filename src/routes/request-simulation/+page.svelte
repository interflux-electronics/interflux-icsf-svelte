<script>
	import Step1 from './Step1.svelte';
	import Step2 from './Step2.svelte';
	import Step3 from './Step3.svelte';
	import Step4 from './Step4.svelte';
	import Button from './Button.svelte';
	import Link from '../Link.svelte';
	import Success from './Success.svelte';
	import Fail from './Fail.svelte';
	//import { fail } from '@sveltejs/kit';

	let currentView = 'form';

	$: showForm = currentView === 'form';
	$: showFail = currentView === 'fail';
	$: showSuccess = currentView === 'success';

	let currentStep = 1;

	$: showStep1 = currentStep === 1; // true
	$: showStep2 = currentStep === 2; // false
	$: showStep3 = currentStep === 3; // false
	$: showStep4 = currentStep === 4; // false

	// All the data which was entered by the user.
	$: allData = {};

	let submitting = false;

	function onInput(event) {
		const { key, value } = event.detail;
		//console.log('Page onInput()', key, value);
		allData[key] = value;
		console.log(allData);
	}

	function onSelect(event) {
		const { key, value } = event.detail;
		//console.log('Page onSelect()', key, value);
		allData[key] = value;
		console.log(allData);
	}

	function nextStep() {
		console.log('next step!');
		currentStep = currentStep + 1;
		scrollToTop();
	}

	function prevStep() {
		console.log('previous step!');
		currentStep = currentStep - 1;
		scrollToTop();
	}

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	async function onClickSubmit() {
		console.log('onClickSubmit()');
		console.log(allData);
		if (submitting) {
			return;
		}
		submitting = true;

		// In production, all the domain names below are redirected to the top one.
		// jet-fluxer.com
		// jetfluxer.com
		// www.jet-fluxer.com
		// www.jetfluxer.com
		// That allows us to deduct whether we are in production or development by
		// looking at the URL alone.
		const isProduction = location.hostname === 'jet-fluxer.com';
		const host = isProduction ? 'https://api.interflux.com' : 'http://localhost:3000';
		const url = `${host}/v1/public/simulation-requests`;

		console.log('---');
		console.log({ isProduction, host, url });
		console.log('---');

		try {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify({
					data: {
						attributes: allData
					}
				}),
				headers: new Headers({
					'Content-Type': 'application/vnd.api+json',
					Accept: 'application/vnd.api+json'
				})
			});
			const payload = await response.json();
			if (payload.data.id) {
				currentView = 'success';
			} else {
				currentView = 'fail';
			}
		} catch (error) {
			console.error(error);
			currentView = 'fail';
		}
	}
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
			<Step1 />
		{/if}

		{#if showStep2}
			<Step2 on:input={onInput} />
		{/if}

		{#if showStep3}
			<Step3 on:input={onInput} on:select={onSelect} />
		{/if}

		{#if showStep4}
			<Step4 on:input={onInput} />
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
		padding: 50px;
		gap: 40px;
	}

	/* .back {
		display: flex;
		gap: 10px;
	} */

	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	/* footer .continue {
		background-color: rgba(57, 132, 81, 1);
		display: flex;
		border: solid 2px;
		border-color: rgba(46, 107, 65, 1);
		border-radius: 3px;
		justify-content: center;
		gap: 10px;
		height: 46px;
		align-items: center;
		color: white;
		width: 150px;
	} */
</style>
