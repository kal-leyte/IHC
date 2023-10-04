// crear y configurar una aplicación web utilizando Express.js.
var express = require('express');

// se crea una instancia de la aplicación Express llamada app
var app = express();

// define una ruta GET para la dirección raíz ('/')
app.get('/', function (req, res) {
   // se ejecutará la función proporcionada
    res.send('Hola Mundo');
 });
 

 // se inicia el servidor y se le indica que escuche en el puerto 8000
 app.listen(8000, function () {
    console.log('Servidor corriendo en el puerto 8000');
 });
 