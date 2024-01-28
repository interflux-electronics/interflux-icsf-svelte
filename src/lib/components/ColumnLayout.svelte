<script>
	import ICSF from '$lib/images/ICSF-select-6-white.svg';
	import IF_logo from '$lib/images/blue-interflux-symbol-2IF logo.svg';
	import machine_front from '$lib/images/machine-front-face.png';
	import board_background_request from '$lib/images/board-background-request-page.png';
</script>

<div class="container">
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

	<section id="right">
		<slot />
	</section>
</div>

<style lang="scss">
	.container {
		display: flex;
		min-height: 100vh;
		flex-direction: row;
		@media (max-width: 800px) {
			flex-direction: column-reverse;
		}
	}
	#left {
		background: radial-gradient(#23578c, #163759);
		width: 35vw;
		min-width: 390px;
		position: relative;
		display: flex;
		justify-content: center;
		.blue-bg {
			width: 100%;
			height: 100%;
			position: absolute;
			right: 0px;
			top: 0px;
			z-index: 0;
			background-position: 50% 0%;
			background-repeat: no-repeat;
			background-size: cover;
		}
		.left-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			max-width: 400px;
			padding: 30px;
			gap: 60px;
		}
		h1 {
			font-family: 'Nunito Sans Regular', sans-serif;
			color: white;
			font-size: 22px;
			line-height: 180%;
			position: relative;
			max-width: 300px;
			text-align: center;
			font-weight: normal;
			strong {
				font-family: 'Nunito Sans ExtraBold', sans-serif;
			}
		}
		#machine-front {
			width: 300px;
			height: auto;
			margin-top: 20px;
		}
		#machine-front {
			width: 300px;
			height: auto;
		}
	}
	#right {
		@media (min-width: 801px) {
			width: 65%;
		}
		:global(.liner) {
			display: flex;
			flex-direction: column;
			gap: 30px;
			max-width: 390px;
			padding: 50px 70px;
			@media (max-width: 950px) {
				padding: 50px;
			}
			@media (max-width: 800px) {
				padding: 30px;
			}
		}
		:global(header) {
			display: flex;
		}
		:global(footer) {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
		}
	}
</style>
