$(document).ready(function () {
    $('.menu_toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top').toggleClass('open');
    });
    $('.top .nav_link').on('click', function () {
        $('.menu_toggler').removeClass('open');
        $('.top').removeClass('open');
    });
    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate( keyframes, {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, options, 2000);
    });
});
