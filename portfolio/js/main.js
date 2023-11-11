$(document).ready(function(){
    function hoverImg(){
        $('.seoulmilk, .ngo, .shinhan').on('mouseenter', function () {
            $(this).addClass('on');
        })
        $('.seoulmilk, .ngo, .shinhan').on('mouseout', function () {
            $(this).removeClass('on');
        })
    }
    hoverImg();
});