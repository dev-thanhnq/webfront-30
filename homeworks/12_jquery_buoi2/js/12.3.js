jQuery(document).ready(function($) {
	$('.sub-main').hide();
	$('.sub-sub-main').hide();
	$('.item').mouseenter(function() {
		$(this).children('ul').slideDown(500);
	});
	$('.sub-item').mouseenter(function() {
		$(this).children('ul').slideDown(500);
	});
	$('.item').mouseleave(function() {
		$(this).children('ul').slideUp(500);
	});
	$('.sub-item').mouseleave(function() {
		$(this).children('ul').slideUp(100);
	});
});