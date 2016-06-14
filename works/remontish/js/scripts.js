$(document).ready(function() {

    var questionIndex = 0;
    var questionIndexActive;
    var triangleHeight;

    getScrollToTopBtn();

    showAnswerContent();

    getHeightTriangle();


    $("body").css({"padding-top": $(".header-box").height() + "px"});


    $(document).scroll(function() {

        getScrollToTopBtn();

        if ( $(window).scrollTop() >= $(".header-box").height() ) {

            $(".header-box").addClass("scroll-header-bg");

        } else if ( $(".header-box").hasClass("scroll-header-bg") ){

            $(".header-box").removeClass("scroll-header-bg");
            $("body").css({"padding-top": $(".header-box").height() + "px"});

        }

    });

    $(window).resize(function() {

        $("body").css({"padding-top": $(".header-box").height() + "px"});

        getHeightTriangle();       

    });


    // Main navigation


    $(".main-nav-btn").click(function() {

        $(".responsive-nav").addClass("show-main-nav");

    });

    $(".top-main-nav-btn").click(function() {

        $(".responsive-nav").removeClass("show-main-nav");

    });

    // --- Main navigation



    // Service table

    $(".dimension").click( function() {

        $(".arrow-icon").toggleClass("glyphicon-menu-left");

        $(".answ-quest-table").toggleClass("show-menu");

    });

    // --- Service table


    $(function() {

        $(".question").click( function(e) {

            e.preventDefault();

            if( !$(this).hasClass("active") ) {

                $(".question").removeClass("active");

                $(this).addClass("active");

                showAnswerContent();

            }          

        } );

    });


    if ( $(window).scrollTop() >= $(".header-box").height() ) {

        $(".header-box").addClass("scroll-header-bg");

    } else if ( $(".header-box").hasClass("scroll-header-bg") ){

        $(".header-box").removeClass("scroll-header-bg");

    }


    function showAnswerContent() {

        $(".answer").css({"display":"none"});

        for ( questionIndex = 0;  questionIndex <= $(".questions-list li").length; ++questionIndex ) {

            if( $(".questions-list .question:eq("+ questionIndex +")").hasClass("active") ) {

                $(".answers-box .answer:eq("+ questionIndex +")").fadeIn(300);

            }

        }

    }


    function getHeightTriangle() {

        for ( questionImdex = 0;  questionImdex <= $(".questions-list li").length; ++questionImdex) {

            triangleHeight = $(".questions-list .question:eq("+ questionImdex +")").outerHeight(true) / 2;

            $(".questions-list .right-trg:eq("+ questionImdex +")").css({

                                    "border-top": triangleHeight + "px solid transparent",
                                    "border-bottom": triangleHeight + "px solid transparent"

                                });

        }

    }


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