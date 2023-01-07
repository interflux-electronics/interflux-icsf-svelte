<script> 
    import people from '$lib/images/people.png';
	import whitelogo from '$lib/images/interflux-singapore-logo-white.svg';
	import cross from '$lib/images/icon-cross-white.svg';
	import minus from '$lib/images/icon-minus-white.svg';
</script>

<footer>
	<div class="top">
		<img id="people" src={people} alt="people" />
		<div class="text">
			<h2 id="contact">Contact</h2>
		</div>
	</div>

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

	<img id="logo" src={whitelogo} alt="Interflux Singapore logo" />
</footer>

<style>
    footer {
		background: linear-gradient(#1F4E7D, #163759) ;
	}
	footer .top {
		position: relative;
	}
	footer .top img {
		width: 100vw;
		height: auto;
		position: relative;
		z-index: 0;
	}
	footer .top .text {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	footer .top h2 {
		font-size: 35px;
		line-height: 100%;
		color: white;
		width: 100%;
		padding: 0 6vw;
		padding: 0 6vw;
    	max-width: 360px;
	}
	footer .accordion {
		padding: 10vw 6vw 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	footer details {
		display:flex;
		border-bottom: 1px solid RGBA(255,255,255,0.5);
		width: 100%;
		max-width: 360px;
	}
	footer details[open] img.cross {
		display: none;
	}
	footer details[open] img.minus {
		display: block;
	}
	footer img.minus {
		display: none;
	}
	footer summary {
		list-style-type: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 46px;
	}
	footer .content {
		padding: 0 0 12px;
	}
	footer details h3 {
		font-family: 'Nunito Sans Bold', sans-serif;
		font-size: 18px;
		line-height: 100%;
		color: white;
	}
	footer details p {
		font-family: 'Nunito Sans Regular', sans-serif;
		font-size: 16px;
		line-height: 180%;
		color: white;
	}
	footer #logo {
		width: 100%;
		height: auto;
		margin: 20vw auto;
		max-width: 360px;
	}

    </style>
