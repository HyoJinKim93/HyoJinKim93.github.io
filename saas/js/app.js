// // top_btn
// $(window).scroll(function () {

//     // console.log($(this).scrollTop())

//     if ($(this).scrollTop() > 600) {
//         $(".wrap_side_btn").fadeIn();
//         // } else if ($(this).scrollTop()  < 600 && $(this).scrollTop() > 100 ) {
//     } else if ($(this).scrollTop() < 600) {
//         $(".wrap_side_btn").fadeOut();
//     }
// });

// $(document).on("click", ".wrap_side_btn .btn_top", function () {
//   // $(document).on("click",".top_btn", function () {
//     $("html, body").stop().animate({    
//         scrollTop: 0,
//     },
//     "500"
//     );
//     return false;
// });


$(window).scroll(function () {

    
    var scrollTop = $(this).scrollTop();

    // btn_side_sup01, btn_side_sup02는 항상 보이도록 설정
    $(".btn_side_sup01, .btn_side_sup02").fadeIn();

    // 스크롤 위치가 600px 초과일 때만 btn_side_sup03 보이기
    if (scrollTop > 600) {
        $(".btn_side_sup03").addClass("show"); // .show 클래스를 추가하여 효과 적용
    } else {
        $(".btn_side_sup03").removeClass("show"); // .show 클래스를 제거하여 버튼 숨김
    }
});

// 최상단 이동 버튼 클릭 시
$(document).on("click", ".wrap_side_btn .btn_top", function () {
    $("html, body").stop().animate({
        scrollTop: 0
    }, 500);
    return false;
});
