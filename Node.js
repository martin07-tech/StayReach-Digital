<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    mail("your_email@example.com", "Consultation Request", "Name: $name\nEmail: $email\nMessage: $message");
    echo "Thank you for reaching out!";
}
?>
