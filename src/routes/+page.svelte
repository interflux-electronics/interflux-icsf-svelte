<script>
	import IF_logo from '$lib/images/blue-interflux-symbol-2IF logo.svg';
	import board_bg from '$lib/images/board-background.png';
	import machine from '$lib/images/machine.png';
	import arrow_down from '$lib/images/arrow-down.svg';
	import ICSF from '$lib/images/ICSF-select-6-white.svg';
	import flash from '$lib/images/flash-vector.svg';
	import mail from '$lib/images/mail.svg';
	import trolly from '$lib/images/trolly.svg';
	import selective from '$lib/images/selective-soldering.svg';
	import wave from '$lib/images/wave-soldering.svg';
	import closeshot from '$lib/images/close-shot.png';
	import Footer from './Footer.svelte';
</script>

<section id="hero">
	<div class="top-bg" style="background-image: url({board_bg})"></div>
	<div class="liner">
		<img src={IF_logo} alt="IF logo" />
		<img id="ICSF" src={ICSF} alt="ICSF Select6" />
		<img id="machine" src={machine} alt="ICSF machine" />
		<h1>World's most intelligent selective <strong>jet fluxer</strong>.</h1>
		<img id="arrow" src={arrow_down} alt="arrow" />
	</div> 
</section>

<section id="CTA">
	<div class="liner padding">
		<div class="request-button">
			<img id="flash" src={flash} alt="flash" />
			<p>request simulation</p>
		</div>
		<div class="text">
		<p>Send us a photo of your circuit board and we will send back to you a detailed report that can simulate how fast, how precise ICSF can jet flux your board for your project, for free! </p>
		</div>
		<div class="secondary-buttons">
			<a href="mailto:ask@interflux.com.sg" class="button secondary">
				<img  src={mail} alt="mail icon" />
				<p>ask question</p>
			</a>
			<a href="mailto:order@interflux.com.sg" class="button secondary">
				<img  src={trolly} alt="trolly icon" />
				<p>place order</p>
			</a>
		</div>
	</div>
</section>

<section id="what">
	<div class="liner padding">
		<div class="content">
			<h2>What is ICSF?</h2>
			<p>ICSF Select6 is our stand-alone jet fluxing machine, also known as a jet fluxer.</p>
			<p>Our innovative fluxer offers a high speed, high precision, real selective fluxing process. The machine is designed to optimize the amount of flux for each individual solder joint, maintaining the required cycle times, even for high volume wave soldering.</p>
			<p>ICSF Select6 is suitable for electronics manfuacturs who do:</p>
			<div class="soldering-row">
				<div class="soldering-container">
					<img  src={selective} alt="mail icon" />
					<p>selective soldering</p>
				</div>
				<div class="soldering-container">
					<img  src={wave} alt="mail icon" />
					<p>wave soldering</p>
				</div>
			</div>
		</div>
	</div>
</section>

<img  src={closeshot} alt="closeshot" />

<Footer/>


<style>
	@keyframes right-to-left-background {
		from {
			background-position: 0% center;
		}
		to {
			background-position: 10000% center;
		}
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		align-items:center;
	}
	#hero {
    	background: radial-gradient(#23578C, #1B436C) ;
	}
	#hero .liner {
		display:flex;
		flex-direction: column;
		align-items: center;
		max-width: 360px;
		position: relative;
		box-sizing: border-box;
	}
	#hero .top-bg {
		background-color:rgb(26 49 74);
		position: absolute;
		top: 0;
		left: 0;
		height: 50%;
		width: 100%;
		background-size: auto 100%;
		background-position: 0% center;
		animation: right-to-left-background 200s linear infinite;
		border-bottom: 1px solid white;
   	}
    #hero img#ICSF {
		padding-top:40px;
	}
	#hero img#machine {
		position: relative;
    	top: -56px;
		width:100%;

	}
	#hero img#arrow {
		position: absolute;
		bottom:70px;
	}
	#hero .bottom-bg {
		background-color: rgb(24 60 97);
		position: absolute;
		bottom: 0;
		left: 0;
		height: 50%;
		width: 100%;
		border-top:2px solid white;
	}
	#hero h1 {
		font-family: 'Nunito Sans Regular', sans-serif;
		color:white;
		font-size: 22px;
		line-height:180%;
		position: relative;
		top: -122px;
		max-width: 300px;
    	text-align: center;
		font-weight: normal;
		margin: 3vw 0;
	}
	#hero h1 strong {
		font-family:'Nunito Sans ExtraBold', sans-serif;
	}
    #CTA {
    	display: flex;
    	flex-direction: column;
    	gap: 40px;
		align-items: center;
	}
	#CTA .liner {
		display:flex;
		flex-direction:column;
		align-items:center;
		position:relative;
		box-sizing: border-box;
		padding: 25vw 6vw;
		max-width: 360px;
		align-items:flex-start;
	}
	#CTA .text {
		width:100%;
	}
    #CTA .request-button {
		background-color:rgba(57, 132, 81, 1);
		display: flex;
    	border: solid 2px;
    	border-color: rgba(46, 107, 65, 1);
    	border-radius: 3px;
    	justify-content: center;
    	gap: 10px;
		width: 100%;
    	height: 46px;
    	align-items: center;
		margin: 25px 0px 15px 0px;

    }
	#CTA .request-button p{
		color: white;
		font-family: 'Nunito Sans SemiBold', sans-serif;
		font-size: 20px;
	}
	#CTA .secondary-buttons {
		display:flex;
		gap: 15px;
		width:100%;
		margin: 20px 0px;
	}
	#CTA .secondary-buttons p {
		color: rgba(57, 132, 81, 1);
		margin:5px ;
		font-size: 15px;
		white-space:nowrap;
	}
	#CTA .secondary.button {
		display: flex;
   		gap: 4px;
   		justify-content: center;
   		border: solid 1px;
    	border-radius: 3px;
    	border-color: rgba(57, 132, 81, 1);
		width:100%;
	}
	#what {
		color:white;
		background: linear-gradient(#1F4E7D, #163759);
	}
	#what .liner {
		padding: 25vw 6vw;
		max-width: 360px;
	}
	#what h2 {
		font-family: 'Nunito Sans Bold', sans-serif;
		font-size: 35px;
		line-height: 100%;
		color: white;
		margin-bottom: 50px;
	}
	#what p+p {
		margin-top: 16px;
	}
	#what .soldering-row {
		margin-top: 50px;
		display:flex;
		gap: 50px;
	}
	
</style>
