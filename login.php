<?php
// Simulación de credenciales válidas
$correctUsername = "admin";
$correctPassword = "planeta123";

// Recuperar datos del formulario
$username = $_POST['username'];
$password = $_POST['password'];

// Verificar las credenciales
if ($username === $correctUsername && $password === $correctPassword) {
    $response = array('success' => true);
} else {
    $response = array('success' => false);
}

// Devolver la respuesta en formato JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
