// $("#menu-btn").click(function() {
//     $(".sidebar").css("display","block");
//     console.log("menu click");
// });

// $(".main").click(function() {
//     $(".sidebar").css("display","none");
//     console.log("main click");
// })


$("#menu-btn").click(function(e) {
    $(".sidebar").css("display","block");
    console.log("menu click");
    e.stopPropagation();
});

$(".main").click(function() {
    $(".sidebar").css("display","none");
    console.log("main click");
})