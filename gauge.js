(function(){
	var markers = document.getElementsByClassName("marker");
	var first = document.getElementById("first-marker");
	var last = document.getElementById("last-marker");
	var middles = document.getElementsByClassName("middle-marker");
	var tl = new TimelineMax({repeat: -1, delay: 0, timeScale: 0.2});

	tl.add(
		TweenMax.to(markers, 0.001, {
			autoAlpha: 0,
			})
		);

	tl.add(
			TweenMax.to([middles, first], 0.001, {
				autoAlpha: 1,
			})
		);

	tl.add(
			TweenMax.fromTo(markers, 0.998, {
				x:'0px',
			},{
				x: '-=19px',
				onComplete: tick,
			})
		);

	tl.add(
			TweenMax.to(first, 0.998, {
				autoAlpha: 0,
			}), '-=0.998'
		);

	tl.add(
			TweenMax.to(last, 0.998, {
				autoAlpha: 1,
			}), '-=0.998'
		);

	function tick(){
		// console.log("tick");
	}

})();
