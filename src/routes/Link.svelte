<script>
	import backIcon from '$lib/images/back-icon.svg';
	import emailIcon from '$lib/images/email-icon.svg';
	import boltIcon from '$lib/images/bolt-icon.svg';
	import shopIcon from '$lib/images/shop-icon.svg';

	export let url;
	export let theme;
	export let label;
	export let icon;

	let showBackIcon = icon === 'back';
	let showEmailIcon = icon === 'email';
	let showBoltIcon = icon === 'bolt';
	let showShopIcon = icon === 'shop';
</script>

<a href={url} class={theme}>
	{#if showBackIcon}
		<img src={backIcon} alt="" aria-hidden="true" width="20" height="20" />
	{/if}
	{#if showEmailIcon}
		<img src={emailIcon} alt="" aria-hidden="true" width="20" height="20" />
	{/if}
	{#if showBoltIcon}
		<img src={boltIcon} alt="" aria-hidden="true" width="20" height="20" />
	{/if}
	{#if showShopIcon}
		<img src={shopIcon} alt="" aria-hidden="true" width="20" height="20" />
	{/if}
	<span>{label}</span>
</a>

<style>
	/* .back {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	.back img {
		width: 20px;
		height: auto;
	} */

	.button {
		background-color: var(--green-2);
		display: flex;
		border: solid 2px;
		border-color: var(--green-3);
		border-radius: 3px;
		justify-content: center;
		gap: 10px;
		height: 46px;
		align-items: center;
		color: white;
		width: 150px;
		font-family: 'Nunito Sans Semibold', sans-serif;
	}

	.button.back {
		display: flex;
		gap: 10px;
	}

	.button.primary.home {
		line-height: 180px;
		margin: 0px;
	}

	.button.secondary.home {
		margin: 0px;
		height: auto;
		padding: 10px;
	}

	.button.primary.white {
		background-color: white;
		color: var(--green-3);
	}
	.button.secondary.white {
		border-color: white;
		background-color: transparent;
	}

	.button.primary.boarder.blue {
		background-color: white;
		color: var(--blue-3);
		border-color: var(--blue-4);
	}
</style>
