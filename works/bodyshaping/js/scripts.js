$(document).ready(function() {

	$("body").css({"padding-top": $(".head-section").height() + "px"});

	var countScrollForNav = 0;
	var countClearScrollForNav = 0;

	var countRisizeForNav = 0;
	var countClearResizeForNav = 0;

	var w = window,
	d = document,
	e = d.documentElement,
	g = d.getElementsByTagName('body')[0],
	bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

 	var countClassDescription = 0;
 	var classDescriptions = [];

	getResponsiveNav(bodyWidth);
	getScrollToTopBtn();

	var positionLeftNav = "done";

	$(".left-triangle").css({"border-right-width": $(".row").outerWidth() / 2 + "px"});
	$(".right-triangle").css({"border-right-width": $(".row").outerWidth() / 2 + "px"});

	$(window).resize(function() {

		$("body").css({"padding-top": $(".head-section").height() + "px"});	
		$(".left-triangle").css({"border-right-width": $(".row").outerWidth() / 2 + "px"});
		$(".right-triangle").css({"border-right-width": $(".row").outerWidth() / 2 + "px"});

		bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

		getResponsiveNav(bodyWidth);

	});

	$(document).scroll(function() {
		
		getScrollToTopBtn();
		getResponsiveNav(bodyWidth);

	});

 	
	$(".class-description-name-box:eq("+ ($(".class-description-name-box").length - 1) +")").css({"border-left":"1px solid transparent"});

	
// Show or hide responsive navigation
	$(".glyphicon-align-justify").click(function() {

		if(positionLeftNav == false) {
			
			$(".left-nav").animate({"top": -100 + "%"}, 1000);
			positionLeftNav = "done";

		} else {

			$(".left-nav").animate({"top": 15 + "%"}, 1000);
			positionLeftNav = false;

		}

	});


// Navigation scroll

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {

					$('html,body').animate({
						scrollTop: target.offset().top
					}, 2000);
					return false;
				}
			}
		});
	});



// Responsive of Navigation ".head-section"
	function getResponsiveNav(bodyWidth) {

		if(bodyWidth < 768 || $(".head-section").offset().top > $(".head-section").height()) {

			++countRisizeForNav;

			if( countRisizeForNav == 1) {

				$(".logo-parallelogram").css({"height": 80 + "px"});
				$(".logo-img").css({"margin-top": 5 + "px"});

				countClearResizeForNav = 0
			}

		} else {

			countRisizeForNav = 0;

			++countClearResizeForNav;

			if(countClearResizeForNav == 1) {

				$(".logo-parallelogram").css({"height": 130 + "px"});
				$(".logo-img").css({"margin-top": 35 + "px"});

			}

		}

		

		if($(".head-section").offset().top > $(".head-section").height()) {

			++countScrollForNav;

			if( countScrollForNav == 1) {

				$("header").css({"background": "rgba(255, 255, 255, .8)"});

				countClearScrollForNav = 0;

			}

		} else {

			countScrollForNav = 0;
			++countClearScrollForNav;

			if(countClearScrollForNav == 1) {

				$("header").css({"background": "rgba(255, 255, 255, 1)"});

			}

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