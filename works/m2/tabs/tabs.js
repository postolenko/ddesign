$(document).ready(function() {	

	$(".tabs .tab").css({"display":"none"});

	var indexTab;

	var countTabsBlocks = $(".tabs").length;
	var countTabsLinks = $(".tabs .tabs-links .tab-link").length;


	var indexTabsLinks;
	var attributeId;


	for (tabsBlockIndex = 0; tabsBlockIndex <= countTabsBlocks; tabsBlockIndex++) {

		countTabsLinks = $(".tabs:eq("+tabsBlockIndex+") .tabs-links .tablink-item .tab-link").length - 1;

		for (tabLinkIndex = 0; tabLinkIndex <= countTabsLinks; tabLinkIndex++) {

			$(".tabs:eq("+ tabsBlockIndex +") .tab-link:eq("+ tabLinkIndex +")").attr("id", "tab_" + tabLinkIndex +"_"+ tabsBlockIndex );

			$(".tabs:eq("+ tabsBlockIndex +") .tab:eq("+ tabLinkIndex +")").attr("id", "ofLinktab_" + tabLinkIndex +"_"+ tabsBlockIndex );


			if ($(".tabs-links:eq("+ tabsBlockIndex +") .tablink-item .tab-link:eq("+ tabLinkIndex +")").hasClass("active-tab")) {

				$(".tabs-content:eq("+tabsBlockIndex+") .tab:eq("+ tabLinkIndex +")").css({"display":"block"});

			}

		}

	}


	$(".tabs .tablink-item .tab-link").click(function() {

		attributeId = $(this).attr("id");

		indexTab = attributeId.lastIndexOf("_");

		indexTabNum = attributeId.slice(indexTab + 1);

		if( $(".tabs:eq("+ indexTabNum +") #ofLink"+attributeId+":visible").length <= 0) {	

			$(".tabs:eq("+ indexTabNum +") .tab").css({"display":"none"});

			$(".tabs:eq("+ indexTabNum +") #ofLink"+attributeId).fadeIn(300);

			if ( $(".tabs:eq("+ indexTabNum +") .tablink-item .tab-link").hasClass("active-tab") ) {

				$(".tabs:eq("+ indexTabNum +") .tablink-item .tab-link").removeClass("active-tab");

			}

			$(".tabs:eq("+ indexTabNum +") #"+attributeId).addClass("active-tab");

		}


	});

});

