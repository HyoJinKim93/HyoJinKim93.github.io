window.addEventListener('DOMContentLoaded', function () {

    /* scroll event section */
    container.addListener((e) => {


        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if (scrollTop >= 150 && scrollTop <= 1450) {
            $('.detail .view02').addClass('on');
        } else {
            $('.detail .view02').removeClass('on');

        }


        if (scrollTop >= 900 && scrollTop <= 2200) {
            $('.detail .view03-detail1').addClass('on');
        } else {
            $('.detail .view03-detail1').removeClass('on');

        }


        if (scrollTop >= 1200 && scrollTop <= 2400) {
            $('.detail .view03-detail2').addClass('on');
        } else {
            $('.detail .view03-detail2').removeClass('on');

        }


        if (scrollTop >= 1900) {
            $('.detail .bottom').addClass('on');
        } else {
            $('.detail .bottom').removeClass('on');

        }


    });




})
