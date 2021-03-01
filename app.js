
const x = window.matchMedia("(min-width:992px)")

$("#menu-btn").click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    if (x.matches) {
        
        if($('body').hasClass('menu-active')){
            $('body').removeClass('menu-active');
            $('body').css('overflow','auto');
            $('.main').css('transform','translateX(0)');
    
        } else {

            $('body').addClass('menu-active');
            $('body').css('overflow','hidden');
            $('.main').css('transform','translateX(-350px)');
    
        }
    } else if($('body').hasClass('menu-active')){

        $('body').removeClass('menu-active');
        $('body').css('overflow','auto');
        $('.main').css('transform','translateX(0)');

    } else {

        $('body').addClass('menu-active');
        $('body').css('overflow','hidden');
        $('.main').css('transform','translateX(-275px)');
    }

});

$(".main").click(function() {
    $('.main').css('transform','translateX(0)');
    $('body').removeClass('menu-active');
    $('body').css('overflow','auto');
    $('.hamburger-box').removeClass('open');
});


$('#menu-btn').click(function(){
    $('.hamburger-box').addClass('open');
});


$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $('.slider-controls'),
        speed: 200,
    });   
});