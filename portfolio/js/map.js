window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
     /*container.addListener((e) => {
    
         let scrollTop = container.scrollTop;
         $('.posNum').html(scrollTop)
    
     });*/

    function gnb() {
        $(".gnb").hide();
        $(".all-menu a").on("click", function () {
            $(".header .gnb").show();
        })
        $(".gnb .close").on("click", function () {
            $(".header .gnb").hide();
        })
    }
    gnb()
    // gnb 메뉴인터랙션
    function gnbInterac() {
        $('.all-menu').on('mouseover', function () {
            $(this).addClass('on').removeClass('off');
        })
    }
    gnbInterac()



    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(37.6449, 126.787), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(37.6449, 126.787);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);


})
