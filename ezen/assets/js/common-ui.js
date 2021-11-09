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
        const btnAll = document.querySelector(".btn-all");  
        const allMenu = document.querySelector(".all-menu");  
        btnAll.addEventListener('click', () => {  
            btnAll.classList.toggle("on")  
            allMenu.classList.toggle("on")  
        });  
    }
    allMenuEvent();
})
