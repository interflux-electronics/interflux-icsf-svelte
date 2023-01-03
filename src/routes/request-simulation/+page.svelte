<script>
	import Step1 from './Step1.svelte';
	import Step2 from './Step2.svelte';
	import Step3 from './Step3.svelte';
	import Step4 from './Step4.svelte';
	import Button from './Button.svelte';
	import Link from '../Link.svelte';
	import Success from './Success.svelte';
	import Fail from './Fail.svelte';

	let currentStep = 1;

	$: showStep1 = currentStep === 1; // true
	$: showStep2 = currentStep === 2; // false
	$: showStep3 = currentStep === 3; // false
	$: showStep4 = currentStep === 4; // false
	$: showSuccess = currentStep === 5;

	function nextStep() {
		console.log('next step!');
		currentStep = currentStep + 1;
	}

	function prevStep() {
		console.log('previous step!');
		currentStep = currentStep - 1;
	}
</script>

<div class="liner this guy?">
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
		<Step2 />
	{/if}

	{#if showStep3}
		<Step3 />
	{/if}

	{#if showStep4}
		<Step4 />
	{/if}

	<footer>
		{#if showStep1}
			<Link url="/" label="Go back" icon="back" theme="back" />
		{:else}
			<Button label="Go back" icon="back" theme="back" on:click={prevStep} />
		{/if}
		<Button label="Continue" theme="button primary green" on:click={nextStep} />
	</footer>

	{#if showSuccess}
		<Success />
	{:else}
		<Fail />
	{/if}
</div>

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
