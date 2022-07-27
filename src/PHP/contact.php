<?php
header("Access-Control-Allow-Headers: *");
header('Content-Type: multipart/form-data');

include 'server.php';

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$nameErr = $emailErr = $subjectErr = $messageErr = $phoneErr = "";
$email = $name = $phone = $subject = $message = "";

function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    var_dump($_POST['name']);

    if (empty($_POST['name'])) {
        $nameErr = "Name is required";
        echo $nameErr;
    } else {
        $name = test_input($_POST['name']);
        if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
            $nameErr = "Only letters and white space allowed";
        }
    }
    if (empty($_POST['email'])) {
        $emailErr = "Email is required";
        echo $emailErr;
    } else {
        $email = test_input($_POST['email']);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
    }
    if (empty($_POST['subject'])) {
        $subjectErr = "Subject is required";
        echo $subjectErr;
    } else {
        $subject = test_input($_POST['subject']);
    }
    if (empty($_POST['phone'])) {
        $phoneErr = "Phone Number is required";
        echo $phoneErr;
    } else {
        $phone = test_input($_POST['phone']);
    }
    if (empty($_POST['message'])) {
        $messageErr = "Message is required";
        echo $messageErr;
    } else {
        $message = test_input($_POST['message']);
    }
    $emailbody = "New Website contact Form: MySchoolApp <br/> Name:" . $name . "<br/>Phone:" . $phone . " <br/>Email:" . $email . "<br/> Message:" . $message;
    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->IsSMTP(); //Send using SMTP
        $mail->Host = 'myschoolapp.co.ke'; //Set the SMTP server to send through
        $mail->Username = 'info@myschoolapp.co.ke'; //SMTP username
        $mail->Password = 'Info@#2022'; //SMTP password
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; //Enable implicit TLS encryption
        $mail->Port = 465; //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('info@myschoolapp.co.ke', 'My School App');
        $mail->addAddress('info@myschoolapp.co.ke', 'My School App Support Team'); //Add a recipient

        //Content
        $mail->IsHTML(true); //Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body = $emailbody;
        $mail->AltBody = $emailbody;

        $mail->Send();
        echo $response = 'Message has been sent';
    } catch (Exception $e) {
        echo $response = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
    return $response;
    $mail->smtpClose();
}
