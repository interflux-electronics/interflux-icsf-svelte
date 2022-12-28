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
	import people from '$lib/images/people.png';
	import whitelogo from '$lib/images/interflux-singapore-logo-white.svg';
	import cross from '$lib/images/cross.svg';





</script>

<section id="hero">
	<div class="top-bg" style="background-image: url({board_bg})">
	</div>
	<div class="liner">
			<img src={IF_logo} alt="IF logo" />
			<img id="ICSF" src={ICSF} alt="ICSF Select6" />
			<img id="machine" src={machine} alt="ICSF machine" />
			<h2>
			World’s most intelligent selective <strong>jet fluxer</strong>.
			</h2>
			<img id="arrow" src={arrow_down} alt="arrow" />
	</div> 
	

</section>

<section id="CTA">
	<div class="liner">
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
	<div class="liner">
		<div class="content">
		<h1>
		What is ICSF?</h1>
		<p>ICSF Select6 is our stand-alone jet fluxing machine, also known as a jet fluxer.</p>
		<p>Our innovative fluxer offers a high speed, high precision, real selective fluxing process. The machine is designed to optimize the amount of flux for each individual solder joint, maintaining the required cycle times, even for high volume wave soldering.</p>
		<p>ICSF Select6 is suitable for electronics manfuacturs who do: </p>
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

<section id="footer">
	
	<img  src={people} alt="people" />
	<div class="liner">
		<h1>
		Contact
		</h1>
		<div class="expandable-bar">
			<h3>Address</h3>
			<img  src={cross} alt="cross" />
		</div>
		<div class="expandable-bar">
			<h3>Email</h3>
			<img  src={cross} alt="cross" />
		</div>
		<div class="expandable-bar">
			<h3>Phone</h3>
			<img  src={cross} alt="cross" />
		</div>
		<img id="white-logo"  src={whitelogo} alt="interflux singapore logo" />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		align-items:center;
	}

	section#hero {
    	background: radial-gradient(#23578C, #1B436C) ;
		}

	@keyframes right-to-left-background {
		from {
			background-position: 0% center;
		}
		to {
			background-position: 10000% center;
		}
	}

   .top-bg {
	/* <img  src={board_bg} alt="background-image" /> */
	/* background-image:url("${board_bg}"); */
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


   .liner {
	display:flex;
	flex-direction:column;
	align-items:center;
	max-width:400px;
	position:relative;
    padding: 6vh;
    box-sizing: border-box;
	}


    img#ICSF {
		padding-top:40px;
	}

	img#machine {
		position: relative;
    	top: -56px;
		width:100%;

	}

	img#arrow {
		position: absolute;
		bottom:70px;
	}

	.bottom-bg {
	background-color: rgb(24 60 97);
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50%;
    width: 100%;
	border-top:2px solid white;
	}

	h2 {
		font-family: 'Inter', sans-serif;
		color:white;
		font-size: 22;
		position: relative;
		top: -122px;
		max-width: 300px;
    	text-align: center;
	}

    #CTA {
    	display: flex;
    	flex-direction: column;
    	gap: 40px;
		align-items: center;
	}

	#CTA .text {
		max-width: 319px;
	}

    .request-button {
		background-color:rgba(57, 132, 81, 1);
		display: flex;
    	border: solid 2px;
    	border-color: rgba(46, 107, 65, 1);
    	border-radius: 3px;
    	justify-content: center;
    	gap: 10px;
		width: 315px;
    	height: 50px;
    	align-items: center;
    }

	.request-button p{
		color: white;
	}

	.secondary-buttons {
		display:flex;
		gap: 15px;
		width:100%;
	}

	.secondary-buttons p {
		color: rgba(57, 132, 81, 1);
		margin:5px ;
		font-size: 15px;
		white-space:nowrap;
	}

	.secondary.button {
		display: flex;
   		gap: 4px;
   		justify-content: center;
   		border: solid 1px;
    	border-radius: 3px;
    	border-color: rgba(57, 132, 81, 1);
		width:100%;


	}

	#what {
		    background-color: rgba(35, 87, 140, 1);
			color: white;
	}

	.soldering-row {
		display:flex;
		flex-direction: row;
		gap: 50px;
		padding-top:20px;
		
		
	}

	#footer {
		color:white;	
		background-color: rgba(35, 87, 140, 1);
	}

	.expandable-bar {
		display:flex;
		justify-content: space-between;
		width: 100%;
		flex-direction: row;
		align-items: center;
		border-bottom: 2px solid;
	}

	#white-logo {
		padding:115px 0px;
	}



</style>
