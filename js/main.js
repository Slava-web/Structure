$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__nav').toggleClass('header__active');
        $('body').toggleClass('header__lock') 
    });
});


$(function(){
    $('.intro__slider').slick({
        arrows: false,
        fade: true,
        autoplay: 2000,
        dots: true,
    });
});

$(function() {

    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if(cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {
                let workCat = $(this).data('cat');

                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
});

$(document).ready(function(){
  $('.team__slider').slick({
    arrows: false,
    dots:true,
    slidesToShow: 3,
    speed: 1000,
    centerMode: true,
    variableWidth: true,
  });
});

document.querySelectorAll('a.header__link').forEach(link => {
        link.addEventListener('click', function (e) {
        e.preventDefault()

        const href = this.getAttribute('href').substring(1)

        const scrollTarget = document.getElementById(href)

        const topOffset = 0
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset
            

        window.scrollBy({   
            top: offsetPosition,
            behavior: "smooth"
        }); 
    });
});

