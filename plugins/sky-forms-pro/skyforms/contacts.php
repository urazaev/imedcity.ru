<?php
session_start();
if( isset($_POST['email']) && strtoupper($_POST['captcha']) == $_SESSION['captcha_id'] )
{
	$to = 'urazaev.alexander@gmail.com'; // Replace with your email	
	$subject = 'Сообщение с сайта imedcityclinic.ru'; // Replace with your $subject
	$headers = 'From: ' . $_POST['email'] . "\r\n" . 'Reply-To: ' . $_POST['email'];	
	
	$message = 'E-mail: ' . $_POST['email'] . "\n" .
	           'Сообщение: ' . $_POST['message'];
	
	mail($to, $subject, $message, $headers);	
	if( $_POST['copy'] == 'on' )
	{
		mail($_POST['email'], $subject, $message, $headers);
	}
}
?>