$(".show-btn-box .show-btn").click(function() {

	var indexAccordion = $(".show-btn-box .show-btn").index(this);

	var dropdownMenu = $(".hoverblock:eq("+ indexAccordion +")");

	var dropdownHeight =  $(".accordeoncontent:eq("+ indexAccordion +")").height();


	if(dropdownMenu.height() > 0) {	

		dropdownMenu.animate({"height": 0}, 300);

		if($(".show-btn:eq("+ indexAccordion +")").hasClass("glyphicon-minus")) {

			$(".show-btn:eq("+ indexAccordion +")").removeClass("glyphicon-minus");

			$(".show-btn:eq("+ indexAccordion +")").addClass("glyphicon-plus");

		}

	} else {

		dropdownMenu.animate({"height": dropdownHeight}, 300);

		if($(".show-btn:eq("+ indexAccordion +")").hasClass("glyphicon-plus")) {

			$(".show-btn:eq("+ indexAccordion +")").removeClass("glyphicon-plus");

			$(".show-btn:eq("+ indexAccordion +")").addClass("glyphicon-minus");

		}

	}

});
