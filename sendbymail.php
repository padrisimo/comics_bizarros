<?php
if($_POST){
    $name = $_POST['nombre'];
    $email = $_POST['email'];
    $message = $_POST['ta'];

//y asi fue como miles de cachondas admiradoras me mandaron correos.
    mail("comicsbizarros@gmail.com", $name, $email, $message);
}
?>