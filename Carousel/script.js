$(function() {
	var carouselList = $('#carousel ul'),
		interval;
	
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last");

		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last");

		firstItem.before(lastItem);
		carouselList.css({marginLeft: -500});	
	}

	function nextSlide() {
		moveFirstSlide();
		carouselList.animate({marginLeft: -500}, 500);
	}

	function prevSlide() {
		carouselList.animate({marginLeft: 0}, 500, moveLastSlide);
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