$(document).ready(function() {

    var indexStep;

    var shoppingStepIndex;

    var stepContentHeight;

    var indexnextstepshopBtn;


    $(".shopping-step-content-height").css({"height": 0 + "px"});

    $(".shopping-step-item").click(function() {

        shoppingStepIndex = $(".shopping-step-item").index(this);

        if( $(".shopping-step-content-height:eq("+ shoppingStepIndex +")").outerHeight(true) <= 0 ) {

            stepContentHeight = $(".shopping-step-content:eq("+ shoppingStepIndex +")").height();

            $(".shopping-step-content-height").animate({"height": 0 + "px"}, 400);

            $(".shopping-step-content-height:eq("+  shoppingStepIndex +")").animate({"height": stepContentHeight + 20 + "px"}, 400);

        }
    
    });







    $(".step-one-content").css({"display":"none"});

    $(".step-one-h h3:eq(0)").addClass("active");

    $(".step-one-content:eq(0)").css({"display":"block"});

    $(".step-one-h h3").click(function() {

        indexStep = $(".step-one-h h3").index(this);

        if ($(".step-one-h h3").hasClass("active")) {

                $(".step-one-h h3").removeClass("active");

        }

        $(".step-one-content").css({"display":"none"});

        $(".step-one-h h3:eq("+indexStep+")").addClass("active");

        $(".step-one-content:eq(" + indexStep + ")").fadeIn(300);

        $(".shopping-step-content-height:eq("+ 0 +")").animate({"height": $(".step-one").height() + "px"}, 400);


    });





    $(".nextstepshop-btn").click(function() {

        indexnextstepshopBtn = $(".nextstepshop-btn").index(this);

        shoppingStepIndex = indexnextstepshopBtn + 1;

        if( $(".shopping-step-content-height:eq("+ shoppingStepIndex +")").outerHeight(true) <= 0 ) {

            stepContentHeight = $(".shopping-step-content:eq("+ shoppingStepIndex +")").height();

            $(".shopping-step-content-height").animate({"height": 0 + "px"}, 400);

            $(".shopping-step-content-height:eq("+  shoppingStepIndex +")").animate({"height": stepContentHeight + 20 + "px"}, 400);

        }

    });




    $(".steponeradio").click(function() {

        if ( $(this).attr("id") == "guestradiobtn" ) {

            $(".shopping-step-item:eq(1)").text("2.Billing Details");

        } else {

            $(".shopping-step-item:eq(1)").text("2.Account & Billing Details");

        }

    });




});