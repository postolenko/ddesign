$(document).ready(function() {

// var sliderWidth = $(".slider").width();
// var slideWidth = $(".slide").width();
var indexSlide;
var countSlides = $(".news-slide").length;
var countIndex;
var countVisibleSlides;
var countSlidesOnRow;
var lastVisibleIndex;

var prewBtn = $(".prew");
var nextBtn = $(".next");

var indexVisibleSlide = countVisibleSlides;

var leftPosition = 0;

var slidersHeight = [];

var resizeWindowDone = false;

var carouselArr = [];

// var sliderWidth = document.getElementsByClassName("slider")[0].offsetWidth;
// var slideWidth = document.getElementsByClassName("slide")[0].offsetWidth;

// $(".news-slide").css({"display":"none"});

// $(".news-slide:eq(0)").css({"display":"inline-block"});

var positionSlides;



// var sliderBox;
// var thumbnailBox;
// var prewBtn;
// var nextBtn;



    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


// function slideShow(sliderBox,thumbnailBox,prewBtn,nextBtn) {


// getWidthSliders();


var countSlResize = Math.round( parseInt( $(".news-slider").css("width") ) / parseInt( $(".news-slide").css("width") ) );

        console.log(parseInt( $(".news-slider").css("width") ) +"    "+ parseInt( $(".news-slide:eq("+0+")").css("width") ) );

        var countSlidesOnRow = 0;

        $(".news-slider .news-slide").outerWidth(parseInt( $(".news-slide:eq("+0+")").css("width")) );

        $(".news-slider").width($(".news-slider .news-slide").width() * ($(".news-slider .news-slide").length) );

        console.log(countVisibleSlides);


        maxHeightOfSliders = Math.max.apply(null, slidersHeight);

$(window).resize(function() {

    $(".news-slider .news-slide").outerWidth(parseInt( $(".news-slide:eq("+0+")").css("width")) );

    $(".news-slider").width($(".news-slider .news-slide").width() * ($(".news-slider .news-slide").length) );

});


var positionNextBtn = $(".news-slider .news-slide").width();

var positionPrewBtn = $(".news-slider .news-slide").width();


var endPosition;

var positionLastNews = $(".news-slider .news-slide:eq("+ ( $(".news-slider .news-slide").length - 1 ) +")").offset().left + $(".news-slider .news-slide:eq("+ ( $(".news-slider .news-slide").length - 1 ) +")").width();


var step = 0;

var endAnimation;

var timeOutAnimation;


    nextBtn.click(function() {

        clearInterval(timeOutAnimation);

        positionLastNews = $(".news-slider .news-slide:eq("+ ( $(".news-slider .news-slide").length - 1 ) +")").offset().left + $(".news-slider .news-slide:eq("+ ( $(".news-slider .news-slide").length - 1 ) +")").width();

        if( positionLastNews >= $(window).width() ) {

            timeOutAnimation = setTimeout(function() {

                $(".news-slider").stop().animate({"margin-left": -positionNextBtn + "px" }, 600);

                positionNextBtn += $(".news-slider .news-slide").width();

            }, 300);

        }

        positionPrewBtn = parseInt( $(".news-slider").css("margin-left") );

    });


    prewBtn.click(function() {

        // clearInterval(timeOutAnimation);
        
        if($(".news-slider .news-slide:eq(0)").offset().left <= 0) {

            // timeOutAnimation = setTimeout(function() {

                // positionPrewBtn = parseInt( $(".news-slider").css("margin-left") );

                $(".news-slider").stop().animate({"margin-left": positionPrewBtn + "px" }, 600);

                positionPrewBtn += $(".news-slider .news-slide").width();              

                positionNextBtn = parseInt( $(".news-slider").css("margin-left") );

                console.log(positionPrewBtn);

            // },300);

        }
   
    });










});