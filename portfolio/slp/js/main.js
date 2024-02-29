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

        if (scrollTop >= 1900 && scrollTop <= 3500) {
            $('#section04, #section04 .contents').addClass('on');
        } else {
            $('#section04, #section04 .contents').removeClass('on');
        }
        if (scrollTop >= 3300 && scrollTop <= 4500) {
            $('#section05').addClass('on');
        } else {
            $('#section05').removeClass('on');

        }

        if (scrollTop >= 4400 && scrollTop <= 5800) {
            $('#section06').addClass('on');
        } else {
            $('#section06').removeClass('on');

        }
        if (scrollTop >= 5700 && scrollTop <= 8500) {
            $('#section07').addClass('on');
        } else {
            $('#section07').removeClass('on');

        }
        if (scrollTop >= 8600 && scrollTop <= 10100) {
            $('#section08').addClass('on');
        } else {
            $('#section08,').removeClass('on');

        }

        if (scrollTop >= 9900 && scrollTop <= 12000) {
            $('#section09').addClass('on');
        } else {
            $('#section09').removeClass('on');

        }

        if (scrollTop >= 10800 && scrollTop <= 13000) {
            $('#section10').addClass('on');
        } else {
            $('#section10').removeClass('on');

        }

        if (scrollTop >= 12100 && scrollTop <= 14000) {
            $('#section11').addClass('on');
        } else {
            $('#section11').removeClass('on');
        }
        
        if (scrollTop >= 13000 && scrollTop <= 15000) {
            $('#section12').addClass('on');
        } else {
            $('#section12').removeClass('on');
        }

        if (scrollTop >= 16400 && scrollTop <= 19000) {
            $('#section14').addClass('on');
        } else {
            $('#section14').removeClass('on');
        }

        if (scrollTop >= 18213 && scrollTop <= 25000) {
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

        if (scrollTop >= 26600 && scrollTop <= 30000) {
            $('#section18').addClass('on');
        } else {
            $('#section18').removeClass('on');
        }

        if (scrollTop >= 29000 && scrollTop <= 35000) {
            $('#section19').addClass('on');
        } else {
            $('#section19').removeClass('on');
        }

        if (scrollTop >= 28800 && scrollTop <= 40000) {
            $('#section20').addClass('on');
        } else {
            $('#section20').removeClass('on');
        }
        if (scrollTop >= 36862 && scrollTop <= 42000) {
            $('#section21').addClass('on');
        } else {
            $('#section21').removeClass('on');
        }
        if (scrollTop >= 36780 && scrollTop <= 48000) {
            $('#section22').addClass('on');
        } else {
            $('#section22').removeClass('on');
        }
        if (scrollTop >= 40700 && scrollTop <= 46000) {
            $('#section23').addClass('on');
            $('#section23').addClass('bounce02');
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
