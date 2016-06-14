$(document).ready(function() {


	$(".respmenubtn").click(function() {

		if ( $(".menu-nav-box").offset().left < 0 ) {

			$(".respmenubtn").addClass("respmenubtn-active");

			$(".menu-nav-box").stop().animate({"left": 0}, 600);

		} else {

			$(".respmenubtn").removeClass("respmenubtn-active");

			$(".menu-nav-box").stop().animate({"left": -110 + "%" }, 600);

		}


	});


});