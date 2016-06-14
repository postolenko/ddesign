$(document).ready(function() {

	var thumbnailsPriceLenght = $(".screen-two .thumbnails .thumbnail-box").length;
	var countThumbnails;
	var thumbHeightArray = [];
	var thumbHeaderHeightArray = [];

	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

	getThumbnailHeight();

	$(window).resize(function() {

		bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

		getThumbnailHeight();

	});


	function getThumbnailHeight() {

		thumbHeightArray = [];
		thumbHeaderHeightArray = [];

		if( bodyWidth >= 768) {

			console.log(bodyWidth);

			for(countThumbnails = 0; countThumbnails <= ($(".screen-two .thumbnails .thumbnail-box").length - 1); countThumbnails++) {

				thumbHeightArray.push($(".screen-two .thumbnails .thumbnail-box:eq("+ countThumbnails +")").height());

				thumbHeaderHeightArray.push($(".screen-two .thumbnails .thumbnail-box:eq("+ countThumbnails +") h3").height());

			}

			$(".screen-two .thumbnails .thumbnail-box .price-thumbnail").outerHeight( Math.max.apply(null, thumbHeightArray) );

			$(".screen-two .thumbnails .thumbnail-box .price-thumbnail h3").height( Math.max.apply(null, thumbHeaderHeightArray) );

		} else {

			$(".screen-two .thumbnails .thumbnail-box .price-thumbnail").css({"height":"auto"});

			$(".screen-two .thumbnails .thumbnail-box .price-thumbnail h3").css({"height":"auto"});

		}

	}
	

});