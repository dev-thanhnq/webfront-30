// var text = document.getElementsByTagName('h1');
$(document).ready(function() {
	var text = $('h1');
	text.css('color', 'red');
	var textMyName = $('#myName');
	// console.log(text);

	var input_1 = $(':text');
	var input_2 = $(':password');
	var input_3 = $(':radio');
	// console.log(input_1, input_2, input_3);
	console.log(textMyName.text());
	console.log(textMyName.text('Quang Thành'));
	console.log($('.container').html());
	// console.log($('.container').html('lô lô lô'));
	$('.container').width(600);
	console.log('width ' + $('.container').width());
	$('.container').height(400);
	console.log('height ' + $('.container').height());
	// $('form').empty();
	$('.container').append('<h2>append</h2>');
	$('.container').prepend('<h2>prepend</h2>');
	$('.container').after('<h2 class="after">after</h2>');
	$('.container').after('<h2 class="after">after2</h2>');
	$('.container').before('<h2>before</h2>');
	$('.container').addClass('class_name');
	$('.container').toggleClass('abc');
	//=================================================
	$('.btn').click(function() {
		$('.container').empty();
	});
	$(document).on('click change', ':text', function() {
		console.log('Xin chào');
	})
	$(document).on('click', '.after', function() {
		$(this).css('color', 'red');
	})
})