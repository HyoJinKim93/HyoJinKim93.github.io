window.addEventListener('DOMContentLoaded', function () {

    /* scroll event section */
    container.addListener((e) => {


        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)



        if (scrollTop >= 200 && scrollTop <= 1600) {
            $('.cooperate .section01').addClass('on');
        } else {
            $('.cooperate .section01').removeClass('on');

        }

        if (scrollTop >= 1150 && scrollTop <= 3000) {
            $('.cooperate .section02').addClass('on');
        } else {
            $('.cooperate .section02').removeClass('on');

        }

        if (scrollTop >= 2700) {
            $('.cooperate .section03').addClass('on');
        } else {
            $('.cooperate .section03').removeClass('on');

        }

        if (scrollTop >= 4300) {
            $('.cooperate .section04').addClass('on');
        } else {
            $('.cooperate .section04').removeClass('on');

        }



    });




})
