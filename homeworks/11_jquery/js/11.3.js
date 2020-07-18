$(document).ready(function() {
	var x = 0;
	$('#add').click(function() {
		if ($('#new-work').val() == "") {
			$('#warning').css('color', 'red');
		} else {
			$('#warning').css('color', '#8ac2c7');
			x += 1;
			if (x % 2 == 0) {
				$('.all-work').append('<div class="work" style="position: relative; background-color: #f9f9f9">' 
				+ '<span>' + $('#new-work').val() + '</span>' 
				+ '<i class="fa fa-times-circle" style="float: right; cursor: pointer" aria-hidden="true"></i>' 
				+ '</div>');
			} else {
				$('.all-work').append('<div class="work" style="position: relative; background-color: #eeeeee">' 
				+ '<span>' + $('#new-work').val() + '</span>' 
				+ '<i class="fa fa-times-circle" style="float: right; cursor: pointer" aria-hidden="true"></i>' 
				+ '</div>');
			}
		}
		$('#new-work').val('');
		console.log(x);
	});
	
	$(document).on('click', '.fa-times-circle', function() {
		$(this).parent().remove();
	})
	$(document).on('click', '.work', function() {
		$(this).children('span').css('text-decoration', 'line-through');
		$ (this).css('backgroundColor', 'gray');
		$(this).append('<i class="fa fa-check" aria-hidden="true" style="position: absolute; left: 10px; top: 11px; font-size: 25px"></i>');
	})
})