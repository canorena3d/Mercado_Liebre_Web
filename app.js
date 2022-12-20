// Importación de Express
const express = require('express');

// Ejecución de Express
const app = express();

// Importación de path para manejar las rutas de los archivos
const path = require('path');

// Usando recursos estáticos.
app.use(express.static('public'));

// Levantando el Servidor en el puerto 3000
const port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log("Servidor corriendo en el puerto http://localhost:" + port)
);

/*
** RUTAS A LOS RECURSOS **
*/

// Ruta Raíz / ➝ Home
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})

app.post("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})

// Ruta Raíz / ➝ Register
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
})

// Ruta Raíz / ➝ Login
app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
})
