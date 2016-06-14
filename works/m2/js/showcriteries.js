$(document).ready(function() {

	var indexCriteries;

	var hovercriteriesHeight;

	$(".hovercriteries").css({"height": 50 + "px"});

	$(".show-more-link").click(function() {

		indexCriteries = $(".show-more-link").index(this);

		console.log(indexCriteries);

		hovercriteriesHeight = $(".criteries:eq("+ indexCriteries +")").height();


		if( $(".hovercriteries:eq("+ indexCriteries +")").height() >= hovercriteriesHeight ) {

			$(".hovercriteries:eq("+ indexCriteries +")").animate({"height": 50 + "px"}, 300);

			if($(".show-more-link:eq("+ indexCriteries +") .glyphicon").hasClass("glyphicon-menu-up")) {

				$(".show-more-link:eq("+ indexCriteries +") .glyphicon").removeClass("glyphicon-menu-up");

				$(".show-more-link:eq("+ indexCriteries +") .glyphicon").addClass("glyphicon-menu-down");

			}			


		} else {

			$(".hovercriteries:eq("+ indexCriteries +")").animate({"height":hovercriteriesHeight + "px"}, 300);

			if($(".show-more-link:eq("+ indexCriteries +") .glyphicon").hasClass("glyphicon-menu-down")) {

				$(".show-more-link:eq("+ indexCriteries +") .glyphicon").removeClass("glyphicon-menu-down");
				
				$(".show-more-link:eq("+ indexCriteries +") .glyphicon").addClass("glyphicon-menu-up");
				
			}

		}

	});

});