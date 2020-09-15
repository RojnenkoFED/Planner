$(function(){

	var emptyList = $('<div></div>');
	emptyList.text('Список пуст...').css({
		'color' : '#adb4c5',
		'font-family' : 'Arial',
		'margin-top' : '85px'
	});

	$('.column-left').append(emptyList);	
	
	
	$('.submit').on('click', function(){
		var dealTitle = $('input[name="deal-title"]').val();
		var dealDefinition = $('.deal-textarea').val();
		emptyList.hide();

		if (dealTitle != '' && dealDefinition != '' && $('.list').hide()) {
			
			$('.column-left').append('<div class="list"></div');
			$('.column-left .list').css('display', 'block');

			$('.list:last-child').append('<div class="list-title"></div>')
								 .append('<div class="list-definition"></div>')
								 .children().append('<span></span>');
			
			$('.list:last-child .list-title span').text(dealTitle);
			$('.list:last-child .list-title').append('<img src="img/del.png">')
											 .append('<i class="fa fa-caret-down"></i>');

			$('.list:last-child .list-definition span').text(dealDefinition);

		}
		else {
			alert('Заполните все поля ввода');
		}

		$('.deal-input').val('');
		$('.deal-textarea').val('');

	});	


	$('.column-left').mouseover(function(){
		$('img').click(function(){			
			$(this).parents('.list').remove();			
			if ($('.column-left .list').length == 0){
			emptyList.show();
			}			
		});		
	});	
});