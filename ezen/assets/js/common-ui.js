var screenMode = "";
function setScreenMode(){ 
	var screen = $(window).width();
	if(screen > 768) screenMode = "pc";
	else screenMode = "mobile";
}
$(function(){
    //새로고침 시 맨 위로
    window.onload = function(){
        setTimeout(function(){
            scrollTo(0,0)
        }, 50)
    }

    function gnbEvent(){
        $(".all-menu .list > li").on("mouseover", function () {
            $(this).children(".depth2").addClass("on");
            $(this).children(".all-menu .list > li > a").addClass("on");
        }).on("mouseout", function () {
            $(this).children(".depth2").removeClass("on");
            $(this).children(".all-menu .list > li > a").removeClass("on");
        });
    }
    gnbEvent();
    
    function allMenuEvent(){
        const btnAll = document.querySelector(".btn-all");  
        const allMenu = document.querySelector(".all-menu");
        btnAll.addEventListener('click', () => {  
            btnAll.classList.toggle("on")  
            allMenu.classList.toggle("on")
            // if($(".all-menu").addClass('on')){
            //     document.body.style.overflow = 'hidden';
            // } else {
            //     document.body.style.overflow = 'visible';
            // }
            setTimeout(function(){
                map2.relayout();
                map2.setCenter(new kakao.maps.LatLng(37.48685337098062, 126.89734333067844));
              }, 0);  
        });  
    }
    allMenuEvent();


    // function scrollEvent(){
    //     const screen = $(window).width();
    //     $('header').on('click', '.btn-all', function () {
    //         $('html, body').removeClass('scroll-none');
    //         // window.addEventListener('scroll', noScroll);
    //     });
    //     $('header').on('click', '.btn-all.on', function () {
    //         $('html, body').addClass('scroll-none');
    //         // window.removeEventListener('scroll', noScroll);
    //     });
        
    //     if(screen > 1280){
    //         $('html, body').removeClass('scroll-none');
    //     }
    // }
    // scrollEvent();
    
    
	// setScreenMode();
	// 	var savedWidth = $(window).width();
	// gnbEvent();
	
	// $(window).resize(function(){ 
	// 	var newWidth = $(window).width();
	// 	if(savedWidth == newWidth) return ; 
	// 	savedWidth = newWidth;
	// 	$("body").removeClass('scroll-none');
	// 	setScreenMode();
	// 	// $("body").off('mouseleave mouseenter click',".gnb > li");
	// 	gnbEvent();
	// });

	// $(window).resize(function(){ 
    //     function scrollEvent(){
    //         const screen = $(window).width();
    //         $('header').on('click', '.btn-all', function () {
    //             $('body').addClass('scroll-none');
    //             // window.addEventListener('scroll', noScroll);
    //             if(screen > 768){
    //                 console.log('pc')
    //                 $('body').addClass('scroll-none');
    //             } else {
    //                 console.log('mobile')
    //                 $('body').removeClass('scroll-none');
    //                 // document.getElementsByClassName('all-menu').style.overflow = 'visible';
    //             }
    //         });
    //         $('header').on('click', '.btn-all.on', function () {
    //             $('body').removeClass('scroll-none');
    //             // window.removeEventListener('scroll', noScroll);
    //             // if(screen > 1280){
    //             //     document.body.style.overflow = 'visible';
    //             //     document.getElementsByClassName('.all-menu').style.overflow = 'visible';
    //             // }
    //         });
    //     }
    //     scrollEvent();
    // });

    function bodyEvent(){
        $('header').on('click', '.btn-all', function () {
            $('body').removeClass('scroll-none');
            // window.addEventListener('scroll', noScroll);
        });
        $('header').on('click', '.btn-all.on', function () {
            $('body').addClass('scroll-none');
            // window.removeEventListener('scroll', noScroll);
        });
    }
    bodyEvent();

    window.onresize = function(){ 
        console.log('test')
        function scrollEvent(){
            var screen = $(window).width();
            if(screen > 768){
                console.log('pc')
                $('body').addClass('scroll-none');
            } else {
                console.log('mobile')
                $('body').removeClass('scroll-none');
            }
            if(!$('.all-menu').hasClass('on')){
                $('body').removeClass('scroll-none')
            }
        }
        scrollEvent();
    };
    
})
