$(document).ready(function() {

	var countDownDate = new Date("Sep 24, 2023 19:00:00").getTime();

	var x = setInterval(function() {

		var now = new Date().getTime();

		var distance = countDownDate - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("demo").innerHTML =
			((days < 10) ? "0" : "") + days + ":" + 
			((hours < 10) ? "0" : "") + hours + ":" + 
			((minutes < 10) ? "0" : "") + minutes + ":" + 
			((seconds < 10) ? "0" : "") + seconds;

		if (distance < 0) {
			clearInterval(x);
    			document.getElementById("countdown").innerHTML = "00:00:00:00";
	  	}
	}, 1000);
});