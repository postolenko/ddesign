$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    getFormsubmitBgSize();
    getBraceSize();
    getScrollToTopBtn();

    $(document).scroll(function() {

        getScrollToTopBtn();

    });

    $(window).resize(function() {

        getFormsubmitBgSize();
        getBraceSize()

    });


    function getFormsubmitBgSize() {

       var widthFormBg = ( $(".submit-form form").width() / 100 ) * 145;
       var heightFormBg = ( $(".submit-form form").height() / 100 ) * 130;

        $(".form-bg").css({ "width": widthFormBg + "px",
                            "height": heightFormBg + "px"
                        });

    }

    function getBraceSize() {

        $(".brace-list").css({"height": $(".list-box ul").height() + "px"});

    }


    // Navigation scroll

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {

                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 700);
                    return false;
                }
            }
        });
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