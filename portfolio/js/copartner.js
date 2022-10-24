window.addEventListener('DOMContentLoaded', function () {

    /* scroll event section */
    container.addListener((e) => {


        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)



        if (scrollTop >= 150 && scrollTop <= 1400) {
            $('.copartner .section01').addClass('on');
        } else {
            $('.copartner .section01').removeClass('on');

        }

        if (scrollTop >= 700) {
            $('.copartner .section02').addClass('on');
        } else {
            $('.copartner .section02').removeClass('on');

        }


    });




})
