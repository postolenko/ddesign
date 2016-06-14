$(function(){


	$('#contact').submit(function(e){

		e.preventDefault();

		var errors = false;

		var noOpenScriptTag = /<script>/g;
		var noClosedScriptTag = /<\/script>/g;
		var regName = /[a-zA-Zа-яА-Я ]+$/;
		var regEmail = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

		var nameVal = $("#contact_name").val();
		var emailVal = $("#contact_email").val();
		var messageVal = $("#contact_message").val();

		var resultArr = [];


			if( nameVal != "" && regName.exec( nameVal ) != null &&
				nameVal.search( noOpenScriptTag) &&
		 		nameVal.search( noClosedScriptTag) ) {

				if($("#contact_name").next().height() > 0) {

					$("#contact_name").next().css({"height": 0});

				}

				resultArr.push("correctField");


			} else {

				$("#contact_name").next().css({"height":"auto"});

				resultArr.push("incorrectField");

			}


			if( emailVal != "" && regEmail.exec( emailVal ) != null  &&
				emailVal.search( noOpenScriptTag) &&
		 		emailVal.search( noClosedScriptTag)) {

				if($("#contact_email").next().height() > 0) {

					$("#contact_email").next().css({"height": 0});

				}

				resultArr.push("correctField");

			} else {

				$("#contact_email").next().css({"height":"auto"});

				resultArr.push("incorrectField");

			}


			if( messageVal != "" && 
				messageVal.search( noOpenScriptTag) &&
		 		messageVal.search( noClosedScriptTag) ) {

				if($("#contact_message").next().height() > 0) {

					$("#contact_message").next().css({"height": 0});

				}

				resultArr.push("correctField");

			} else {

				$("#contact_message").next().css({"height":"auto"});

				resultArr.push("incorrectField");

			}


			for( var indexResultArr = 0; indexResultArr <= resultArr.length - 1; indexResultArr++ ) {

				if (resultArr[indexResultArr] == "correctField" )  {

					errors = false;						

				} else {

					errors = true;

					break;

				}

			}

			
			if( errors != true ){

				var data = $('#contact').serialize();

				$.ajax({
					url: 'mail.php',
					type: 'POST',
					data: data,
					beforeSend: function(){

						$("#load_message").fadeIn(300);

					},
					success: function(res) {

						if( res == 1 ) {

							$('#contact').find('input:not(#submit), textarea').val('');
							$('#submit').next().empty();

							$("#load_message").fadeOut(300);
						
							$("#sendsuccess").fadeIn(300);

							$("#sendsuccess .send-did").css({"top": ( $(window).height() - $("#sendsuccess .send-did").height() ) / 2 + "px" });
							
							setTimeout(function() {

								$("#sendsuccess").fadeOut(500);

							}, 4000);
							

						} else {

							$("#sendsuccess .send-did h3").text("Ошибка отправки");

						}

					},
					error: function(){

						$("#sendsuccess .send-did h3").text("Ошибка скрипта. Через некоторое время мы исправим технические неполадки.");
					
					}
				});
			}

			return false;

	});

});