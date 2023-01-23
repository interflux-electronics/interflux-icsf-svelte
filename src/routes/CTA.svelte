<script>
	import Link from '$lib/components/Link.svelte';
</script>

<section id="CTA">
	<div class="liner padding">
		<Link
			url="/request-simulation"
			label="Request Simulation"
			icon="bolt"
			theme="button primary home"
		/>
		<div class="text">
			<p>
				Send us a photo of your circuit board and we will send back to you a detailed report that
				can simulate how fast, how precise ICSF can jet flux your board for your project, for free!
			</p>
		</div>
		<div class="secondary-buttons">
			<Link
				url="mailto:ask@interflux.com.sg"
				label="ask question"
				icon="email"
				theme="button secondary home"
			/>
			<Link
				url="mailto:order@interflux.com.sg"
				label="place order"
				icon="shop"
				theme="button secondary home"
			/>
		</div>
	</div>
</section>

<style>
	#CTA {
		display: flex;
		flex-direction: column;
		gap: 40px;
		align-items: center;
		background-color: white;
	}
	#CTA .liner {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		box-sizing: border-box;
		padding: 80px 40px;
		max-width: 400px;
		gap: 30px;
		width: 100%;
	}

	#CTA .secondary-buttons {
		display: flex;
		gap: 15px;
		width: 100%;
		margin: 0px;
	}

	#CTA .text {
		width: 100%;
	}

	@media only screen and (min-width: 701px) {
		#CTA {
			margin-top: 10px;
			width: 100%;
		}

		#CTA .liner {
			padding: 60px 35px;
			background-color: white;
		}
	}
</style>
