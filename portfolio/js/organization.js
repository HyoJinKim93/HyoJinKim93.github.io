window.addEventListener('DOMContentLoaded', function () {

    /* scroll event section */
    container.addListener((e) => {


        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)



        if (scrollTop >= 350) {
            $('.organization .section01').addClass('on');
        } else {
            $('.organization .section01').removeClass('on');

        }


    });




})
