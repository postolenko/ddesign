$(document).ready(function() {

	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    $("body").css({"padding-top": $(".header-bg").outerHeight(true) + "px"});

    $(window).resize(function() {

		var w = window,
	    d = document,
	    e = d.documentElement,
	    g = d.getElementsByTagName('body')[0],
	    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


	    if (bodyWidth > 768 && $(".header-bg").offset().top <= $(".header-bg").outerHeight() ) {

			$(".header-bg").css({"padding": "30px 0"});

		}

		$("body").css({"padding-top": $(".header-bg").outerHeight(true) + "px"});

	});


	$(document).scroll(function() {

		if( $(".header-bg").offset().top >= $(".header-bg").outerHeight() ) {

			$(".header-bg").css({"padding": "3px 0"});

		} else if (bodyWidth > 768) {
			
			$(".header-bg").css({"padding": "30px 0"});

		}


		if( $(".main-navigation").length > 0) {

			if( $(".screen-two").offset().top >= $(".main-navigation").offset().top &&
			    ( $(".header-bg").offset().top + $(".header-bg").outerHeight(true) ) <= $(".screen-two").offset().top ) {

				$(".main-navigation").css({"position": "relative",
											"top" : 0,
											"background": "rgba(0, 0, 0, .3)"});

			} else {

				$(".main-navigation").css({"position": "fixed",
											"top" : $(".header-bg").outerHeight(true) + "px",
											"background": "rgba(0, 0, 0, 1)"});

			}

		}


		$("body").css({"padding-top": $(".header-bg").outerHeight(true) + "px"});


	});


});