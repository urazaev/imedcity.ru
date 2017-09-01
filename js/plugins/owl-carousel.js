$(document).ready(function () {



    var owl = $(".owl-carousel");

    owl.owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
//        navigation: true,
        autoPlay: true,
        loop: true,
        margin: 0,
        autoplayTimeout: 500,

    });





});