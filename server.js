const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para manejar el registro
app.post('/register', (req, res) => {
    const { username, password, confirm_password, email } = req.body;

    // Validar que las contraseñas coinciden
    if (password !== confirm_password) {
        return res.status(400).send('Error: Las contraseñas no coinciden.');
    }

    // Preparar el formato para guardar en el archivo .txt
    const data = `Username: ${username}, Email: ${email}, Password: ${password}\n`;

    // Guardar en un archivo .txt
    fs.appendFile('users.txt', data, (err) => {
        if (err) {
            return res.status(500).send('Error al guardar los datos.');
        }
        res.send('Registro exitoso. Los datos han sido guardados.');
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
