// JavaScript Document
// Written by Chris Converse for lynda.com

var startingItem = 6;

$(document).ready(function() {
	$('.carousel_data .carousel_item').each(function(){	
		$('#carousel').append( $(this).find('.image').html() );
	});
	createCarousel();
	showCaption();
});

function createCarousel(){
	$('div#carousel').roundabout({
		startingChild: window.startingItem,
		childSelector: 'img',
		tilt: -1,
		minOpacity: 0.5,
		minScale: 0.1,
		duration: 700,
		clickToFocus: true,
		clickToFocusCallback: showCaption
	});
	createCustomButtons();
}

function createCustomButtons(){
	
	$('.nextItem').click(function(){
		hideCaption();
		$('div#carousel').roundabout('animateToNextChild', showCaption);
	});
	
	$('.prevItem').click(function(){
		hideCaption();
		$('div#carousel').roundabout('animateToPreviousChild', showCaption);
	});
	
	$('div#carousel img').click(function(){
		hideCaption();
	});
}

function hideCaption(){
	$('#captions').animate({'opacity':0}, 250);
}

function showCaption(){
	var childInFocus = $('div#carousel').data('roundabout').childInFocus
	var setCaption = $('.carousel_data .carousel_item .caption:eq('+childInFocus+')').html();
	$('#captions').html(setCaption);
	var newHeight = $('#captions').height();
	$('.caption_container').animate({'height':newHeight + 40}, 500, function(){
		$('#captions').animate({'opacity':1}, 250);	
	});	
}

