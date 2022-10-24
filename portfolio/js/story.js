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


    gsap.to('.history-list .box-wrap .intro .tit', { //움직일 대상
        ClipPath:'inset(0% 0% 0% 0%)',
        scrollTrigger: {
            trigger: ".history #area01",
            start: "top top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('.history-list .box-wrap .intro .inner-box', { //움직일 대상
        scale:1,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "500 top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('.history-list .box-wrap .scene-list', { //움직일 대상
        opacity:1,
        x:-300,
        scrollTrigger: {
            trigger: ".history #area01",
            start: "800 top",
            end: () => "+=" + 800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });







})


