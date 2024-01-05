$(document).ready(function () {
    $('.about-us__images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        mobileFirst: true,
        arrows: true,
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }],

    });
})
