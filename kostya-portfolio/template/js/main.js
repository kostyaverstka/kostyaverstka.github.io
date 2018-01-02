$(document).ready(function(){

// PopUp

	$('.btn').on('click', function() {
		$('.popUp').css('display','block');
		$("body").addClass("off-scroll");
	});
	$('.btn-off-popUp').on('click', function() {
		$('.popUp').css('display','none');
		$("body").removeClass("off-scroll");
	});

// End PopUp


});