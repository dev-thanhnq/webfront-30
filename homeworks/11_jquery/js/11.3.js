$(document).ready(function() {
	$('#add').click(function() {
		if ($('#new-work').val() == "") {
			$('#warning').css('color', 'red');
		} else {
			$('#warning').css('color', '#8ac2c7');
			$('.all-work').append('<div class="work" style="position: relative">' 
				+ '<span>' + $('#new-work').val() + '</span>' 
				+ '<i class="fa fa-times-circle" style="float: right; cursor: pointer" aria-hidden="true"></i>' 
				+ '</div>');
		}
		$('#new-work').val('');
	});
	$(document).on('click', '.fa-times-circle', function() {
		$(this).parent().remove();
	})
	$(document).on('click', '.work', function() {
		$(this).children('span').css('text-decoration', 'line-through');
		$(this).css('backgroundColor', 'gray');
		$(this).append('<i class="fa fa-check" aria-hidden="true" style="position: absolute; left: 10px; top: 11px; font-size: 25px"></i>');
	})
})