<?php
session_start();
if( isset($_POST['name']) && strtoupper($_POST['captcha']) == $_SESSION['captcha_id'] )
{
	$to = 'urazaev.alexander@gmail.com'; // Replace with your email	
	$subject = 'Сообщение с сайта medcityclinic.ru'; // Replace with your $subject
	$headers = "Content-Type: text/plain; charset=utf-8\r\n". 'From: ' . $_POST['email'] . "\r\n" . 'Reply-To: ' . $_POST['email'] ;	

	$message = 'Имя: ' . $_POST['name'] . "\n" .
	           'E-mail: ' . $_POST['email'] . "\n" .
	           'Телефон: ' . $_POST['tel'] . "\n" .
	           'Сообщение: ' . $_POST['message'];
	
	mail($to, $subject, $message, $headers);	
	if( $_POST['copy'] == 'on' )
	{
		mail($_POST['email'], $subject, $message, $headers);
	}
}
?>