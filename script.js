document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Realizar una llamada AJAX para verificar las credenciales en el servidor
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            // La respuesta del servidor
            var response = JSON.parse(xhr.responseText);

            if (response.success) {
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
        }
    };

    // Configurar y enviar la solicitud al servidor
    xhr.open("POST", "login.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password));
});
