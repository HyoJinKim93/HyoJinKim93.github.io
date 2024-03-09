
$(function(){

	/* 메뉴위치로 보내기 */
	let menuItem = $('.menu a');
	
	menuItem.click(function(){
	let el = $(this).attr('href');
	let elWrapped = $(el);
				
	scrollToDiv(elWrapped, 64);
		return false;
	});
					
	function scrollToDiv(element,navheight){
		let offset = element.offset();
		let offsetTop = offset.top;
		let totalScroll = offsetTop-navheight;
					
		$('body,html').animate({
			scrollTop: totalScroll
		}, 400, "linear");
	}
	
	});

