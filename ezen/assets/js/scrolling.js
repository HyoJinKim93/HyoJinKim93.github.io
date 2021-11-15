$(function(){
	var t=0,x=0;
	var sec1H=$(window).innerHeight();
	var sec2H=$('.notice').innerHeight();
	var sec4Top=(sec1H+sec2H);
	var i=-1,j=-1,z=0,y=0;
	
		$('.num').text(0);  	//카운트 수치(섹션4)
	
	$(window).scroll(function(){
		if( $(window).scrollTop()==0){
			t=0;
			x=0;
			i=-1;
			j=-1;
		}
		
		//카운트
		if($(window).scrollTop()>=sec4Top){
			
				if(x==0){
					y=setInterval(countFn,20);
					x=1;
				}
				
				function countFn(){
					i++;  //i=-1+1   출발 0 1 2 3 .....14  55 89 
					if(i<=2004){
						$('.num').eq(0).text(i);
					}
					if(i<=327){
						$('.num').eq(1).text(i);
					}
					if(i<=841){
						$('.num').eq(2).text(i);
					}
					if(i<=8){
						$('.num').eq(3).text(i);
					}
				}
		}
		
		
		
		
		
		
	});

});