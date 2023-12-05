<script>
	import Link from '$lib/components/Link.svelte';
	import selective from '$lib/images/selective-soldering.svg';
	import wave from '$lib/images/wave-soldering.svg';
	import Brocher from '$lib/documents/Interflux-ICSF2022v2.pdf';
</script>

<section id="what">
	<div class="liner padding">
		<div class="what-content">
			<h2>What is ICSF?</h2>
			<p>ICSF Select6 is our stand-alone jet fluxing machine, also known as a jet fluxer.</p>
			<p>
				Our innovative fluxer offers a high speed, high precision, real selective fluxing process.
				The machine is designed to optimize the amount of flux for each individual solder joint,
				maintaining the required cycle times, even for high volume wave soldering.
			</p>
			<p>ICSF Select6 is suitable for electronics manufacturers who do:</p>
			<div class="soldering-row">
				<div class="soldering-container">
					<img src={selective} alt="mail icon" />
					<p>selective soldering</p>
				</div>
				<div class="soldering-container">
					<img src={wave} alt="mail icon" />
					<p>wave soldering</p>
				</div>
			</div>
			<Link
				label="Download the specification of ICSF"
				url={Brocher}
				theme="button secondary blue download "
			/>
		</div>
	</div>
</section>

<style>
	#what {
		color: white;
		background: linear-gradient(#1f4e7d, #163759);
		display: flex;
		justify-content: center;
	}
	#what .liner {
		padding: 80px 40px;
		max-width: 400px;
		box-sizing: border-box;
	}
	#what h2 {
		font-family: 'Nunito Sans Bold', sans-serif;
		font-size: 35px;
		line-height: 100%;
		color: white;
		margin-bottom: 50px;
	}
	#what p + p {
		margin-top: 16px;
	}
	#what .soldering-row {
		margin-top: 50px;
		display: flex;
		gap: 50px;
	}

	@media only screen and (min-width: 701px) {
		#what {
			background: none;
			padding-top: 850px;
		}

		#what .liner {
			padding: 0px;
			width: 100%;
		}

		.soldering-row {
			width: 100%;
			max-width: 450px;
		}

		.soldering-row img {
			max-width: 100px;
		}

		.soldering-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
	}
</style>
