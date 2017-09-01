<?php
session_start();
if( isset($_POST['firstname']) && strtoupper($_POST['captcha']) == $_SESSION['captcha_id'] )
{
	$to = 'urazaev.alexander@gmail.com'; // Replace with your email	
	$subject = 'Сообщение с сайта orientaltales.uz'; // Replace with your $subject
	$headers = 'From: ' . $_POST['email'] . "\r\n" . 'Reply-To: ' . $_POST['email'];	
	
	$message = 'Тур: ' . $_POST['tour'] . "\n" .
	           'Адрес тура: ' . $_POST['url'] . "\n" .
	           'Имя: ' . $_POST['firstname'] . "\n" .
	           'Фамилия: ' . $_POST['lastname'] . "\n" .
	           'Количество человек: ' . $_POST['quantity'] . "\n" .
	           'Контактный телефон: ' . $_POST['telephone'] . "\n" .
	           'Email: ' . $_POST['email'] . "\n" .
	           'Перезвонить: ' . $_POST['callback'];
	
	mail($to, $subject, $message, $headers);	
	if( $_POST['copy'] == 'on' )
	{
		mail($_POST['email'], $subject, $message, $headers);
	}
}


echo $message;
?>