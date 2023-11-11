window.addEventListener('DOMContentLoaded', function () {

    setTimeout(() => {
        $('#section01').addClass('on');
    }, 1000)
    setTimeout(() => {
        $('#section02').addClass('on');
        /*var overviewString = "OVERVIEW";
        var overview = overviewString.split("");
        var el = document.getElementById('overview');
        (function animate() {
            overview.length > 0 ? el.innerHTML += overview.shift() : clearTimeout(running);
            var running = setTimeout(animate, 200);
        })();*/
    }, 1000)
    setTimeout(() => {
        $('#section07').addClass('on');
    }, 4000)
    setTimeout(() => {
        $('#section12').addClass('on');
    }, 2000)

    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        if (scrollTop >= 400 && scrollTop <= 1790) {
            $('#section02').addClass('on');
        } else {
            $('#section02').removeClass('on');

        }

        if (scrollTop >= 1450 && scrollTop <= 2400) {
            $('#section03, #section03 .img-wrap').addClass('on');
        } else {
            $('#section03, #section03 .img-wrap').removeClass('on');

        }

        if (scrollTop >= 2400 && scrollTop <= 3800) {
            $('#section04 .asis, #section04 .tobe').addClass('on');
        } else {
            $('#section04 .asis, #section04 .tobe').removeClass('on');
        }
        if (scrollTop >= 3300 && scrollTop <= 6000) {
            $('#section05').addClass('on');
        } else {
            $('#section05').removeClass('on');

        }

        if (scrollTop >= 4400 && scrollTop <= 5800) {
            $('#section06').addClass('on');
        } else {
            $('#section06').removeClass('on');

        }
        if (scrollTop >= 5700 && scrollTop <= 6300) {
            $('#section07').addClass('on');
        } else {
            $('#section07').removeClass('on');

        }
        if (scrollTop >= 6300 && scrollTop <= 7400) {
            $('#section08, #section08 ul').addClass('on');
        } else {
            $('#section08, #section08 ul').removeClass('on');

        }

        if (scrollTop >= 7000 && scrollTop <= 8400) {
            $('#section09').addClass('on');
        } else {
            $('#section09').removeClass('on');

        }

        if (scrollTop >= 7965 && scrollTop <= 9652) {
            $('#section10 h2, #section10 .sub-tit, #section10 .senario').addClass('on');
        } else {
            $('#section10 h2, #section10 .sub-tit, #section10 .senario').removeClass('on');

        }

        if (scrollTop >= 8700 && scrollTop <= 13570) {
            $('#section11').addClass('on');
        } else {
            $('#section11').removeClass('on');
        }
        if (scrollTop >= 9676 && scrollTop <= 13570) {
            $('#section12').addClass('on');
        } else {
            $('#section12').removeClass('on');
        }
        if (scrollTop >= 13470 && scrollTop <= 17214) {
            $('#section13').addClass('on');
        } else {
            $('#section13').removeClass('on');
        }

        if (scrollTop >= 17169 && scrollTop <= 18269) {
            $('#section14').addClass('on');
        } else {
            $('#section14').removeClass('on');
        }

        if (scrollTop >= 18213 && scrollTop <= 20000) {
            $('#section15').addClass('on');
        } else {
            $('#section15').removeClass('on');
        }
        if (scrollTop >= 20000 && scrollTop <= 30000) {
            $('#section16').addClass('on');
        } else {
            $('#section16').removeClass('on');
        }

        if (scrollTop >= 21500 && scrollTop <= 30000) {
            $('#section17').addClass('on');
        } else {
            $('#section17').removeClass('on');
        }

        if (scrollTop >= 24513 && scrollTop <= 30000) {
            $('#section19').addClass('on');
        } else {
            $('#section19').removeClass('on');
        }

        if (scrollTop >= 28362 && scrollTop <= 30000) {
            $('#section21').addClass('on');
        } else {
            $('#section21').removeClass('on');
        }
        if (scrollTop >= 29780 && scrollTop <= 38000) {
            $('#section22').addClass('on');
        } else {
            $('#section22').removeClass('on');
        }
        if (scrollTop >= 31224 && scrollTop <= 40000) {
            $('#section23').addClass('on');
            $('#section23 .girl').addClass('bounce02');
        } else {
            $('#section23').removeClass('on');
            $('#section23 .girl').removeClass('bounce02');
        }
        if (scrollTop >= 37000 && scrollTop <= 42000) {
            $('#section24').addClass('on');
        } else {
            $('#section24').removeClass('on');
        }
        if (scrollTop >= 42942 && scrollTop <= 46000) {
            $('#section25').addClass('on');
        } else {
            $('#section25').removeClass('on');
        }
        if (scrollTop >= 44789 && scrollTop <= 50000) {
            $('#section26').addClass('on');
        } else {
            $('#section26').removeClass('on');
        }
        if (scrollTop >= 52932 && scrollTop <= 56000) {
            $('#section29').addClass('on');
        } else {
            $('#section29').removeClass('on');
        }









    });



    /*  slide,click event section */



})
