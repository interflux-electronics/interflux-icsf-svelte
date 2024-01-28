<script lang="ts">
  import { dev } from '$app/environment';
  import { tick } from 'svelte';
  import Button from '$lib/components/Button.svelte';
  import Step1 from './Step1.svelte';
  import Step2 from './Step2.svelte';
  import Step3 from './Step3.svelte';
  import Step4 from './Step4.svelte';
  import Sending from './Sending.svelte';
  import Success from './Success.svelte';
  import Fail from './Fail.svelte';
  import ColumnLayout from '$lib/components/ColumnLayout.svelte';

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
  $: step3IsValid = !cycleTimeError && !fluxProcessError && !solderProcessError; // TODO: refector
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

  $: cycleTimeError = showErrorsStep3
    ? !userData.cycleTime
      ? 'Please enter a value'
      : null
    : null;

  $: fluxProcessError = showErrorsStep3
    ? !userData.fluxProcess
      ? 'Please select an option '
      : null
    : null;

  $: solderProcessError = showErrorsStep3
    ? !userData.solderProcess
      ? 'Please select an option'
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

  const apiHost = dev ? 'http://localhost:3000' : 'https://rails.api.interflux.com';
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

    if (!step4IsValid) {
      console.warn('step 4 is not valid');
      return;
    }

    if (!formIsValid) {
      console.warn('form is not valid');
      return;
    }

    view = 'submitting';

    console.log('submitting ...');
    console.log({ userData });

    fetch(`${apiHost}/v1/public/simulation-requests`, {
      method: 'POST',
      headers: new Headers(apiHeaders),
      body: JSON.stringify({
        data: {
          attributes: userData
        }
      })
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.data?.id) {
          console.log('submit success');
          view = 'success';
        } else {
          console.error('submit failed');
          failResponse = JSON.stringify(json);
          view = 'fail';
        }
      })
      .catch((response) => {
        console.error('submit failed');
        console.error(response);
        failResponse = JSON.stringify(response);
        view = 'fail';
      });
  }

  // When the submit fails for any reason, show the response unfiltered to the user.
  let failResponse: string | null = null;
</script>

<div class="page">
  {#if showForm}
    <ColumnLayout>
      <div class="liner">
        <header>
          {#if showStep1}
            <Button url="/" label="Go back" icon="back" theme="medium grey-text" />
          {:else}
            <Button label="Go back" icon="back" theme="medium grey-text" on:click={prevStep} />
          {/if}
        </header>

        {#if showStep1}
          <Step1 {userData} on:input={onInput} />
        {/if}

        {#if showStep2}
          <Step2 {userData} {palletWidthError} {palletLengthError} on:input={onInput} />
        {/if}

        {#if showStep3}
          <Step3
            {userData}
            {cycleTimeError}
            {solderProcessError}
            {fluxProcessError}
            on:input={onInput}
          />
        {/if}

        {#if showStep4}
          <Step4 {userData} {fullNameError} {emailError} on:input={onInput} />
        {/if}

        <footer>
          {#if showStep1}
            <Button url="/" label="Go back" theme="medium grey-text" icon="back" />
            <Button label="Continue" theme="medium green-background" on:click={onContinueStep1} />
          {/if}

          {#if showStep2}
            <Button label="Go back" theme="medium grey-text" icon="back" on:click={prevStep} />
            <Button label="Continue" theme="medium green-background" on:click={onContinueStep2} />
          {/if}

          {#if showStep3}
            <Button label="Go back" theme="medium grey-text" icon="back" on:click={prevStep} />
            <Button label="Continue" theme="medium green-background" on:click={onContinueStep3} />
          {/if}

          {#if showStep4}
            <Button label="Go back" theme="medium grey-text" icon="back" on:click={prevStep} />
            <Button label="Submit" theme="medium green-background" on:click={onSubmitStep4} />
          {/if}
        </footer>
      </div>
    </ColumnLayout>
  {/if}

  {#if showSending}
    <Sending />
  {/if}

  {#if showSuccess}
    <Success />
  {/if}

  {#if showFail}
    <Fail {failResponse} />
  {/if}
</div>

<style lang="scss">
  .page :global(h2) {
    font-family: 'Nunito Sans Light', sans-serif;
    font-size: 24px;
    line-height: 150%;
    width: 100%;
  }
  .page :global(.fields) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .page :global(.progress-bar) {
    margin: 10px 0;
  }
</style>
