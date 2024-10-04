const express = require('express');
const path = require('path');
const app = express();
const librosRoute = require('./routes/libros');

// Middleware para servir archivos estáticos (HTML, JS, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para manejar rutas de libros
app.use('/libros', librosRoute);

// Puerto en el que corre el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


// front 

