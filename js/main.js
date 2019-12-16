$(function () {
    /**
     * Tile slider - homepage
     * */
    $('.tile-slider').slick({
        infinite: true,
        arrows: false,
        draggable: false
    });

    /* sponsor slider steppers */
    $(".tile-slider-wrapper").find('.prev').on('click', function () {
        $('.tile-slider').slick('slickPrev');
    });

    $(".tile-slider-wrapper").find('.next').on('click', function () {
        $('.tile-slider').slick('slickNext');
    });

    /**
     * Sponsor slider init
     */
    $('.sponsors-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    /* sponsor slider steppers */
    $(".sponsors").find('.prev').on('click', function () {
        $('.sponsors-slider').slick('slickPrev');
    });

    $(".sponsors").find('.next').on('click', function () {
        $('.sponsors-slider').slick('slickNext');
    });

});
