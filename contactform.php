<?php   if (isset($_POST['submit'
])) {
    $name = $_POST['name'];
    $subject = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $to = "rchasewood@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from" .$name.".\n\n".$message;

    mail($to, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}?>