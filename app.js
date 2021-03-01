
const x = window.matchMedia("(min-width:992px)")

$("#menu-btn").click(function(e) {
    //$(".main").css("background-color","rgba(0,0,0,0.5)");
    // console.log("menu click");
    e.preventDefault();
    e.stopPropagation();

    if (x.matches) {
        
        if($('body').hasClass('menu-active')){

            $('body').removeClass('menu-active');
            $('body').css('overflow','auto');
            //$('.sidebar').css('transform','translateX(135%)');
            $('.main').css('transform','translateX(0)');
    
        } else {
    
            $('body').addClass('menu-active');
            $('body').css('overflow','hidden');
            //$('.sidebar').css('transform','translateX(0)');
            $('.main').css('transform','translateX(-350px)');
    
        }
    } else if($('body').hasClass('menu-active')){

    $('body').removeClass('menu-active');
    $('body').css('overflow','auto');
    //$('.sidebar').css('transform','translateX(135%)');
    $('.main').css('transform','translateX(0)');

    } else {

        $('body').addClass('menu-active');
        $('body').css('overflow','hidden');
        //$('.sidebar').css('transform','translateX(0)');
        $('.main').css('transform','translateX(-275px)');

    }
});

$(".main").click(function() {
    $('.main').css('transform','translateX(0)');
    $('body').removeClass('menu-active');
    // console.log("main click");
    $('body').css('overflow','auto');
    //$('.sidebar').css('transform','translateX(135%)');

});

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $('.slider-controls'),
    });
});