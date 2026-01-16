let header = "";
// header +=          '<header id="header" class="header">';
header +='<div class="header_inner">';
header +=    '<div class="nav_dim pc_dim"></div>';  
header +=   '<div class="wrap_gnb main_only">';
header +=        '<!-- 최상단 로그인 화면크기 조절 버튼 -->';
header +=        '<div class="area_top">';
header +=            '<div class="area_top_inner">';
header +=                '<div class="gov_top_info">';
header +=                    '<p>이 누리집은 대한민국 공식 전자정부 누리집입니다.</p>';
header +=                '</div>';
header +=                '<ul class="box_btns">';
header +=                    '<li><a href="sitemap.html" target="_self" class="user_anchor" title="사이트맵 페이지로 이동">사이트맵</a></li>';
header +=                    '<li class="box_btn_zoom">';
header +=                        '<span>화면크기</span>';
header +=                        '<button onclick="javascript:zoomControl.zoomIn()" class="btn_zoom in" title="화면 확대"></button>';
header +=                        '<button onclick="javascript:zoomControl.zoomOut()" class="btn_zoom out" title="화면 축소"></button>';
header +=                        '<button onclick="javascript:zoomControl.zoomReset()" class="btn_zoom reset" title="화면크기 초기화"></button>';
header +=                    '</li>';
header +=                '</ul>';
header +=            '</div>';
header +=        '</div>';
header +=        '<div class="area_menu">';
header +=            '<div class="area_menu_inner">';
header +=                '<h1 class="logo">';
header +=                   '<span class="sr_only">디지털서비스개방 로고</span>';
header +=                   '<a href="main.html" target="_self" class="logo_anchor" title="메인 페이지 이동"></a>';
header +=                '</h1>';
header +=                '<div class="wrap_menus">';
header +=                    '<!-- 모바일 상단 로그인 상태창 -->';
header +=                    '<div class="area_state">';
header +=                        '<button type="button" class="btn_close_menu" title="메뉴 닫기"></button>';
header +=                        '<div class="user_info">';
header +=                            '<div class="logo_lnb">';
header +=                                '<img src="../img/logo/logo_openservice_main.png" alt="디지털서비스개방로고">';
header +=                            '</div>';
header +=                            '<div class="box_state state_login_before">';
header +=                                '<div class="user_info">';
header +=                                    '<p class="greeting">디지털서비스개방에 <br /> 오신 것을 환영합니다.</p>';
header +=                                '</div>';
header +=                            '</div>';
header +=                        '</div>';
header +=                    '</div>';
header +=                    '<nav id="gnb" class="wrap_group menu_text on">';
header +=                        '<div class="lnb_drop_menu">';
header +=                            '<h2 class="sr_only">주메뉴</h2>';
header +=                            '<ul class="lnb_list">';
header +=                                '<li class="depth01">';
header +=                                    '<div class="depth01_item"><a href="policyIntro.html" target="_self" class="depth01_item_anchor" title="디지털서비스개방 정책 소개 페이지로 이동">디지털서비스개방 소개</a></div>';
header +=                                    '<ul class="depth02">';
header +=                                       '<li class="depth02_item"><a href="policyIntro.html" target="_self" class="depth02_item_anchor" title="디지털서비스개방 정책 소개 페이지로 이동">정책 소개</a></li>';
header +=                                       '<li class="depth02_item"><a href="biIntro.html" target="_self" class="depth02_item_anchor" title="디지털서비스개방 BI 소개 페이지로 이동">BI 소개</a></li>';
header +=                                    '</ul>';
header +=                                '</li>';
header +=                                '<li class="depth01">';
header +=                                    '<div class="depth01_item"><a href="youthMilTrainSch.html" target="_self" class="depth01_item_anchor" title="개방서비스 청년 카테고리 페이지로 이동">개방서비스</a></div>';
header +=                                    '<ul class="depth02 column_2">';
header +=                                        '<li class="depth02_item">';
header +=                                            '<a href="youthMilTrainSch.html" target="_self" class="depth02_item_anchor" title="개방서비스 청년 카테고리 소개 페이지로 이동">청년</a>';
header +=                                        '</li>';
header +=                                        '<li class="depth02_item">';
header +=                                            '<a href="pregVaccHistInq.html" target="_self" class="depth02_item_anchor" title="개방서비스 임신, 육아 카테고리 소개 페이지로 이동">임신육아</a>';
header +=                                        '</li>';
header +=                                        '<li class="depth02_item">';
header +=                                            '<a href="demeritEduBook.html" target="_self" class="depth02_item_anchor" title="개방서비스 교통 카테고리 소개 페이지로 이동">교통</a>';
header +=                                        '</li>';
header +=                                        '<li class="depth02_item">';
header +=                                            '<a href="voucherCultureUse.html" target="_self" class="depth02_item_anchor" title="개방서비스 바우처·자격 카테고리 소개 페이지로 이동">바우처·자격</a>';
header +=                                        '</li>';
header +=                                        '<li class="depth02_item">';
header +=                                            '<a href="safetyTeleOptOut.html" target="_self" class="depth02_item_anchor" title="개방서비스 안전 카테고리 소개 페이지로 이동">안전</a>';
header +=                                        '</li>';
header +=                                        '<li class="depth02_item">';
header +=                                            '<a href="walletNatAssist.html" target="_self" class="depth02_item_anchor" title="개방서비스 디지털지갑 카테고리 소개 페이지로 이동">디지털지갑</a>';
header +=                                        '</li>';
header +=                                        '<li class="depth02_item">';
header +=                                            '<a href="travelKtxBook.html" target="_self" class="depth02_item_anchor" title="개방서비스 여행 카테고리 소개 페이지로 이동">여행</a>';
header +=                                        '</li>';
/* header +=                                        '<li class="depth02_item">';
header +=                                            '<a href="javascript:;" target="_self" class="depth02_item_anchor" title="개방서비스 미환급금 카테고리 소개 페이지로 이동">미환급금</a>';
header +=                                        '</li>'; */
header +=                                        '<li class="depth02_item">';
header +=                                            '<a href="passportReissApp.html" target="_self" class="depth02_item_anchor" title="개방서비스 발급 카테고리 소개 페이지로 이동">발급</a>';
header +=                                        '</li>';
/* header +=                                        '<li class="depth02_item">';
header +=                                            '<a href="javascript:void(0);" target="_self" class="depth02_item_anchor" title="개방서비스 생활 카테고리 소개 페이지로 이동">생활</a>';
header +=                                        '</li>'; */
header +=                                    '</ul>';
header +=                                '</li>';
header +=                                '<li class="depth01">';
header +=                                    '<div class="depth01_item"><a href="srtBook.html" target="_self" class="depth01_item_anchor" title="서비스 사례 소개 페이지로 이동">적용사례</a></div>';
header +=                                    '<ul class="depth02">';
header +=                                        '<li class="depth02_item">';
header +=                                            '<a href="srtBook.html" target="_self" class="depth02_item_anchor" title="서비스 사례 소개 페이지로 이동">서비스 사례</a>';
header +=                                        '</li>';
header +=                                        '<li class="depth02_item">';
header +=                                            '<a href="corpCases.html" target="_self" class="depth02_item_anchor" title="기업별 사례 소개 페이지로 이동">기업별 사례</a>';
header +=                                        '</li>';
header +=                                    '</ul>';
header +=                                '</li>';
header +=                                '<li class="depth01">';
header +=                                    '<div class="depth01_item"><a href="serviceProc.html" target="_self" class="depth01_item_anchor" title="서비스 개방 절차 안내 페이지로 이동">이용 안내</a></div>';
header +=                                    '<ul class="depth02">';
header +=                                        '<li class="depth02_item"><a href="serviceProc.html" target="_self" class="depth02_item_anchor" title="서비스 개방 절차 안내 페이지로 이동">서비스 개방 절차</a></li>';
/* header +=                                        '<li class="depth02_item"><a href="onDemandApp.html" target="_self" class="depth02_item_anchor" title="디지털서비스개방 수시신청 페이지로 이동">수시신청</a></li>'; */
header +=                                    '</ul>';
header +=                                '</li>';
header +=                            '</ul>';
header +=                        '</div>';
header +=                    '</nav>';
header +=                '</div>';
header +=                '<!-- mob 햄버거 메뉴 버튼 -->';
header +=                '<div class="box_btn_util">';
header +=                    '<div class="box_btn_item">';
header +=                        '<button type="button" class="btn_util_ham" title="gnb 메뉴 열기"></button>';
header +=                    '</div>';
header +=                '</div>';
header +=             '</div>';
header +=          '<div class="lnb_drop_menu_back"></div>';
header +=       '</div>';
header +=    '</div>';
header += '</div>';



let footer = "";
footer +=  		'<div class="inner">'
footer +=  				'<div class="area_open_logo">'
footer +=  						'<img src="../img/logo/logo_openservice_gray.png" alt="디지털서비스개방">'
footer +=  				'</div>'
footer +=  				'<div class="area_address">'
footer +=  						'<ul class="list_address">'
footer +=  								'<li class="list_address_item">30112 세종특별자치시 도움6로 42(어진동)</li>'
footer +=  								'<li class="list_address_item">1551-0627 (월~금 09:00~18:00 / 토, 일, 공휴일 휴무)</li>'
footer +=  						'</ul>'
footer +=  						'<p>© Ministry of the Interior and Safety. <br class="only_mob">All rights reserved.</p>'
footer +=  				'</div>'
footer +=  				'<div class="area_sites">'
footer +=  			    	'<div class="wrap_select_family">'
footer +=  			    		'<a href="javascript:;" class="rel_link_sel" title="관련기관 누리집 목록 열기">관련기관 누리집</a>'
footer +=                        '<ul>'
footer +=                            '<li><a href="https://www.gov.kr/portal/main/nologin" target="_blank" title="새 창 열림- 정부24">정부24</a></li>'
footer +=                            '<li><a href="https://www.ips.go.kr/pot/forwardMain.do" target="_blank" title="새 창 열림- 국민비서">국민비서</a></li>'
footer +=                            '<li><a href="https://www.nia.or.kr/site/nia_kor/main.do" target="_blank" title="새 창 열림- 한국지능정보사회진흥원">한국지능정보사회진흥원</a></li>'
footer +=                            '<li><a href="https://www.dpg.go.kr/DPG/main/index.do" target="_blank" title="새 창 열림- 디지털플랫폼정부위원회">디지털플랫폼정부위원회</a></li>'
footer +=                            '<li><a href="https://www.mois.go.kr/frt/a01/frtMain.do" target="_blank" title="새 창 열림- 행정안전부">행정안전부</a></li>'
footer +=  			             '</ul>'
footer +=  		    		     '</div>'
footer +=  						 '<div class="area_other_logo only_pc">'
footer +=  								'<img src="../img/logo/logo_nia.png" alt="한국지능정보사회진흥원 로고">'
footer +=  								'<a href="http://www.webwatch.or.kr/Situation/WA_Situation.html?MenuCD=110" title="국가 공인 인증기관 : 웹와치">'
footer +=  								 '<img src="../img/logo/WA.svg" border="0" alt="과학기술정보통신부 WEB ACCESSIBILITY 마크(웹 접근성 품질인증 마크)"/>'
footer +=  								'</a>'
footer +=  						  '</div>'
footer +=  		   	    '</div>'
footer +=  				'<div class="area_other_logo only_mob">'
footer +=  					'<img src="../img/logo/logo_nia.png" alt="한국지능정보사회진흥원 로고">'
footer +=  					'<a href="http://www.webwatch.or.kr/Situation/WA_Situation.html?MenuCD=110" title="국가 공인 인증기관 : 웹와치">'
footer +=  					    '<img src="../img/logo/WA.svg" border="0" alt="과학기술정보통신부 WEB ACCESSIBILITY 마크(웹 접근성 품질인증 마크)"/>'
footer +=  					'</a>'
footer +=  				'</div>'
footer +=  				'</div>'
footer +=  		'</div>'

let skip = "";
skip += '<nav id="skip" class="skip">'
skip +=  '<a href="#content" class="skip_anchor">본문 바로가기</a>'
// skip +=  '<a href="#gnb" class="skip_anchor">주메뉴 바로가기</a>' 
// skip +=  '<a href="#sidemenu" class="skip_anchor">서브메뉴 바로가기</a>'
// skip +=  '<a href="#footer" class="skip_anchor">푸터 바로가기</a>'
// skip +=  '<a href="#">홈페이지 내 검색 바로가기</a>'
skip += '</nav>'


$(document).ready(function () {
    $("header.header").html(header);
    $("footer.footer").html(footer);
    
    $(".footer .wrap_select_family").on("click", function(){
        $(".footer .wrap_select_family ul").slideToggle(200);
        $(".footer .wrap_select_family").toggleClass('toggle');
        if ($(this).hasClass("toggle") === true) {
            $(this).children(".rel_link_sel").attr("title","관련기관 누리집 목록 열림");
        } else {
            $(this).children(".rel_link_sel").attr("title","관련기관 누리집 목록 닫힘");
        }
    });
    
    // 접근성 관련 
    // 접근성 - 스킵 메뉴
    $(".wrapper").prepend(skip);
    $(".skip .skip_anchor").on("focus", function () {
        $(this).parent(".skip").addClass("on");
        $(this).parent(".skip").stop().css({top: 0});
    });
    $(".skip .skip_anchor").on("click", function () {
        $(this).parent(".skip").removeClass("on");
        $(this).parent(".skip").stop().animate({top: "-40px"});
    });
    $(".skip .skip_anchor").on("focusout", function () {
        $(this).parent(".skip").removeClass("on");
        $(this).parent(".skip").stop().animate({top: "-40px"});
    });

    // focus events
      // 디바이스 사이즈 체크
    let w1100 = window.matchMedia("(max-width: 1100px)");
    if (w1100.matches) {
        $(".header").removeClass("gnb_pc");
        $(".header").addClass("gnb_mo");
    } else {
        $(".header").removeClass("gnb_mo");
        $(".header").addClass("gnb_pc");
    }

});

// 창 크기 변경 시 헤더 스타일 변경 1025px 까지 gnb_wide
$(window).on("resize", function () {
    $("html").removeClass("open_lnb");
    $(".header").removeClass("on");
    
    // submenu 모두 닫기  
    $(".header .depth01").removeClass("on");  

    let w1100 = window.matchMedia("(max-width: 1100px)");
    if (w1100.matches) {
        $(".header").removeClass("gnb_pc");
        $(".header").addClass("gnb_mo");
    } else {
        $(".header").removeClass("gnb_mo");
        $(".header").addClass("gnb_pc");
    }
});



// area_top 화면크기 조절
let nowZoom = 100;
let zoomControl = {
    zoomOut: function () {
        nowZoom = nowZoom - 5;
        if (nowZoom <= 90) nowZoom = 90;
        zoomControl.zooms();
        // $(".box_btn_zoom .btn_zoom").text(nowZoom + '%")
    },
    zoomIn: function () {
        nowZoom = nowZoom + 5;
        if (nowZoom >= 120) nowZoom = 120;
        zoomControl.zooms();
        // $(".box_btn_zoom .btn_zoom").text(nowZoom + '%")
    },
    zoomReset: function () {
        nowZoom = 100;
        zoomControl.zooms();
        // $(".box_btn_zoom .btn_zoom").text(nowZoom + '%")
    },
    zooms: function () {
        let aUserAgent = navigator.userAgent.toLowerCase();

        if (aUserAgent.indexOf("firefox") >= 0) {
            $("body").css("-moz-transform", "scale(" + nowZoom + "%)");
            $("body").css("-moz-transform-origin", "0 0");
        } else {
            document.body.style.zoom = nowZoom + "%";
        }
        if (nowZoom == 90) {
            // 최소 배율 설정
            alert("더 이상 축소할 수 없습니다.");
        }
        if (nowZoom == 120) {
            // 최대 배율 설정
            alert("더 이상 확대할 수 없습니다.");
        }
    },
};
//////////////////////////////////////////////////////////////
// //header gnb_wide


$(document).ready(function() {
    // PC 버전 GNB 마우스 호버 이벤트
    $(document).on("mouseenter focusin", ".header.gnb_pc .lnb_list .depth01", function () {
        $("html").addClass("open_lnb");
        $(".gnb_pc .lnb_list .depth02").stop().slideDown(200);
        $(".lnb_drop_menu_back").stop().slideDown(200);
        $(".area_top, .area_top_inner p, .box_btns li, .box_btns .btn_zoom.in, .box_btns .btn_zoom.out, .box_btns .btn_zoom.reset, .area_menu, .area_menu, .lnb_list, .depth01, .depth01_item, .depth01_item_anchor, .area_menu .area_menu_inner .logo .logo_anchor").addClass("gnb_mouse_over");
    });

    $(document).on("mouseleave focusout", ".header.gnb_pc .lnb_list .depth01", function () {
        $("html").removeClass("open_lnb");
        $(".gnb_pc .lnb_list .depth02").stop().slideUp(200);
        $(".lnb_drop_menu_back").stop().slideUp(200);
        $(".area_top, .area_top_inner p, .box_btns li, .box_btns .btn_zoom.in, .box_btns .btn_zoom.out, .box_btns .btn_zoom.reset, .area_menu, .area_menu, .lnb_list, .depth01, .depth01_item, .depth01_item_anchor, .area_menu .area_menu_inner .logo .logo_anchor").removeClass("gnb_mouse_over");
    });
});  




// 스크롤 시 메인 비주얼 영역을 벗어나면 헤더 배경색 바뀜
$(document).ready(function() {
    // Apply .gnb_scroll_change class immediately on page load only for #page_main
    if ($("#page_main").length > 0) {
        $(".area_top, .area_top_inner p, .box_btns li, .box_btns .btn_zoom.in, .box_btns .btn_zoom.out, .box_btns .btn_zoom.reset, .area_menu, .area_menu .depth01_item, .area_menu .area_menu_inner .logo .logo_anchor").addClass("gnb_scroll_change");
    }

    $(window).scroll(function() {
        if ($("#page_main").length > 0) {
            // Get the scroll position
            var scrollPosition = $(this).scrollTop();      
            var sectionAppPosition = $("#section_app").offset().top - 100;      

            if (scrollPosition < sectionAppPosition) {
                $(".area_top, .area_top_inner p, .box_btns li, .box_btns .btn_zoom.in, .box_btns .btn_zoom.out, .box_btns .btn_zoom.reset, .area_menu, .area_menu .depth01_item, .area_menu .area_menu_inner .logo .logo_anchor").addClass("gnb_scroll_change");
            } else {    
                $(".area_top, .area_top_inner p, .box_btns li, .box_btns .btn_zoom.in, .box_btns .btn_zoom.out, .box_btns .btn_zoom.reset, .area_menu, .area_menu .depth01_item, .area_menu .area_menu_inner .logo .logo_anchor").removeClass("gnb_scroll_change");
            }
        }
    });
});


  // // nav_dim 클릭 시 메뉴 닫기
    $(document).on("click", ".header .nav_dim", function(e) {
        e.stopPropagation();
        $("html").removeClass("open_lnb");
        $(".gnb_pc .lnb_list").removeClass("on");
        $(".header.gnb_mo").removeClass("on");
        $(".gnb_pc .menu_text .depth02").stop().slideUp(200);
        $(".header.gnb_mo .btn_util_ham").removeClass("on");
        $(".header .menu_search").removeClass("on");
    });


//////////////////////////////////////////////////////////////
// 모바일 헤더 gnb_mob - 1025px 미만 

  // 터치디바이스 - wrap_menus 외 영역 터치 시 메뉴 닫기

    $("html").on("touchend", function(e) {
        if ( !$(e.target).is(".header.gnb_mo .wrap_menus") && $(e.target).is(".nav_dim") ) {
            e.stopPropagation();
            $("html").removeClass("open_lnb");
            $(".header.gnb_mo .btn_util_ham").removeClass("on");
            $(".header .menu_search").removeClass("on");
            $(".header.gnb_mo").removeClass("on");
            $(".header.gnb_mo").removeClass("open_search");
        }
    });


// 햄버거 메뉴 열기 버튼 클릭 시 
$(document).on("click", ".gnb_mo .btn_util_ham", function () {
    $(this).toggleClass("on");

    if ($(this).hasClass("on") === true) {
        $("html").addClass("open_lnb");
        $(".header.gnb_mo").addClass("on");
    } else {
        $("html").removeClass("open_lnb");
        $(".header.gnb_mo").removeClass("on");
    }
});


// 햄버거 메뉴 닫기 버튼 클릭 시 
$(document).on("click", ".header.gnb_mo .btn_close_menu", function () {

    $(".header.gnb_mo").removeClass("on");
    $(".header.gnb_mo .btn_util_ham").removeClass("on");  
    $(".gnb_mo .depth02").stop().slideUp(200);  
    $(".depth01").removeClass("on");

    if ($(".menu_search").hasClass("on") === true) {

    } else {
        $("html").removeClass("open_lnb");
    }
});


// 모바일에서 뎁스 1 클릭 시 링크 이동 금지
$(document).ready(function() {
    // .header의 클래스에 따라 이벤트 리스너를 바인딩합니다.
    if ($('.header').hasClass('gnb_mo')) {
        // gnb_mo 클래스가 있는 경우에만 이벤트 리스너를 바인딩합니다.
        $('.header.gnb_mo .depth01_item_anchor').on('click', function(event) {
            event.preventDefault(); // 링크 이동 기본 동작 막기
            // 이벤트 핸들러 내용 추가
        });
    }
}); 




$(document).ready(function() {
    var isGnbOpen = $(".header.gnb_mo").hasClass("on"); // 페이지 로드 시 GNB가 열려있는지 여부를 확인하여 isGnbOpen 변수 설정
    var isDepth02Open = false; // .depth02가 열려있는지 여부를 추적하는 변수

    $(".header.gnb_mo .btn_util_ham").click(function () {
        // 버튼 클릭 시 GNB가 열렸다면 isGnbOpen 변수 값을 true로 설정
        isGnbOpen = true;

        if ($(this).hasClass("on")) {
            // GNB 열기 로직
            $("html").addClass("open_lnb");
            $(".header.gnb_mo").addClass("on");
            // .depth02가 열려있는 상태 초기화
            isDepth02Open = false;
        } else {
            // GNB 닫기 로직
            $("html").removeClass("open_lnb");
            $(".header.gnb_mo").removeClass("on");
        }
    });

    // GNB 뎁스 1 클릭 시 뎁스 2 열림
    $(".header.gnb_mo .depth01").click(function (event) {
        $(this).toggleClass("on");

        if ($(this).hasClass("on")) {
            // GNB가 열린 경우
            isGnbOpen = true;
            // 다른 요소들의 ".depth02_wrap"을 숨김
            $(".header.gnb_mo .depth01").not(this).removeClass("on");
            $(".header.gnb_mo .depth02").stop().slideUp(200); // 다른 서브메뉴 닫기
            $(this).children(".header.gnb_mo .depth02").stop().slideDown(200);
            // .depth02가 열려있다는 상태 업데이트
            isDepth02Open = true;
        } else {
            // GNB가 닫힌 경우
            isGnbOpen = false;
            // 모든 요소들의 "on" 클래스를 제거하고 서브메뉴를 닫음
            $(".header.gnb_mo .depth01").removeClass("on");
            $(".header.gnb_mo .depth02").stop().slideUp(200);
            // .depth02가 닫혔다는 상태 업데이트
            isDepth02Open = false;
        }
    });


    // 윈도우 리사이즈 이벤트 핸들러
    $(window).resize(function() {
        var windowWidth = $(window).width();    

        if (windowWidth < 1100 && isGnbOpen && isDepth02Open) {
            // 브라우저 창의 너비가 1100px 미만이고 GNB가 열려있고, 이전에 열었던 .depth02가 열려있는 경우
            // .depth02를 닫음
            $(".header.gnb_mo .depth02").stop().slideUp(200);
            // .depth02가 닫혔다는 상태 업데이트
            isDepth02Open = false;

            // GNB 메뉴 초기화
            $(".wrap_gnb.gnb_mo").hide();
            $("html").removeClass("open_lnb");
            $(".header.gnb_mo").removeClass("on");
            $(".header.gnb_mo .depth01").removeClass("on");
        } else if (windowWidth < 1100 && isGnbOpen && !isDepth02Open) {
            // 브라우저 창의 너비가 1100px 미만이고 GNB가 열려있지만 .depth02가 열려있지 않은 경우
            // GNB 메뉴만 초기화
            $(".wrap_gnb.gnb_mo").hide();
            $("html").removeClass("open_lnb");
            $(".header.gnb_mo").removeClass("on");
        }
    }); 
    
}); 


