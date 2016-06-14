$(document).ready(function() {


    $("body").css({"padding-top": $(".header-bg").outerHeight(true) + "px"});

    var descritionHeight;
    var indexCount;

    getScrollToTopBtn();

    $(document).scroll(function() {

        getScrollToTopBtn();

    });


        $(".swipper-slider-main").css({"width": $(window).width() + "px"});
        $(".swiper-container").css({"width": $(window).width() + "px"});
        $(".slider-sw").css({"width": $(window).width() + "px"});

    $(window).resize(function() {

        $("body").css({"padding-top": $(".header-bg").height() + "px"});

        $(".swipper-slider-main").css({"width": $(window).width() + "px"});
        $(".swiper-container").css({"width": $(window).width() + "px"});
        $(".slider-sw").css({"width": $(window).width() + "px"});

    });



    if ( $(".categories .categorybox .cat-itembg .good a").next(".catlistheight") ) {

        categoryLink = $(".categories .categorybox .cat-itembg .good a").next(".catlistheight");

        categoryLink.prev("a").addClass("catname");

        categoryLink.prev("a").after( "<i class='arrowcat glyphicon glyphicon-menu-down'></i>" );

    }




    $(".icon-plus").click(function(){

        indexCount = $( ".icon-plus" ).index( this );

        countCustomers = parseFloat($(".count-inpt:eq("+indexCount+")").val());

        if( countCustomers <= 0 || !$.isNumeric(countCustomers) ) {
    
            countCustomers = 1;
        
        } else {

            ++countCustomers;

        }

        $(".count-inpt:eq("+indexCount+")").val(countCustomers);

    });

    

    $(".icon-minus").click(function(){

        indexCount = $( ".icon-minus" ).index( this );

        countCustomers = parseFloat($(".count-inpt:eq("+indexCount+")").val());

        if( countCustomers <= 0 || !$.isNumeric(countCustomers) ) {
            
            countCustomers = 0;
            
        } else {

            --countCustomers;

        }

        $(".count-inpt:eq("+indexCount+")").val(countCustomers);

    });


    $(".list-btn").click(function() {

        $(".good-cart-img").css({"width": 50 + "%"});
        $(".goodcart-dec").css({"width": 50 + "%"});        
        $(".goodcart-dec h3").css({"font-size": 11 + "px"});
        
    });



    $(".cart-btn").click(function() {

        $(".good-cart-img").css({"width": 100 + "%"});
        $(".goodcart-dec").css({"width": 100 + "%"});
        $(".goodcart-dec h3").css({"font-size": 14 + "px"});

    });


    $(".desc-btn").click(function() {

        descritionHeight = $(".descriptions").height();

        if ( $(".descriptions-hover").height() > 0 ) {

            $(".descriptions-hover").animate({"height": 0}, 300);

            if ($(".desc-btn .arrow-down").hasClass("glyphicon-triangle-top")) {

                $(".desc-btn .arrow-down").removeClass("glyphicon-triangle-top");

                $(".desc-btn .arrow-down").addClass("glyphicon-triangle-bottom");

            }

        } else {

           $(".descriptions-hover").animate({"height": descritionHeight + "px"}, 300);

           if ($(".desc-btn .arrow-down").hasClass("glyphicon-triangle-bottom")) {

                $(".desc-btn .arrow-down").removeClass("glyphicon-triangle-bottom");

                $(".desc-btn .arrow-down").addClass("glyphicon-triangle-top");

            }

        }        

    });



    $(".testimonials-btn").click(function() {

        testimonialsHeight = $(".testimonials").height();

        if ( $(".testimonials-hover").height() > 0 ) {

            $(".testimonials-hover").animate({"height": 0}, 300);

            if ($(".testimonials-btn .arrow-down").hasClass("glyphicon-triangle-top")) {

                $(".testimonials-btn .arrow-down").removeClass("glyphicon-triangle-top");

                $(".testimonials-btn .arrow-down").addClass("glyphicon-triangle-bottom");

            }

        } else {

           $(".testimonials-hover").animate({"height": testimonialsHeight + "px"}, 300);

            if ($(".testimonials-btn .arrow-down").hasClass("glyphicon-triangle-bottom")) {

                $(".testimonials-btn .arrow-down").removeClass("glyphicon-triangle-bottom");

                $(".testimonials-btn .arrow-down").addClass("glyphicon-triangle-top");

            }

        }        

    });


   // Show or hide ".scroll-to-top" button 
    function getScrollToTopBtn() {

        if ($(window).scrollTop() > $('.head-section').height() ) {

            $('.scroll-to-top').fadeIn();

        } else {

            $('.scroll-to-top').fadeOut();

        }

    }


    $('.scroll-to-top').click(function () {

        $('body,html').animate({

            scrollTop: 0

        }, 1000);

        return false;

    });


});