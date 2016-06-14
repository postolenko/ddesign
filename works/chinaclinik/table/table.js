$(document).ready(function() {

	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

	var timegetTableCellWidth;

	getTableCellWidth();

	$(window).resize(function() {

		bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

		if(bodyWidth >= 480 ) {

			clearTimeout(timegetTableCellWidth);

				timegetTableCellWidth = setTimeout(function() {

				getTableCellWidth();

			},100);	

		}
	

	});



	function getTableCellWidth() {
	

		for(var countTables = 0; countTables <= $(".table").length - 1; ++countTables) {

			widthFiresCol = $(".table:eq("+ countTables +") .table-row div:eq("+0+")").width();

			$(".table:eq("+ countTables +") .table-row div").css({"width":  ( $(".table").width() - widthFiresCol ) / ( $(".table .table-row:eq("+ 0 +") div").length - 1 ) + "px" });

			$(".table:eq("+ countTables +") .table-row div:eq("+0+")").width(widthFiresCol);

		}

	}

});