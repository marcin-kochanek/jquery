$(function() {
	var carouselList = $( '#carousel ul'),
		interval;
	
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		firstItem.before(lastItem);
		carouselList.css({marginLeft: -500});	
	}

	function nextSlide() {	
		carouselList.animate({marginLeft: -500}, 500, moveFirstSlide);
	}

	function prevSlide() {
		moveLastSlide();
		carouselList.animate({marginLeft: 0}, 500);
	}

	interval = setInterval(nextSlide, 3000);

	$('#next').click(function() {
		clearInterval(interval);
		nextSlide();
	});

	$('#prev').click(function() {
		clearInterval(interval);
		prevSlide();
	});
});