$(document).ready(function(){
    function hoverImg(){
        $('.seoulmilk, .ngo, .shinhan, .slp').on('mouseenter', function () {
            $(this).addClass('on');
        })
        $('.seoulmilk, .ngo, .shinhan, .slp').on('mouseout', function () {
            $(this).removeClass('on');
        })
    }
    hoverImg();
});