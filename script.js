document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Simular verificación de credenciales en el lado del cliente
        if (username === "admin" && password === "planeta123") {
            // Redirigir inmediatamente cuando las credenciales son correctas
            window.location.href = "https://b24-rul45g.bitrix24.site/";
        } else {
            ;

            // Redirigir a la página de error después de 2 segundos (puedes ajustar este tiempo)
            setTimeout(function() {
                window.location.href = "https://b24-rul45g.bitrix24.site/emptypage_lkqi/";
            }, 2000);
        }
    });
});
