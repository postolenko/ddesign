<?php 

require 'phpmailer/class.phpmailer.php';

$mail = new PHPMailer;

$mail->isSMTP();

$mail->Host = 'mail.ukraine.com.ua';
$mail->SMTPAuth = true;
$mail->Username = 'webmaster@dionhtml.com.ua'; // логин от вашей почты
$mail->Password = 'ejf5B787IROjqd9'; // пароль от почтового ящика
$mail->SMTPSecure = 'ssl';
$mail->Port = '465';

$mail->CharSet = 'UTF-8';
$mail->From = ""; // адрес почты, с которой идет отправка
$mail->FromName = ""; // имя отправителя
$mail->addAddress('webmaster@dionhtml.com.ua', 'Денис');
$mail->addAddress('forhostdionisiopostolenko@yandex.ru', 'Денис');
$mail->addCC('webmaster@dionhtml.com.ua');

$mail->isHTML(true);



	$mail->Subject = $_POST['subject'];
	$mail->Body = "Имя: {$_POST['name']}<br> Email: {$_POST['email']}<br> Comment: {$_POST['message']}<br> Fail: {$_POST['imagefile']}<br> Сообщение: " . nl2br($_POST['body']);
	$mail->AltBody = "Имя: {$_POST['name']}\r\n Email: {$_POST['email']}\r\n Comment: {$_POST['message']}\r\n Fail: {$_POST['imagefile']}\r\n Сообщение: {$_POST['body']}";

	// if(isset($_FILES["imagefile"]) ) {

	// 	$mail->addAttachment($_FILES["imagefile"]["tmp_name"], $_FILES["imagefile"]["name"]);

	// } 

	if( $mail->send() ){
		$answer = '1';
	}else{
		$answer = '0';
	}
	die( $answer );



?>