$(document).ready(function() {
	$('.plus').click(function() {
		$('.minus').removeClass('btn-block');
		$('.plus').addClass('btn-block');
		$('.title-panel').css('color', 'white');
		$(this).next().next().css('color', '#c6f04e');
		$(this).toggleClass('btn-block');
		$(this).next().toggleClass('btn-block');
		$('.panel').css('display', 'none');
		$(this).parent().next().css('display', 'block');
	})
	$('.minus').click(function() {
		$(this).toggleClass('btn-block');
		$(this).prev().toggleClass('btn-block');
		$(this).parent().next().css('display', 'none');
		$('.title-panel').css('color', 'white');
	})
})