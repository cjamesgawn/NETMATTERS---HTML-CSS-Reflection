
$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $('.slider-controls'),
        speed: 200,
        autoplay: true,
        autoplaySpeed: 4500,
    });   
});


const x = window.matchMedia("(min-width:992px)")

$("#menu-btn").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.hamburger-box').addClass('open');
    if (x.matches) {
        
        $('body').addClass('menu-active');
        $('.main').addClass('main-active');
        $('body').css('overflow','hidden');

    } else {

        $('body').addClass('menu-active');
        $('.main').addClass('main-active');
        $('body').css('overflow','hidden');

    }
});

$(".main").click(function() {
    $('.main').removeClass('main-active');
    $('body').removeClass('menu-active');
    window.setTimeout(() => {
        $('body').css('overflow','auto');
    }, 500);
    $('.hamburger-box').removeClass('open');
});




