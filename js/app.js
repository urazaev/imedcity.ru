$(document).ready(function () {

    var owl = $(".owl-carousel");

    owl.owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: true,
        autoPlay: true,
        loop: true,
        margin: 0,
        autoplayTimeout: 500,
        navigationText: [
              "<i class='fa fa-chevron-left'></i>",
              "<i class='fa fa-chevron-right'></i>"
          ]
    });
});


// https://developers.google.com/maps/documentation/javascript/examples/
function initMap() {
    var customMapType = new google.maps.StyledMapType();

    var image = new google.maps.MarkerImage(
        'assets/img/marker.png',
        new google.maps.Size(48, 54),
        new google.maps.Point(0, 0),
        new google.maps.Point(24, 54)
    );

    var customMapTypeId = 'custom_style';

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        scrollwheel: false,
        center: {
            lat: 55.805143,
            lng: 37.589765
        }, // 
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        }
    });

    var infowindow = new google.maps.InfoWindow;
    infowindow.setContent('<b>Мы здесь</b>');

    var marker = new google.maps.Marker({
        map: map,
        clickable: false,
        icon: image,
        position: {
            lat: 55.805143,
            lng: 37.589765
        }
    });

    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
}
var ContactForm = function () {

    return {

        //Contact Form
        initContactForm: function () {
            // Validation
            $("#footer-form").validate({
                // Rules for form validation
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 10
                    }
                },

                // Messages for form validation
                messages: {
                    email: {
                        required: 'Введите email',
                        email: 'Введите корректный email'
                    },
                    message: {
                        required: 'Введите сообщение',
                        minlength: 'Минимум 10 символов'
                    }
                },

                // Ajax form submition                  
                submitHandler: function (form) {
                    $(form).ajaxSubmit({
                        beforeSend: function () {
                            $('#footer-form button[type="submit"]').attr('disabled', true);
                        },
                        success: function () {
                            $("#footer-form").addClass('submited');
                        }
                    });
                },

                // Do not change code below
                errorPlacement: function (error, element) {
                    error.insertAfter(element.parent());
                }
            });



            $("#contacts-page").validate({
                // Rules for form validation
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    tel: {
                        required: true,
                        digits: true
                    },
                    message: {
                        required: true,
                        minlength: 10
                    }
                },

                // Messages for form validation
                messages: {
                    name: {
                        required: 'Введите ваше имя',
                    },
                    email: {
                        required: 'Введите email',
                        email: 'Введите корректный email'
                    },
                    message: {
                        required: 'Введите сообщение',
                        minlength: 'Минимум 10 символов'
                    },
                    tel: {
                        required: 'Введите телефон',
                        digits: 'Только цифры'
                    }
                },

                // Ajax form submition                  
                submitHandler: function (form) {
                    $(form).ajaxSubmit({
                        beforeSend: function () {
                            $('#contacts-page button[type="submit"]').attr('disabled', true);
                        },
                        success: function () {
                            $("#contacts-page").addClass('submited');
                        }
                    });
                },

                // Do not change code below
                errorPlacement: function (error, element) {
                    error.insertAfter(element.parent());
                }
            });




        }

    };

}();

var FancyBox = function () {
    return {
            
        //Fancybox
        initFancybox: function () {
            jQuery(".fancybox-button").fancybox({
            groupAttr: 'data-rel',
            prevEffect: 'none',
            nextEffect: 'none',
            closeBtn: true,
            helpers: {
                title: {
                    type: 'inside'
                    }
                }
            });

            jQuery(".iframe").fancybox({
                maxWidth    : 800,
                maxHeight   : 600,
                fitToView   : false,
                width       : '60%',
                height      : '60%',
                autoSize    : false,
                closeClick  : false,
                openEffect  : 'none',
                closeEffect : 'none'
            });            
        },
    };

}();        