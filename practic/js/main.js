$( document ).ready(function() {
    
    var containerEl = document.querySelector('.product-grid');
    var mixer = mixitup(containerEl);

    $('.slide-wrap-sertificat').slick({
    	infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<i class="fa slider-arrows arrows-left fa-chevron-left"></i>',
		nextArrow: '<i class="fa slider-arrows arrows-right fa-chevron-right"></i>'
    });
    $('.slide-wrap-otzuvi').slick({
    	infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<i class="fa slider-arrows arrows-left fa-chevron-left"></i>',
		nextArrow: '<i class="fa slider-arrows arrows-right fa-chevron-right"></i>'
    });
    $('.slide-wrap-partnyr').slick({
    	infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: '<i class="fa slider-arrows arrows-left fa-chevron-left"></i>',
		nextArrow: '<i class="fa slider-arrows arrows-right fa-chevron-right"></i>'
    });

});