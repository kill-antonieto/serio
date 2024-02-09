<?php
// Credenciales válidas
$correctUsername = "admin";
$correctPassword = "planeta123";

// Recuperar datos del formulario
$username = isset($_POST['username']) ? $_POST['username'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

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
