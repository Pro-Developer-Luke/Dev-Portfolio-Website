<?php
$firstname = $_POST["fname"]
$lastname = $_POST["lname"]
$email = $_POST["email"]
$company = $_POST["company"]
$message = $_POST["message"]

$subject = "Enquiry from portfolio website"
$mailheader = "From: ".$firstname." ".$lastname." < ".$email." >\r\n";

$recipient = "addymy@hotmail.co.uk"
mail($recipient, $subject, $message, $mailheader)
or die("Error");

?>