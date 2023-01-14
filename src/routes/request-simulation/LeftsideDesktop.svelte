<script>
	import ICSF from '$lib/images/ICSF-select-6-white.svg';
	import IF_logo from '$lib/images/blue-interflux-symbol-2IF logo.svg';
	import machine_front from '$lib/images/machine-front-face.png';
	import board_background_request from '$lib/images/board-background-request-page.png';
</script>

<section id="left">
	<div class="blue-bg" style="background-image: url({board_background_request})" />
	<div class="left-content">
		<img src={IF_logo} width="80px" alt="IF logo" />
		<img id="ICSF" src={ICSF} width="200px" alt="ICSF Select6" />
		<h1>
			World's most intelligent selective <strong>jet fluxer</strong>.
		</h1>
		<img id="machine-front" src={machine_front} alt="machine front face" width="300px" />
	</div>
</section>
;

<style>
	#left {
		background-color: var(--blue-4);
		width: 35%;
		position: relative;
	}

	@media only screen and (max-width: 700px) {
		#left {
			display: none;
		}
	}

	#left .blue-bg {
		width: 100%;
		height: 100%;
		position: absolute;
		right: 0px;
		top: 0px;
		z-index: 0;
	}

	#left h1 {
		font-family: 'Nunito Sans Regular', sans-serif;
		color: white;
		font-size: 22px;
		line-height: 180%;
		position: relative;
		max-width: 300px;
		text-align: center;
		font-weight: normal;
	}
	#left h1 strong {
		font-family: 'Nunito Sans ExtraBold', sans-serif;
	}

	#left .left-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 400px;
		padding: 30px;
		gap: 60px;
	}

	#left #machine-front {
		width: 300px;
		height: auto;
		margin-top: 20px;
	}

	#left #machine-front {
		width: 300px;
		height: auto;
	}
</style>
