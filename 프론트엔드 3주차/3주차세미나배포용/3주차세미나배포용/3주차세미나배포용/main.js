$(document).ready(function () {
    console.log('CLICK');
    $(".logo_btn").click(function () {
        $(".navbar_menu").toggleClass("active");
        $(".navbar_links").toggleClass("active");
    });
});