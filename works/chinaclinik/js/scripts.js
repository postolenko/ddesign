$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    $(".left-triangle").css({"border-top":$(".main-navigation").outerHeight(true) + "px solid #507323"});

    $(".right-triangle").css({"border-top": ( $(".main-navigation").outerHeight(true)) + "px solid #507323"});

    $(".quote-triangle:odd").css({"border-top": "35px solid rgba(158, 137, 112, .8)"});

    getTriangleHeight();

    $(document).scroll(function() {

        getScrollToTopBtn();

    });


    $(window).resize( function() {

        $(".left-triangle").css({"border-top":$(".main-navigation").outerHeight(true) + "px solid #507323"});

        $(".right-triangle").css({"border-top": ( $(".main-navigation").outerHeight(true)) + "px solid #507323"});

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        if(bodyWidth >= 768) {

            $(".testimonial-txt:odd").css({"margin":"30px 0 0 -20px"});

        } else {

            $(".testimonial-txt:odd").css({"margin":"0"});
        }


        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


        var timeoutResize = setTimeout(function() {


            clearTimeout(timeoutResize);

            getTriangleHeight();

        }, 100);


    });


    if(bodyWidth >= 768) {

        $(".testimonial-txt:odd").css({"background": "rgba(158, 137, 112, .8)",
                                        "margin":"30px 0 0 -20px"
                                    });

    } else {

        $(".testimonial-txt:odd").css({"background": "rgba(158, 137, 112, .8)",
                                        "margin":"0"
                                    });

    }


 
    $('.scroll-to-top').click(function () {

        $('body,html').animate({

            scrollTop: 0

        }, 1000);

        return false;

    });



    $(".navigationg-news-slider .prew").click(function() {

        $(".news_slider .flex-nav-prev .flex-prev").click();

    });

    $(".navigationg-news-slider .next").click(function() {

        $(".news_slider .flex-nav-next .flex-next").click();

    });


    $(".testimonials_slider .testimonial-prev").click(function() {

        $(".testimonials_slider .flex-direction-nav .flex-nav-prev .flex-prev").click();

    });

    $(".testimonials_slider .testimonial-next").click(function() {

        $(".testimonials_slider .flex-direction-nav .flex-nav-next .flex-next").click();

    });


    // Определить высоту заголовка статьи в информативном блоке

    var articleContentHeadArray = [];

    var articleContentHeadCount = 0;

    for (articleContentHeadCount = 0; articleContentHeadCount <= $(".article-box").height() - 1; ++articleContentHeadCount) {

        articleContentHeadArray.push($(".article-content h3:eq("+ articleContentHeadCount +")").height());

    }

    $(".article-content h3").height(Math.max.apply(null, articleContentHeadArray));
    

    // Определить высоту треугольника в блоке "Это важно"

    function getTriangleHeight() {

        for(var countImpTriangle = 0; countImpTriangle <= $(".important-icon .right-tr-important").length - 1; ++countImpTriangle) {
        
        var triangleHeight = $(".important-icon:eq("+ countImpTriangle +")").height() / 2

        $(".important-icon .right-tr-important:eq("+ countImpTriangle +")").css({
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

            



});