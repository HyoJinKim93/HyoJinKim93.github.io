$(function(){
    var t=0,x=0;
	var sec1H=$(window).innerHeight();
	var sec2H=$('#section2').innerHeight();
	var sec3Top=(sec1H+sec2H)-300;
	var sec4Top=(sec1H+sec2H);
	var i=-1; j=0;
    $('.graph-bar').stop().animate({width:'0%'},0); //막대 그래프
	
	$(window).scroll(function(){
		if( $(window).scrollTop()==0){
			t=0;
			x=0;
			i=-1;
            j=0;
			 $('.graph-bar').animate({width:'0%'},0);
		}
		
		//막대그래프
		if( $(window).scrollTop()>=sec3Top ){
			if(t==0){
				t=1;
				z=setInterval(graphFn,50);
				function graphFn(){	
					j+=1;
                     
                    if(j<=95) {
                        $('.graph-bar').eq(0).css({width:j+'%'},2000);
                        $('.graph-bar').eq(0).text(j+'%');
                    }
                    if(j<=95) {
                        $('.graph-bar').eq(1).css({width:j+'%'},2000);
                        $('.graph-bar').eq(1).text(j+'%');
                    }
                    if(j<=95) {
                        $('.graph-bar').eq(2).css({width:j+'%'},2000);
                        $('.graph-bar').eq(2).text(j+'%');
                    }
                    if(j<=95) {
                        $('.graph-bar').eq(3).css({width:j+'%'},2000);
                        $('.graph-bar').eq(3).text(j+'%');
                    }
                    if(j<=95) {
                        $('.graph-bar').eq(4).css({width:j+'%'},2000);
                        $('.graph-bar').eq(4).text(j+'%');
                    }
                    if(j<=50) {
                        $('.graph-bar').eq(5).css({width:j+'%'},2000);
                        $('.graph-bar').eq(5).text(j+'%');
                    }
                    if(j<=70) {
                        $('.graph-bar').eq(6).css({width:j+'%'},2000);
                        $('.graph-bar').eq(6).text(j+'%');
                    }
                    if(j<=95) {
                        $('.graph-bar').eq(7).css({width:j+'%'},2000);
                        $('.graph-bar').eq(7).text(j+'%');
                    }
                    if(j>100) { 
                        clearInterval(z);
                    }
					
				}
			}
		}
		
	});
    
})