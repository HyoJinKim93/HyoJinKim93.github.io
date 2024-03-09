
$(document).ready(function(){
    function hoverImg(){
        $('.seoulmilk, .ngo, .shinhan, .slp, .pdf').on('mouseenter', function () {
            $(this).addClass('on');
        })
        $('.seoulmilk, .ngo, .shinhan, .slp, pdf').on('mouseout', function () {
            $(this).removeClass('on');
        })
    }
    hoverImg();
});
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));