$(document).ready(function() {

	$('#form1').on('submit', validate);

	function validate(e) {
		$('.error').remove();
		var nume = $('#name').val();
		var email = $('#email').val();

		if(nume.length < 3) {
			var error = $('<span>');
			error.html('Please enter a valid name');
			error.addClass('error');
			error.insertAfter($('#name')); 
			e.preventDefault();
			$('#name').css('border', '1px solid rgb(224, 49, 49)');
			$('#paragrafn, #paragrafe').css('margin', '0px');			
		} 

		if (!email) {
			var error = $('<span>');
			error.html('Please enter your e-mail address');
			error.addClass('error');
			error.insertAfter($('#email'));
			e.preventDefault();
			$('#email').css('border', '1px solid rgb(224, 49, 49');
			$('#paragrafn, #paragrafe').css('margin', '0px');
		}

		if (nume.length >= 3) {
		//	$('#paragrafe').css('margin-bottom', '19px');
			$('#paragrafn').css('margin-bottom', '19px');
		}

		if (email) {
			$('#paragrafe').css('margin-bottom', '19px');
		}	
	}

	$('#name').on('input', function() {
		var nume = $('#name').val();
		if (nume.length >=3) {
			$('#name').parent().find('.error').remove();
			$('#name').css('border', '');
			$('#paragrafn').css('margin-bottom', '19px');
		}
	});

	$('#email').on('input', function() {
		var email = $('#email').val();
		if (email) {
			$('#email').parent().find('.error').remove();
			$('#email').css('border', '');
			$('#paragrafe').css('margin-bottom', '19px');
		}
	});

	$('#form1').on('reset', resetForm);

	function resetForm() {
		$('.error').remove();
		$('#name, #email').css('border', '');
	//	$('#email').css('border', '');
		$('#paragrafn, #paragrafe').css('margin', '');
	}

});