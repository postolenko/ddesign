$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;

    $(".body").css({"padding-top": $(".header-bg").height() + "px"});

    getScrollToTopBtn();


    $(document).scroll(function() {

        if ( $(window).scrollTop() >= $(".header-bg").height() ) {

            $(".header-bg").css({"background": "rgba(0, 0, 0, .8)"});

        } else {

            $(".header-bg").css({"background": "rgba(0, 0, 0, 1)"});

        }

        getScrollToTopBtn();

    });



    $(".fix-bg img").css({"margin-top": ( $(window).height() - $(".fix-bg img").height() ) / 2 + "px" });

    $(window).resize(function() {

        $(".fix-bg img").css({"margin-top": ( $(window).height() - $(".fix-bg img").height() ) / 2 + "px" });

    });


  
    // ------

    $(".chose_file").click(function() {
        
        $(".chose_inpt").click();
        
    });


    // ------

    // $(".frameworks-box-bg, .close-frameworks").click(function() {

    //     $(".frameworks-box").fadeOut(300);

    // });

    $(".modal-frame").click(function(e) {

        var indexThumb = $(".modal-frame").index(this);

        console.log(indexThumb);

        $(".frameworks-box").css({"display": "block"});

        $(".frameworks-modal").css({"top": $(".header-bg").height() + 10 + "px" });

        e.preventDefault();

        $(".frameworks").attr("src", $(".mask-thumbnail:eq("+indexThumb+")").attr("href") );

        $(".frameworks-box").animate({"opacity": 1}, 500);

    })


    $(".frameworks-box-bg, .close-frameworks").click(function() {

        $(".frameworks-box").animate({"opacity": 0}, 500);

        setTimeout(function() {

            $(".frameworks").attr("src", "" );

            $(".frameworks-box").css({"display": "none"});

        }, 1000);

    });

    // Rotate logo

    var angel = 0;

    setInterval(function() {

        // angel = angel + 10;

        // $(".fix-bg").css({"transform": "rotateY("+ angel + "deg)"});

        // if(angel >= 360) {

        //     angel = 0;

        // }

    },35);

    

    // Navigation scroll

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {

                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 900);
                    return false;
                }
            }
        });
    });


    // Show or hide ".scroll-to-top" button


    $(".scroll-to-top").click(function () {

        $("body,html").animate({

            scrollTop: 0

        }, 1000);

        return false;

    });


    function getScrollToTopBtn() {

        if ($(window).scrollTop() > $(".header-bg").height() ) {

            $(".scroll-to-top").fadeIn();

        } else {

            $(".scroll-to-top").fadeOut();

        }

    }

    


});