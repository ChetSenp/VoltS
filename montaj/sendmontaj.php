<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require './PHPMailer-6.5.3/src/PHPMailer.php';
  require './PHPMailer-6.5.3/src/Exception.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', './PHPMailer-6.5.3/language/');
  $mail->isHTML(true);

  


?>