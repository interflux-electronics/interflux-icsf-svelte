<script>
	import cross from '$lib/images/icon-cross-white.svg';
	import minus from '$lib/images/icon-minus-white.svg';
</script>

<div class="accordion">
	<details>
		<summary>
			<h3>Address</h3>
			<img src={cross} class="cross" alt="" aria-hidden="true" />
			<img src={minus} class="minus" alt="" aria-hidden="true" />
		</summary>

		<div class="content">
			<p>2 Kallang Pudding Road #04-12, Mactech Building Singapore 349307</p>
		</div>
	</details>

	<details>
		<summary>
			<h3>Email</h3>
			<img src={cross} class="cross" alt="" aria-hidden="true" />
			<img src={minus} class="minus" alt="" aria-hidden="true" />
		</summary>

		<div class="content">
			<p>ask@interflux.sg</p>
		</div>
	</details>

	<details>
		<summary>
			<h3>Phone</h3>
			<img src={cross} class="cross" alt="" aria-hidden="true" />
			<img src={minus} class="minus" alt="" aria-hidden="true" />
		</summary>

		<div class="content">
			<p>+65 68487818</p>
		</div>
	</details>
</div>

<style>
	.accordion {
		padding: 10vw 6vw 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	details {
		display: flex;
		border-bottom: 1px solid RGBA(255, 255, 255, 0.5);
		width: 100%;
		max-width: 360px;
	}
	details[open] img.cross {
		display: none;
	}
	details[open] img.minus {
		display: block;
	}
	img.minus {
		display: none;
	}
	summary {
		list-style-type: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 46px;
	}
	.content {
		padding: 0 0 12px;
	}
	details h3 {
		font-family: 'Nunito Sans Bold', sans-serif;
		font-size: 18px;
		line-height: 100%;
		color: white;
	}
	details p {
		font-family: 'Nunito Sans Regular', sans-serif;
		font-size: 16px;
		line-height: 180%;
		color: white;
	}

	@media only screen and (min-width: 501px) {
		details h3,
		p {
			color: var(--grey-7);
			border-bottom: 1px solid var(--grey-7);
		}
	}
</style>
