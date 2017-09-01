<?php
session_start();
if( isset($_POST['name']) && strtoupper($_POST['captcha']) == $_SESSION['captcha_id'] )
{
	$to = 'urazaev.alexander@gmail.com'; // Replace with your email	
	$subject = 'Бронирование с сайта orientaltales.uz'; // Replace with your $subject
	$headers = 'From: ' . $_POST['email'] . "\r\n" . 'Reply-To: ' . $_POST['email'];	
	
	$message = 'Тур: ' . $_POST['tour'] . "\n" .
	           'Имя: ' . $_POST['email'] . "\n" .
	           'Фамилия: ' . $_POST['22'] . "\n" .
	           'Количество человек: ' . $_POST['666'] . "\n" .
	           'Контактный телефон: ' . $_POST['77'] . "\n" .
	           'Email: ' . $_POST['888'] . "\n" .
	           'Сообщение: ' . $_POST['message'];
	
	mail($to, $subject, $message, $headers);	
	if( $_POST['copy'] == 'on' )
	{
		mail($_POST['email'], $subject, $message, $headers);
	}
}

echo $message;

?>