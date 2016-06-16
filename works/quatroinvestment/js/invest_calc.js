$(document).ready(function() {

	var pricecalcVal = parseInt( $("#pricecalc").val() );
	var sliderPrice = parseFloat( $("#slider_price").val() );
	
	var salaryVal;
	var totalsumVal;

	var priceVal;

	var regRes = /[0-9]+$/;

	if ( regRes.exec( totalsumVal ) === null || 
		 regRes.exec( salaryVal ) === null) {

		$(".totalsum").val(0);
		$(".salary").val(0);

	}

	var noOpenScriptTag   = /<script>/g;
	var noClosedScriptTag = /<\/script>/g;
	var regName           = /[0-9]+$/;

	getResultCalc();

	$("#pricecalc").keyup(function() {

		pricecalcVal = $("#pricecalc").val();

		if( pricecalcVal != "" && regName.exec( pricecalcVal ) != null &&
			pricecalcVal.search( noOpenScriptTag) &&
	 		pricecalcVal.search( noClosedScriptTag) ) {

			getResultCalc();

		} else {

			$("#pricecalc").val("");

		}

	});


	$(".xdsoft_range2dslider_box").mousedown(function() {

		getResultCalc();

	});


	$(".xdsoft_range2dslider_runner").click(function() {

		getResultCalc();

	});


	function getResultCalc() {

		clearInterval(resultcalc);

		var resultcalc = setInterval(function() {

			pricecalcVal = parseInt( $("#pricecalc").val() );
			sliderPrice = parseFloat( $("#slider_price").val() );

			salaryVal = parseInt( pricecalcVal * 0.025 * sliderPrice);

			totalsumVal = parseInt( salaryVal + pricecalcVal );	

			$(".totalsum").val(totalsumVal);

			$(".salary").val(salaryVal);

			if ( regRes.exec( totalsumVal ) === null || 
				 regRes.exec( salaryVal ) === null) {

				$(".totalsum").val(0);
				$(".salary").val(0);

			}

		}, 45);

	}


});