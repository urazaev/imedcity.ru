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



            // Validation
            $("#booking-form").validate({
                // Rules for form validation
                rules: {
                    firstname: {
                        required: true
                    },
                    lastname: {
                        required: true
                    },
                    quantity: {
                        required: true
                    },
                    telephone: {
                        required: true,
                        digits: true
                    },
                    email: {
                        required: true,
                        email: true
                    }
                },

                // Messages for form validation
                messages: {
                    firstname: {
                        required: 'Введите ваше имя'
                    },
                    lastname: {
                        required: 'Введите фамилию'
                    },
                    quantity: {
                        required: 'Введите кличество человек'
                    },
                    telephone: {
                        required: 'Введите телефон',
                        digits: 'Только цифры'
                    },
                    email: {
                        required: 'Введите email',
                        email: 'Введите корректный email'
                    }
                },

                // Ajax form submition                  
                submitHandler: function (form) {
                    $(form).ajaxSubmit({
                        beforeSend: function () {
                            $('#booking-form button[type="submit"]').attr('disabled', true);
                        },
                        success: function () {
                            $("#booking-form").addClass('submited');
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