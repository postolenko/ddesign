$(document).ready(function() {

	// getResponsiveHeader();
	getScrollToTopBtn();


	$(".opacity-bg").css({"width": $(window).width() + "px",
						  "height": $(window).height() + "px"});
	
	$("body").css({"padding-top": $(".headersite").height() + "px"});
	

	$(document).scroll(function() {
		// getResponsiveHeader();
		getScrollToTopBtn();
	});

	$(".service-type-box").index();

	for(var countServices = 0; countServices <= $(".service-photo").length - 1; ++countServices) {

		$(".service-name:eq("+ countServices +")").css({"top": ( ($(".service-photo:eq("+ countServices +")").height() - $(".service-name:eq("+ countServices +")").outerHeight() ) / 2 ) + "px"});

	}


	// var rowWidth = $(".row").width();
	// var aboutarticleWidth = $(".service-type-box").outerWidth();
	// // var articlesLenght = $(".service-type-box").length - 1;

	// var countArticles;
	// var countRowsArticles = $(".service-type-box").length / countArticles;

	// var counterFor = 0;
	// var countRows;




	// // delPaddings()

	// function delPaddings() {

	// 	rowWidth = $(".row").width();
	// 	aboutarticleWidth = $(".service-type-box").outerWidth();
	// 	countArticles = Math.round(rowWidth / aboutarticleWidth);
	// 	countRows = $(".service-type-box").length / countArticles;

	// 	for(counterFor = 1; counterFor <= countRows; counterFor++) {

	// 		$(".service-type-box:eq("+ ( counterFor * countArticles - 1 ) +")").css({
	// 			"padding-right": 0
	// 		});

	// 		$(".service-type-box:eq("+ ( ( counterFor * countArticles - 1 ) - (countArticles - 1) ) +")").css({
	// 			"padding-left": 0
	// 		});

	// 	}


	// 	if((countRows ^ 0) !== countRows) {
	// 		$(".service-type-box:eq("+ ( $(".service-type-box").length - 1 ) +")").css({
	// 			"padding-right": 0,
	// 			"padding-left": 0,
	// 		});
	// 	}

	// }	


	function getResponsiveHeader() {

		$("body").css({"padding-top": $(".headersite").height() + "px"});

		if($(window).scrollTop() >= $(".headersite").height() ) {

			$(".top-head").css({"padding": "5px 0 5px 0"});

			$(".nav-link").css({"padding": "5px 16px"});

		} else {

			$(".top-head").css({"padding": "40px 0 47px 0"});

			$(".nav-link").css({"padding": "12px 22px"});

		}

	}



	//  Показать кнопку прокрутки в вверх страницы
	function getScrollToTopBtn() {
		if ($(window).scrollTop() >= $(".headersite").height() ) {

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