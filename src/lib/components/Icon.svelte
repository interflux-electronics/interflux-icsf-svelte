<script lang="ts">
	import backIcon from '$lib/images/back-icon.svg';
	import boltIcon from '$lib/images/bolt-icon.svg';
	// import emailIcon from '$lib/images/email-icon.svg';
	// import shopIcon from '$lib/images/shop-icon.svg';

	export let icon: string = '';

	let showBackIcon = icon === 'back';
	let showEmailIcon = icon === 'email';
	let showBoltIcon = icon === 'bolt';
	let showShopIcon = icon === 'shop';
</script>

{#if icon}
	{#if showBackIcon}
		<img src={backIcon} alt="" aria-hidden="true" width="20" height="20" />
	{/if}

	{#if showBoltIcon}
		<img src={boltIcon} alt="" aria-hidden="true" width="20" height="20" />
	{/if}

	{#if showEmailIcon}
		<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
				fill="red"
			/>
		</svg>
	{/if}

	{#if showShopIcon}
		<svg width="21" height="20" viewBox="0 0 21 20" fill="none">
			<path
				d="M6.5 16C5.4 16 4.51 16.9 4.51 18C4.51 19.1 5.4 20 6.5 20C7.6 20 8.5 19.1 8.5 18C8.5 16.9 7.6 16 6.5 16ZM0.5 0V2H2.5L6.1 9.59L4.75 12.04C4.59 12.32 4.5 12.65 4.5 13C4.5 14.1 5.4 15 6.5 15H18.5V13H6.92C6.78 13 6.67 12.89 6.67 12.75L6.7 12.63L7.6 11H15.05C15.8 11 16.46 10.59 16.8 9.97L20.38 3.48C20.46 3.34 20.5 3.17 20.5 3C20.5 2.45 20.05 2 19.5 2H4.71L3.77 0H0.5ZM16.5 16C15.4 16 14.51 16.9 14.51 18C14.51 19.1 15.4 20 16.5 20C17.6 20 18.5 19.1 18.5 18C18.5 16.9 17.6 16 16.5 16Z"
				fill="red"
			/>
		</svg>
	{/if}
{/if}

<style>
</style>
