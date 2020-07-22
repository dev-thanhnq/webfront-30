jQuery(document).ready(function($) {
	$('.sub-main').hide();
	$('.sub-sub-main').hide();
	$('.item').mouseenter(function() {
		$(this).children('ul').slideDown();
	});
	$('.sub-item').mouseenter(function() {
		$(this).children('ul').slideDown();
	});
	$('.item').mouseleave(function() {
		$(this).children('ul').slideUp();
	});
	$('.sub-item').mouseleave(function() {
		$(this).children('ul').slideUp();
	});
});