$(function() {

	var elone;

	var eltwo;

	var indexTab;

	var indexTabLink;

	var countTabsLinks;

	var indexVisible;

	$(".tabs .tab-link").click(function() {

		$(".tabs").removeClass("active-tab");

		elone = $(this).parent(".tabs-links");

		eltwo = elone.parent(".tabs").addClass("active-tab");

		indexTab = $(".active-tab").index();

		for(countTabsLinks = 0; countTabsLinks <= $(".active-tab .tab-link").length - 1; ++countTabsLinks) {

			$(".active-tab .tab-link:eq("+ countTabsLinks +")").addClass("used-tab-link");

		}

		indexTabLink = $(".active-tab .used-tab-link").index(this);		

		indexVisible = $(".active-tab .tabs-contnet .tab:visible").index();

		if(indexTabLink != indexVisible) {

			$(".active-tab .tabs-contnet .tab:visible").css({"display": "none"});

			$(".active-tab .tabs-contnet .tab:eq("+ indexTabLink +")").fadeIn(300);

			$(".active-tab .used-tab-link").removeClass("active");

			$(".active-tab .used-tab-link:eq("+ indexTabLink +")").addClass("active");

			indexVisible = indexTabLink;			

			$(".active-tab .tab-links .tab-link").removeClass("used-tab-link");

		}


	});

});