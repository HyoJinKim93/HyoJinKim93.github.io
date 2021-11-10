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
        
        var mapContainer2 = document.getElementById('map2'), // 지도를 표시할 div 
            mapOption2 = {
                center: new kakao.maps.LatLng(37.48685337098062, 126.89734333067844), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        var map2 = new kakao.maps.Map(mapContainer2, mapOption2); // 지도를 생성합니다

        // 마커가 표시될 위치입니다 
        var markerPosition2 = new kakao.maps.LatLng(37.48685337098062, 126.89734333067844);

        // 마커를 생성합니다
        var marker2 = new kakao.maps.Marker({
            position: markerPosition2
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker2.setMap(map2);


        mapContainer2.style.width = '583px';
        mapContainer2.style.height = '206px';

        map2.relayout();

        setTimeout(function () {
            map2.relayout();
            // map.setCenter(new kakao.maps.LatLng(lat, lng));
            // map.setLevel(2); 필요하면 레벨조정
        }, 100);
    }
    allMenuEvent();
})
