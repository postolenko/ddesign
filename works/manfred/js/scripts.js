$(document).ready(function() {

    getScrollToTopBtn();

    $(document).scroll(function() {

        getScrollToTopBtn();

    });


    $(window).resize(function() {

        $(".right-col-footer").height($("footer .row").height());
        $(".left-col-footer").height($("footer .row").height());

    });


    $(".right-col-footer").height($("footer .row").height());
    $(".left-col-footer").height($("footer .row").height());

    $(".scroll-down").click(function() {

        $('body,html').animate({

            scrollTop: $(".header-bg").outerHeight()

        }, 1000);

        return false;

    });


    $(".make-onlineenter").on("click", function(e) {

        e.preventDefault();

    });


    $(".make-onlineenter").click(function() {

        if ( $(".header-bg div").hasClass("online-entry-box") != true ) {

            $(".header-bg").append("<div class='online-entry-box'></div>");

            $(".online-entry-box").load("online_enter.html", function() {

                    $(".close-onlineenter-btn").click(function() {

                        $(".online-entry-box").fadeOut(300);

                    });


            });

        }

        $(".online-entry-box").fadeIn(600);

    });




        $(".soc-link-btn").click(function() {

            if( $(".soc-link-nav-box").offset().top < 0 ) {

                $(".soc-link-nav-box").stop().animate({"top": 0}, 900);

            }

        });

        $(".close-socialnets").click(function() {

            if( $(".soc-link-nav-box").offset().top >= 0 ) {

                $(".soc-link-nav-box").stop().animate({"top": -150 + "%" }, 900);

            }

        });





        $(".online-entry").click(function() {

            if( $(".online-entry-nav-box").offset().left > $(window).width() ) {

                $(".online-entry-nav-box").stop().animate({"right": 0}, 900);

            }

        });

        $(".responline-entry-btn").click(function() {

            if( $(".online-entry-nav-box").offset().left < $(window).width() ) {

                $(".online-entry-nav-box").stop().animate({"right": -110 + "%" }, 900);

            }

        });




    // Show or hide ".scroll-to-top" button

    function getScrollToTopBtn() {

        if ( $(window).scrollTop() > $(".head-section").height() ) {

            $(".scroll-to-top").fadeIn();

        } else {

            $(".scroll-to-top").fadeOut();

        }

    }


    $(".scroll-to-top").click(function () {

        $("body,html").animate({

            scrollTop: 0

        }, 1000);

        return false;

    });


});