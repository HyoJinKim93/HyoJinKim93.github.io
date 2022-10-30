
    // 리스트공통 - 숨김영역열기
	$('.direction').on('click', '.accordion li a', function (e) {
		e.stopPropagation();

		const check = $(this).hasClass('on');

		$('.accordion li a').removeClass('on');
		$('.accordion li .hide-area').slideUp();

		if(!check){
			$(this).addClass('on');
			$(this).children('.hide-area').slideDown();
		}
	});

