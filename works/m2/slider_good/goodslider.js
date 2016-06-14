$(document).ready(function() {

	var indexPrewiev;
	var styleVal;
	var indexOfSlash;
	var nameFile;
	var formatFile;

	var topPositionPrew;


	$(".miniatures li img").click(function() {

		indexPrewiev = $(".miniatures li img").index(this);
		styleVal = $(".miniatures li img:eq("+indexPrewiev+")").attr("src");
		indexOfSlash = styleVal.lastIndexOf("/");

		nameFile = styleVal.slice(indexOfSlash + 1);

		$(".wood-texture-image img").css({"opacity": ".01"});
		$(".wood-texture-image img").attr("src","slider_good/img/"+ nameFile);

		$(".wood-texture-image img").animate({"opacity": 1}, 300);
		
	});


	$(".show-prew").click(function() {

		styleVal = $(".wood-texture-image img").attr("src");

		indexOfSlash = styleVal.lastIndexOf("/");

		nameFile = styleVal.slice(indexOfSlash + 1);

		$(".show-prew-box").fadeIn(500);

		$(".show-prew-box img").attr("src","slider_good/img/"+ nameFile);

		topPositionPrew = ( $(window).height() - $(".show-prew-box img").height() ) / 2;

		$(".show-prew-box img").css({"margin-top": topPositionPrew + "px" });

	});


	$(".show-prew-box").click(function() {

		$(".show-prew-box").fadeOut(500);

	});


});