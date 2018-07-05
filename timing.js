(function(){

	BREAKLENGTH = 5;
	ACTIVELENGTH = 25;

	active = true;
	var body = document.getElementsByClassName("body")[0];
	var tally = document.getElementById("tally");
	var timer = document.getElementById("timer");
	runTimer(ACTIVELENGTH);


	function runTimer(minutes) {
		var startTime = setTime(minutes);
		var doTime = setInterval(function(){
			var currentTime = new Date();
			var pomoTime = new Date(startTime.getTime() - currentTime.getTime());
			if (pomoTime.getTime() < 20){
				// console.log("timeup");
				stopTimer(doTime);
			}
			timer.innerHTML = ("0"+pomoTime.getMinutes()).slice(-2)+":"+("0"+pomoTime.getSeconds()).slice(-2);
		},10);
	}

	function transition() {
		if (active){
			body.id = "break";
			tally.innerHTML += "<div class='circle' id='active'></div>"
			active = false;
		}
		else {
			body.id = "active";
			active = true;
		}
	}

	function stopTimer(timer) {
		clearInterval(timer);
		transition();
		if (active) {
			runTimer(ACTIVELENGTH);
		} else {
			runTimer(BREAKLENGTH);
		}
	}

	function setTime(diff) {
		var startTime = new Date(new Date().getTime() + diff*1000*60);
		return startTime;
	}


})();
