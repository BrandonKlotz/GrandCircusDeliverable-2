<?php $name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$website = $_POST['website'];
$message = $_POST['message'];
$formcontent="From: $name \n Number: $number \n Website: $website \n  Message: $message";
$recipient = "brandonklotz@icloud.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thanks!";
?>

/*
Thought I'd give it a try to make the form functional:
Followed https://1stwebdesigner.com/php-contact-form-html/ to make the form functional but continue to recieve a Error 405.
 */
