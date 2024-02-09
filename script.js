document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Simular verificación de credenciales en el lado del servidor (debes implementar esto en tu servidor PHP)
        // En este ejemplo, se verifica si las credenciales son "admin" y "planeta123"
        if (username === "admin" && password === "planeta123") {
            alert("Inicio de sesión exitoso. Redirigiendo...");

            // Redirigir después de 2 segundos (puedes ajustar este tiempo)
            setTimeout(function() {
                window.location.href = "https://b24-rul45g.bitrix24.site/";
            }, 2000);
        } else {
            alert("Credenciales incorrectas. Redirigiendo a página de error.");

            // Redirigir a la página de error después de 2 segundos (puedes ajustar este tiempo)
            setTimeout(function() {
                window.location.href = "https://b24-rul45g.bitrix24.site/emptypage_lkqi/";
            }, 2000);
        }
    });
});
