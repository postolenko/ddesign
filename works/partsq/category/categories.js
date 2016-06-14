$(document).ready(function() {

	$(".catlistheight").css({"height": 0});

	var childList;
	var elhBlock;
	var elhListBlock;
	var itemList;
	var elAttr;


	for(var index = 0; index <= $(".catlistheight").length - 1; ++index) {

		$(".catlistheight:eq("+ index +")").attr("id","cat_"+ index);

		childList = $(".catlistheight:eq("+ index +")").children(".catlist");

		childList.attr("id","listcat_"+ index);

	}

	

	$(".catname").click(function() {

		if( $(this).next(".catlistheight") ) {

			elhBlock = $(this).next(".catlistheight");

			elhListBlock = elhBlock.children(".catlist");

			itemList = $(this).children(".arrowcat");

			elAttr = elhBlock.attr("id");

			if( $("#" + elAttr).height() <= 0 ) {

				$("#" + elAttr).css({"height":"auto"});

				if ( itemList.hasClass("glyphicon-menu-down") ) {

					itemList.removeClass("glyphicon-menu-down");

					itemList.addClass("glyphicon-menu-up");

				}

			} else {

				$("#" + elAttr).css({"height":"0"});

				if ( itemList.hasClass("glyphicon-menu-up") ) {

					itemList.removeClass("glyphicon-menu-up");

					itemList.addClass("glyphicon-menu-down");

				}

			}

		}


	});


});