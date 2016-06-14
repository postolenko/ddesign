$(document).ready(function() {

    $(".master-btn, .sample-btn, .good-texture .texture-links .order").on("click", function(e) {

        e.preventDefault();

    });


	$(".master-btn").click(function() {

		$(".formmodal-master").fadeIn(300);

		$(".formmodal-master .modal-data").css({"top": ( $(window).height() - $(".formmodal-master .modal-data").height() ) / 2  + "px"});

	});


	$(".modal-bg, .closemodal-btn").click(function() {

		$(".formmodal-master").fadeOut(300);

	});





	$(".sample-btn").click(function() {

		$(".formmodal-sample").fadeIn(300);

		$(".formmodal-sample .modal-data").css({"top": ( $(window).height() - $(".formmodal-sample .modal-data").height() ) / 2  + "px"});

	});


	$(".modal-bg, .closemodal-btn").click(function() {

		$(".formmodal-sample").fadeOut(300);

	});


	$(".good-texture .texture-links .order").click(function() {

		$(".formmodal-sample-catalog").fadeIn(300);

		$(".formmodal-sample-catalog .modal-data").css({"top": ( $(window).height() - $(".formmodal-sample-catalog .modal-data").height() ) / 2  + "px"});

	});


	$(".modal-bg, .closemodal-btn").click(function() {

		$(".formmodal-sample-catalog").fadeOut(300);

	});






});