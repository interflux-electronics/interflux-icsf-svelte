<script lang="ts">
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import InputText from '$lib/components/InputText.svelte';
	import { createEventDispatcher } from 'svelte';

	export let userData: any;
	export let fullNameError: string | null = null;
	export let emailError: string | null = null;

	const dispatch = createEventDispatcher();

	function onInput(event: any) {
		const key = event.detail.key;
		const value = event.detail.value;
		dispatch('input', { key, value });
	}
</script>

<ProgressBar total={4} checked={3} />

<h2>Contact detail</h2>

<div class="fields">
	<InputText
		label="Full name"
		key="fullName"
		value={userData.fullName}
		errorMessage={fullNameError}
		on:input={onInput}
	/>

	<InputText
		label="Email"
		type="email"
		key="email"
		value={userData.email}
		errorMessage={emailError}
		on:input={onInput}
	/>

	<InputText
		label="Company name"
		optional={true}
		key="companyName"
		value={userData.companyName}
		on:input={onInput}
	/>
</div>
