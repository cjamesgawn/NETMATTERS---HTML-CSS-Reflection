// $("#menu-btn").click(function() {
//     $(".sidebar").css("display","block");
//     console.log("menu click");
// });

// $(".main").click(function() {
//     $(".sidebar").css("display","none");
//     console.log("main click");
// })


$("#menu-btn").click(function(e) {
    //$(".main").css("background-color","rgba(0,0,0,0.5)");
    // console.log("menu click");
    e.preventDefault();
    e.stopPropagation();

    if($('body').hasClass('menu-active')){

    $('body').removeClass('menu-active');
    $('body').css('overflow','auto');
    $('.sidebar').css('transform','translateX(135%)');
    $('.main').css('transform','translateX(0)');




    }
    
    else {

        $('body').addClass('menu-active');
        $('body').css('overflow','hidden');
        $('.sidebar').css('transform','translateX(0)');
        $('.main').css('transform','translateX(-350px)');


    }


});

$(".main").click(function() {
    $('.main').css('transform','translateX(0)');
    $('body').removeClass('menu-active');
    // console.log("main click");
    $('body').css('overflow','auto');
    $('.sidebar').css('transform','translateX(135%)');


});

// $("#menu-btn").click(function(e) {
//     // $(".sidebar").css("display","block");
//     $(".sidebar").animate({width:'toggle'},500);
//     $(".main").css("marginRight","350px");
//     console.log("menu click");
//     e.stopPropagation();
// });

// $(".main").click(function() {
//     // $(".sidebar").css("display","none");
//     $(".sidebar").animate({width:'toggle'},500);
//     $(".main").css("marginRight","0");
//     console.log("main click");
// })