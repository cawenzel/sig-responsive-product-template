$(document).ready(function(){
	$('.slide-carousel').slick({
		dots: false,
		arrows: false,
		pauseOnHover: false,
		slide: '.slide-item',
		autoplay: true,
		autoplaySpeed: 8000,
		fade: true
	});
});

$(document).ready(function(){
	$('.product-slide-carousel').slick({
		dots: true,
		arrows: false,
		pauseOnHover: false,
		slide: '.slide-item',
		autoplay: false,
		autoplaySpeed: 8000
	});
});

$('.responsive-tabs').responsiveTabs({
	startCollapsed: 'accordion'
});

$('.media-center-carousel').slick({
	infinite: true,
	slidesToShow: 6,
	slidesToScroll: 1,
	pauseOnHover: false,
	slide: '.media-item',
	responsive: [
		{
		breakpoint: 1024,
		settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
		breakpoint: 640,
		settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
		breakpoint: 480,
		settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$('.leadership-carousel').slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	pauseOnHover: false,
	slide: '.leadership-item',
	responsive: [
		{
		breakpoint: 1024,
		settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
		breakpoint: 640,
		settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
		breakpoint: 480,
		settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$('.people-carousel').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	pauseOnHover: false,
	slide: '.people-item',
	responsive: [
		{
		breakpoint: 768,
		settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
		breakpoint: 480,
		settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$('.social-carousel').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	pauseOnHover: false,
	slide: '.social-item'
});

$(document).ready(function () {
    $(".mobile-menu-icon").click(function () {
        $(".mobile-nav").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });
});