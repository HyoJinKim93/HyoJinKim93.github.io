window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

    });
    function gnb(){
        $(".gnb").hide();
        $(".all-menu a").on("click",function(){
            $(".header .gnb").show();
        })
        $(".gnb .close").on("click",function(){
            $(".header .gnb").hide();
        })
    }
    gnb()
    // gnb 메뉴인터랙션
    function gnbInterac(){
        $('.all-menu').on('mouseover', function () {
            $(this).addClass('on').removeClass('off');
        })
    }
    gnbInterac()
    
    function followSelect(){
        const label = document.querySelectorAll('.label');
        label.forEach(function(lb){
            lb.addEventListener('click', e => {
                let optionList = lb.nextElementSibling;
                let optionItems = optionList.querySelectorAll('.item');
                clickLabel(lb, optionItems);
            })
        });
        const clickLabel = (lb, optionItems) => {
            if(lb.parentNode.classList.contains('active')) {
                lb.parentNode.classList.remove('active');
                optionItems.forEach((opt) => {
                    opt.removeEventListener('click', () => {
                        handleSelect(lb, opt)
                    })
                })
            } else {
                lb.parentNode.classList.add('active');
                optionItems.forEach((opt) => {
                    opt.addEventListener('click', () => {
                        handleSelect(lb, opt)
                    })
                })
            }
        }
        const handleSelect = (label, item) => {
            label.innerHTML = item.textContent;
            label.parentNode.classList.remove('active');
        }
    }
    followSelect()

    /*  slide,click event section */






    gsap.to('.history #area01 .fix-this-01', {
        scrollTrigger: {
            trigger: ".history #area01 .trigger-this-01",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });


    //scene01 title
    gsap.to('.history-list .box-wrap .box01 .intro .tit', { 
        ClipPath:'inset(0% 0% 0% 0%)',
        scrollTrigger: {
            trigger: ".history #area01",
            start: "top top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('.history-list .box-wrap .box01 .intro .inner-box', { 
        scale:1,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "500 top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    //scene01 전체
    gsap.to('.history-list .box-wrap .box01', { //움직일 대상
        // opacity:1,
        x:-1894,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "1500 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    //scene01 년도
    gsap.to('.history-list .box-wrap .box01 .scene', { //움직일 대상
        opacity:1,
        x:-2850,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "800 top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    
    
    //scene02
    gsap.to('.history-list .box-wrap .box02', { //움직일 대상
        // opacity:1,
        x:0,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "1350 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    
    gsap.to('.history-list .box-wrap .box02 .intro .tit', { 
        ClipPath:'inset(0% 0% 0% 0%)',
        scrollTrigger: {
            trigger: ".history #area01",
            start: "1950 top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('.history-list .box-wrap .box02 .intro .inner-box', { 
        scale:1,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "500 top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('.history-list .box-wrap .box02 .scene', { //움직일 대상
        opacity:1,
        x:-3100,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "2000 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('.history-list .box-wrap .box02', { //움직일 대상
        left:-1894,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "2700 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    
    
    
    //scene03
    gsap.to('.history-list .box-wrap .box03', { //움직일 대상
        // opacity:1,
        x:0,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "2600 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    
    gsap.to('.history-list .box-wrap .box03 .intro .tit', { 
        ClipPath:'inset(0% 0% 0% 0%)',
        scrollTrigger: {
            trigger: ".history #area01",
            start: "2600 top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('.history-list .box-wrap .box03 .intro .inner-box', { 
        scale:1,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "500 top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('.history-list .box-wrap .box03 .scene', { //움직일 대상
        opacity:1,
        x:-6000,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "3600 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('.history-list .box-wrap .box03', { //움직일 대상
        left:-3650,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "4350 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    
    
    //scene04
    gsap.to('.history-list .box-wrap .box04', { //움직일 대상
        // opacity:1,
        x:0,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "4450 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    
    gsap.to('.history-list .box-wrap .box04 .intro .tit', { 
        ClipPath:'inset(0% 0% 0% 0%)',
        scrollTrigger: {
            trigger: ".history #area01",
            start: "4450 top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('.history-list .box-wrap .box04 .intro .inner-box', { 
        scale:1,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "500 top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('.history-list .box-wrap .box04 .scene', { //움직일 대상
        opacity:1,
        x:-6700,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "5650 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('.history-list .box-wrap .box04', { //움직일 대상
        left:-5850,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "6350 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });



    
    //scene05
    gsap.to('.history-list .box-wrap .box05', { //움직일 대상
        // opacity:1,
        x:0,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "6200 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });
    
    gsap.to('.history-list .box-wrap .box05 .intro .tit', { 
        ClipPath:'inset(0% 0% 0% 0%)',
        scrollTrigger: {
            trigger: ".history #area01",
            start: "6200 top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('.history-list .box-wrap .box05 .intro .inner-box', { 
        scale:1,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "500 top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('.history-list .box-wrap .box05 .scene', { //움직일 대상
        opacity:1,
        x:-912,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "7050 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    //
    // gsap.to('.history-list .box-wrap .box05', { //움직일 대상
    //     left:-7500,
    //     scrollTrigger: {
    //         trigger: ".history #area01",
    //         start: "7050 top",
    //         end: () => "+=" + 1000,
    //         // end: 'bottom bottom',
    //         scrub: true,
    //     }
    // });
    //
    
    
    
    let sc01 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01,
        trigger: "#area01",
        start: "top top",
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: self => {
        }
    });


    sc01.to(".history .progress .theme:nth-child(1) .bar .pg_bar", {width:'213px',});
    sc01.to(".history .progress .theme:nth-child(2) .bar .pg_bar", {width:'213px',});
    sc01.to(".history .progress .theme:nth-child(3) .bar .pg_bar", {width:'213px',});
    sc01.to(".history .progress .theme:nth-child(4) .bar .pg_bar", {width:'213px',});
    sc01.to(".history .progress .theme:nth-child(5) .bar .pg_bar", {width:'213px',});











})


