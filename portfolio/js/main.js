$(document).ready(function(){
    function hoverImg(){
        $('.seoulmilk, .ngo, .shinhan, .slp, .pdf').on('mouseenter', function () {
            $(this).addClass('on');
        })
        $('.seoulmilk, .ngo, .shinhan, .slp, .pdf').on('mouseout', function () {
            $(this).removeClass('on');
        })
    }
    hoverImg();
});
