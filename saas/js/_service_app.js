/* 개방서비스 메뉴 슬라이드 ****************/

/* 뎁스3 메뉴 선택 슬라이드 */
    $(document).ready(function () {
        var swiper = new Swiper('.slide_service', {
            slidesPerView: 1,
            roundLengths: 'false',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                prevEl: '.wrap-slide-box .swiper-button-prev',
                nextEl: '.wrap-slide-box .swiper-button-next',
            },
            // 웹접근성  추가
            // Enable keyboard navigation
            keyboard: {
                enabled: true,
            },
            // Enable ARIA support
            a11y: {
                prevSlideMessage: '이전 슬라이드',
                nextSlideMessage: '다음 슬라이드',
                firstSlideMessage: '처음 슬라이드',
                lastSlideMessage: '마지막 슬라이드',
                
            },
        });
    })
    /* 적용사례 슬라이드 */
    $(document).ready(function () {
        var swiper = new Swiper('.wrap_slide_case', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            roundLengths: 'false',
            freeMode: true,
            pagination: {
                el: '.swiper-pagination_',
                clickable: true,
            },
            navigation: {
                prevEl: '.wrap-slide-box_ .swiper-button-prev',
                nextEl: '.wrap-slide-box_ .swiper-button-next',
            },
            breakpoints: {          
                1024: {              
                    spaceBetween: 35,
                },
            },
            // 웹접근성  추가
            // Enable keyboard navigation
            keyboard: {
                enabled: true,
            },
            // Enable ARIA support
            a11y: {
                prevSlideMessage: '이전 슬라이드',
                nextSlideMessage: '다음 슬라이드',
                firstSlideMessage: '처음 슬라이드',
                lastSlideMessage: '마지막 슬라이드',                
            },
        });
    });


    /* PC: 뎁스3 메뉴 리스트 슬라이드에서 해당 페이지 콘텐츠에 해당하는 메뉴 버튼 선택되어있도록 */
    $(document).ready(function() {
        function applyColoredStyle() {
            $('.swiper-slide').each(function() {
                var articleId = $(this).closest('article').attr('id');    
                var links = $(this).find('a');
    
                // 각 <a> 요소에 대해 반복
                links.each(function() {
                    if ($(this).hasClass(articleId)) {
                        $(this).addClass('colored');
                    }
                });
            });
        }
    
        // 페이지 로드시 스타일을 적용
        applyColoredStyle();
    
        // 페이지 내부 링크 클릭 시에도 스타일을 적용
        $(document).on('click', 'a', function() {
            applyColoredStyle();
        });
    });


    /* mobile: 뎁스3 메뉴 리스트 콤보박스에서 해당 페이지 콘텐츠에 해당하는 옵션 선택되어있도록 */
    $(document).ready(function() {
        var articleId = $('article').attr('id');
        
        $('.service_option').each(function () {
            if ($(this).hasClass(articleId)) {
                $(this).prop('selected', true);
            } else {
                $(this).prop('selected', false);
            }
        });
    });


    