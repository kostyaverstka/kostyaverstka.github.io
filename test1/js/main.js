$(document).ready(function(){

    $("header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


	$('.slider-wrap').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: '<i class="fa slider-arrows arrows-left fa-chevron-left"></i>',
	nextArrow: '<i class="fa slider-arrows arrows-right fa-chevron-right"></i>'
	});
	
});