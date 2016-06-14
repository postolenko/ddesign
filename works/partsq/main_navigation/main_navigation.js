$(document).ready(function() {

    var categoryLink;
    var index;
	var childList;
	var menuNav;
	var coorMenuNav;
	var leftCoorMenu;


    $("body").css({"padding-top": $(".header-bg").outerHeight(true) + "px"});


	$(document).scroll(function() {

		$("body").css({"padding-top": $(".header-bg").outerHeight(true) + "px"});

	});


			if( $(".menu-nav-box").length != true ) {

					$(".header-bg").append("<div class='menu-nav-box'></div>");

					$(".menu-nav-box").load("menu.html", function() {

						var elhBlock;
						var elhListBlock;
						var elAttr;

						if ( $(".menu-nav-box .good a").next(".catlistheight") ) {

							categoryLink = $(".menu-nav-box .good a").next(".catlistheight");

							categoryLink.prev("a").addClass("catname");

							categoryLink.prev("a").after( "<i class='arrowcat glyphicon glyphicon-menu-down'></i>" );

						}


						$(".catlistheight").css({"height": 0});


						for(index = 0; index <= $(".catlistheight").length - 1; ++index) {

							$(".catlistheight:eq("+ index +")").attr("id","cat_"+ index);

							childList = $(".catlistheight:eq("+ index +")").children(".catlist");

							childList.attr("id","listcat_"+ index);

						}
				

						$(".arrowcat").click(function() {

							if( $(this).next(".catlistheight") ) {

								elhBlock = $(this).next(".catlistheight");

								elhListBlock = elhBlock.children(".catlist");

								elAttr = elhBlock.attr("id");

								if( $("#" + elAttr).height() <= 0 ) {

									$("#" + elAttr).css({"height":"auto"});

									if ( $(this).hasClass("glyphicon-menu-down") ) {

										$(this).removeClass("glyphicon-menu-down");

										$(this).addClass("glyphicon-menu-up");

									}

								} else {

									$("#" + elAttr).css({"height":"0"});

									if ( $(this).hasClass("glyphicon-menu-up") ) {

										$(this).removeClass("glyphicon-menu-up");

										$(this).addClass("glyphicon-menu-down");

									}

								}

							}


						});

					});

		}



	$(".respmenubtn").click(function() {

		menuNav = document.getElementById("navmenu");

		coorMenuNav = menuNav.getBoundingClientRect();

		$(".menu-nav-box").height($(window).outerHeight() - $(".header-bg").outerHeight());

		$(".menu-nav-box").css({"top": $(".header-bg").outerHeight(true) + "px" });

		if ( parseInt( $(".menu").css("left") ) >= 0 ) {

			$(".respmenubtn").removeClass("respmenubtn-active");

			$(".menu").animate({"left": -1 * 101  + "%"}, 300);			

			leftCoorMenu = $(".menu").offset().left;

			setTimeout(function() {

				$(".menu-nav-box").fadeOut(300);

			}, 350);

		} else {

			$(".respmenubtn").addClass("respmenubtn-active");

			$(".menu-nav-box").height($(window).outerHeight() - $(".header-bg").outerHeight());

			$(".menu-nav-box").css({"display":"block"});

			$(".menu").animate({"left": 0  + "%"}, 300);

			leftCoorMenu = $(".menu").offset().left;

		}


	});


});