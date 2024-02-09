<?php
// Aquí deberías agregar la lógica de autenticación real, consultar la base de datos, etc.
$username = $_POST['username'];
$password = $_POST['password'];

// Ejemplo básico: usuario=admin, contraseña=password
if ($username === 'admin' && $password === 'password') {
    echo 'Inicio de sesión exitoso';
} else {
    echo 'Error de inicio de sesión';
}
?>
