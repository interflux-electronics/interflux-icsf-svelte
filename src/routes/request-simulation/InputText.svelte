<script lang="ts">
	export let type;
	export let label;
	export let description;
	export let optional;

	let id = 'input-' + label.toLowerCase().replace(/\s/g, '-');
</script>

<div class="input">
	<div class="title">
		<label for={id}>{label} </label>
		{#if optional}
			<p>(optional)</p>
		{/if}
	</div>
	{#if description}
		<p>{description}</p>
	{/if}
	<input {type} {id} />
</div>

<style>
	.input {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin: 20px 0px;
	}

	.input p {
		color: var(--grey-5);
	}
	.title {
		display: flex;
		align-items: center;
		gap: 5px;
	}
	.title label {
		font-family: 'Nunito Sans Bold', sans-serif;
		font-size: 16px;
	}
	.title p {
		font-family: 'Nunito Sans Regular', sans-serif;
		font-size: 16px;
		color: var(--grey-7);
	}

	input {
		width: 100%;
		display: flex;
		line-height: 120%;
		padding: 2vw -2vw;
		padding: 9px 12px;
		box-sizing: border-box;
		border-radius: 3px;
		font-size: 16px;
		color: var(--grey-7);
		border-style: none;
		border: 1px solid var(--grey-2);
		box-shadow: none;
		outline: 0;
	}

	input:hover {
		border-color: var(--green-1);
	}

	input:focus {
		border-color: 2px solid var(--green-2);
		color: var(--green-3);
		outline: var(--green-2);
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	}
</style>
