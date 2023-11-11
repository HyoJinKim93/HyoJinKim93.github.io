
    // 리스트공통 - 숨김영역열기
	$('.direction').on('click', '.accordion li a', function (e) {
		e.stopPropagation();

		const check = $(this).hasClass('on');

		$('.accordion li a').removeClass('on');
		$('.accordion li .hide-area').slideUp();
        setTimeout(function() {
              map.relayout();
              map.setCenter(new kakao.maps.LatLng(37.6448, 126.787))
            }, 100);
		if(!check){
			$(this).addClass('on');
			$(this).siblings('.hide-area').slideDown();
		}
	});

