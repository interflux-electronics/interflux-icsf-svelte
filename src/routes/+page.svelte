<script>
	import IF_logo from '$lib/images/blue-interflux-symbol-2IF logo.svg';
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




</script>

<section id="hero">
	<div class="top-bg">
	</div>
    <div class="content">
		<img src={IF_logo} alt="IF logo" />
		<img id="ICSF" src={ICSF} alt="ICSF Select6" />
		<img id="machine" src={machine} alt="ICSF machine" />
		<h2>
		World’s most intelligent selective <strong>jet fluxer</strong>.
	    </h2>
		<img src={arrow_down} alt="arrow" />
		
	</div>
	<div class="bottom-bg">
	</div>

</section>

<section id="CTA">
	<div class="request-button">
		<img id="flash" src={flash} alt="flash" />
	<p>request simulation</p>
	</div>
	<div class="text">
	<p>Send us a photo of your circuit board and we will send back to you a detailed report that can simulate how fast, how precise ICSF can jet flux your board for your project, for free! </p>
	</div>
	<div class="secondary-button-container">
	<div class="secondary-button">
		<img  src={mail} alt="mail icon" />
		<p>ask question</p></div>
	<div class="secondary-button">
		<img  src={trolly} alt="trolly icon" />
		<p>place order</p></div>
	</div>


</section>

<section id="what">
<h1>
What is ICSF?</h1>
<p>ICSF Select6 is our stand-alone jet fluxing machine, also known as a jet fluxer.</p>
<p>Our innovative fluxer offers a high speed, high precision, real selective fluxing process. The machine is designed to optimize the amount of flux for each individual solder joint, maintaining the required cycle times, even for high volume wave soldering.</p>
<p>ICSF Select6 is suitable for electronics manfuacturs who do: </p>
<div class="soldering-container">
<img  src={selective} alt="mail icon" />
<p>selective soldering</p>
<img  src={wave} alt="mail icon" />
<p>wave soldering</p>
</div>


</section>
<img  src={closeshot} alt="closeshot" />


<section id="footer">
	<h1>
	Contact
	</h1>
	<div class="expandable-bar">
 		<h3>Address</h3>
	<div>
	<div class="expandable-bar">
		<h3>Email</h3>
	<div>
	<div class="expandable-bar">
		<h3>Phone</h3>
	<div>

	<img  src={whitelogo} alt="interflux singapore logo" />
</section>

<style>
	section#hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

   .top-bg {
	background-color:rgba(26, 49, 74, 1);
   }

   .content {
	display:flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(26, 49, 74, 1);
	}

    img#ICSF {
		padding-top:40px;
	}

	img#machine {
		position: relative;
    top: -56px;
	}

	.bottom-bg {
	background-color: rgba(22, 55, 89, 1);
	}

	h2 {
		font-family: 'Inter', sans-serif;
		color:white;
		font-size: 22;
		position: relative;
		top: -122px;
	}

    #CTA {
		margin:50px 50px;
	}
    .request-button {
		background-color:rgba(57, 132, 81, 1);
		display: flex;
    border: solid;
    border-color: rgba(46, 107, 65, 1);
    border-radius: 3px;
    justify-content: center;
    gap: 10px;
}

	.request-button p{
		color: white;
	}

	.secondary-button-container {
		display:flex;
		gap: 15px;
	}

	.secondary-button-container p {
		color: rgba(57, 132, 81, 1);
		margin:5px ;
	}

	.secondary-button {
		display: flex;
   		gap: 10px;
   		justify-content: center;
   		border: solid;
    	border-radius: 3px;
    	border-color: rgba(57, 132, 81, 1);
		padding: 0px 25px;

	}

	#what {
		    background-color: rgba(35, 87, 140, 1);
			text-color: white;

	}

	#footer {
		color:white;	
		padding:20px 20px;
		background-color: rgba(35, 87, 140, 1);
	}


</style>
