var screenMode = "";
function setScreenMode(){ 
	var screen = $(window).width();
	if(screen > 900) screenMode = "pc";
	else screenMode = "mobile";
}
$(function(){
    //새로고침 시 맨 위로
    window.onload = function(){
        setTimeout(function(){
            scrollTo(0,0)
        }, 0)
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
    
    //전체 메뉴 열기닫기 & 카카오맵 연동
    function allMenuEvent(){
        const btnAll = document.querySelector(".btn-all");  
        const allMenu = document.querySelector(".all-menu");
        btnAll.addEventListener('click', () => {  
            btnAll.classList.toggle("on")  
            allMenu.classList.toggle("on")
            setTimeout(function(){
                map2.relayout();
                map2.setCenter(new kakao.maps.LatLng(37.48685337098062, 126.89734333067844));
              }, 0);  
        });  
    }
    allMenuEvent();

    //전체메뉴 열었을 때 스크롤 안 생기게
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

    //윈도우 pc일 때 스크롤 x / mobile일 때 스크롤 o
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
    
    //모바일 높이가 620 이하일 때 고정
})
