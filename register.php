<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    $email = $_POST['email'];

    // Validar que las contraseñas coinciden
    if ($password !== $confirm_password) {
        echo "Error: Las contraseñas no coinciden.";
        exit();
    }

    // Crear o abrir el archivo de texto
    $file = fopen("users.txt", "a");

    // Formatear los datos para guardarlos
    $data = "Username: $username, Email: $email, Password: $password\n";

    // Guardar los datos en el archivo
    fwrite($file, $data);

    // Cerrar el archivo
    fclose($file);

    echo "Registro exitoso. Los datos han sido guardados.";
}
?>
