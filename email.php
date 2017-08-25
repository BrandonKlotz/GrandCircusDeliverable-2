<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    $from = 'From: $email';
    $to = 'brandonklotz@icloud.com';
    $subject = 'Klotz Portfolio Form';

    $body = "From: $name\n E-Mail: $email\n Telephone: $number\n Website: $website\n Message:\n $message";
?>

<?php
if ($_POST['submit']) {
}
?>

<?php
if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) {
        echo '<p>Your message has been sent!</p>';
    } else {
        echo '<p>Something went wrong, go back and try again!</p>';
    }
}
?>
