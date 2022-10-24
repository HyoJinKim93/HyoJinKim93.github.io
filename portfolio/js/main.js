window.addEventListener('DOMContentLoaded', function () {

    /* scroll event section */
    container.addListener((e) => {


        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)



        if (scrollTop >= 413 && scrollTop <= 1800) {
            $('.main #section02').addClass('on');
        } else {
            $('.main #section02').removeClass('on');

        }

        if (scrollTop >= 1600 && scrollTop <= 2700) {
            $('.main #section03').addClass('on');
        } else {
            $('.main #section03').removeClass('on');

        }


        if (scrollTop >= 2300 && scrollTop <= 3500) {
            $('.main #section04').addClass('on');
        } else {
            $('.main #section04').removeClass('on');

        }

        if (scrollTop >= 3100) {
            $('.main #section05').addClass('on');
        } else {
            $('.main #section05').removeClass('on');

        }




    });


    /*  slide,click event section */
    const swiper = new Swiper('.best-swiper', {
        speed: 600,
        slidesPerView: 'auto',
        // slidesOffsetBefore: 46,
        // slidesOffsetAfter: 70,
        spaceBetween: 170,
        width: '560px',
        loop: true,
        keyboard: {
            enable: true,
        },
        navigation: {
            nextEl: ".best .swiper-button-next",
            prevEl: ".best .swiper-button-prev",
        },
        pagination: {
            el: ".best .swiper-pagination",
            clickable: true,
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<span class="current' + '">' + current + '</span>' + '<span class="slash' + '">' + '</span>' + '<span class="total' + '">' + total + '</span>';
            }
            // type: "fraction",
        },
    });
    const swiper2 = new Swiper('.event-swiper', {
        speed: 400,
        slidesPerView: 2,
        // width: '399px',
        spaceBetween: 98,
        centeredSlides: true,
        keyboard: {
            enable: true,
        },
        navigation: {
            nextEl: ".event .swiper-button-next",
            prevEl: ".event .swiper-button-prev",
        },
    });
    const swiper3 = new Swiper('.follow-swiper', {
        speed: 400,
        slidesPerView: 3,
        // width: '399px',
        spaceBetween: 42,
        keyboard: {
            enable: true,
        },
    });


    gsap.to('#section01 .fix-this-01', {
        scrollTrigger: {
            trigger: "#section01 .trigger-this-01",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
            markers: true
        }
    });




})
