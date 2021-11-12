
$(function(){
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
        document.body.style.overflow = 'visible';
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


    function scrollEvent(){
        const screen = $(window).width();
        $('header').on('click', '.btn-all', function () {
            $('html, body').removeClass('scroll-none');
            // window.addEventListener('scroll', noScroll);
        });
        $('header').on('click', '.btn-all.on', function () {
            $('html, body').addClass('scroll-none');
            // window.removeEventListener('scroll', noScroll);
        });
        
        if(screen > 1280){
            $('html, body').removeClass('scroll-none');
        }
    }
    scrollEvent();

	// $(window).resize(function(){ 
    //     function scrollEvent(){
    //         const screen = $(window).width();
    //         $('header').on('click', '.btn-all', function () {
    //             $('body').removeClass('scroll-none');
    //             // window.addEventListener('scroll', noScroll);
    //             if(screen > 768){
    //                 console.log('pc')
    //                 $('body').removeClass('scroll-none');
    //                 document.body.style.position = 'fixed';
    //             } else {
    //                 console.log('mobile')
    //                 $('body').removeClass('scroll-none');
    //                 document.body.style.overflow = 'visible';
    //                 document.body.style.position = 'static';
    //                 document.getElementsByClassName('all-menu').style.overflow = 'visible';
    //             }
    //         });
    //         $('header').on('click', '.btn-all.on', function () {
    //             $('body').addClass('scroll-none');
    //             // window.removeEventListener('scroll', noScroll);
    //             // if(screen > 1280){
    //             //     document.body.style.overflow = 'visible';
    //             //     document.getElementsByClassName('.all-menu').style.overflow = 'visible';
    //             // }
    //         });
    //     }
    // })
})
