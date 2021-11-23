var screenMode = "";
function setScreenMode(){ 
	var screen = $(window).width();
	if(screen > 768) screenMode = "pc";
	else screenMode = "mobile";
}

$(function(){
        setScreenMode();
            const savedWidth = $(window).width();
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
        // document.body.style.overflow = 'visible';
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
    //     const body = document.querySelector("body");
    //     $('header').on('click', '.btn-all', function () {
    //         if(screenMode == 'pc'){
    //             console.log('pc')
    //             $('body').addClass('scroll-none');
    //         } else {
    //             console.log('mobile')
    //             $('body').removeClass('scroll-none')
    //         }
    //     });
        
    //     $('header').on('click', '.btn-all.on', function () {
    //         $('body').removeClass('scroll-none');
    //         // window.removeEventListener('scroll', noScroll);
    //     });
        
    // }
    // scrollEvent();
	
    // function resized() {
    //     $('header').on('click', '.btn-all', function () {
    //         console.log(test)
    //         if(window.innerWidth > 768){
    //             console.log('pc')
    //             $('body').addClass('scroll-none');
    //         } else {
    //             console.log('mobile')
    //             $('body').removeClass('scroll-none')
    //         }
    //     });
        
    //     $('header').on('click', '.btn-all.on', function () {
    //         $('body').addClass('scroll-none');
    //         // window.removeEventListener('scroll', noScroll);
    //     });
    // }

    // window.addEventListener("resize", resized);

    // function resized() {
    //     const body = document.querySelector("body");
    //     $('header').on('click', '.btn-all', function () {
    //         console.log('click')
    //         if(window.innerWidth > 768){
    //             console.log('pc')
    //             body.className = "scroll-none";
    //         } 
    //     });
        
    // }

    // window.addEventListener("resize", resized);



	// $(window).resize(function(){ 
    //     function scrollEvent(){
    //         $('header').on('click', '.btn-all', function () {
    //             // window.addEventListener('scroll', noScroll);
    //             if(window.innerWidth > 768){
    //                 console.log('pc')
    //                 $('body').removeClass('scroll-none');
    //                 document.body.style.position = 'fixed';
    //             } else {
    //                 console.log('mobile')
    //                 $('body').removeClass('scroll-none');
    //                 document.body.style.overflowY = 'scroll';
    //                 document.body.style.position = 'static';
    //                 document.getElementsByClassName('all-menu').style.overflow = 'visible';
    //             }
    //         });
    //     }
    // })

    function screenClass() {
        $('header').on('click', '.btn-all', function () {
            if($(window).innerWidth() > 768) {
                $('body').addClass('scroll-none').removeClass('small-screen');
            } else {
                $('body').addClass('small-screen').removeClass('scroll-none');
            }
        });
        
        $('header').on('click', '.btn-all.on', function () {
            // $('body').removeClass('scroll-none');
            window.removeEventListener('scroll', noScroll);
        });
    }
    
    screenClass();

})