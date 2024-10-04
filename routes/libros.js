const express = require('express');
const router = express.Router();

// Datos simulados de libros
const libros = [
  { id: 1, nombre: 'El Quijote', autor: 'Miguel de Cervantes', anio: 1605 },
  { id: 2, nombre: 'Cien Años de Soledad', autor: 'Gabriel García Márquez', anio: 1967 },
  { id: 3, nombre: '1984', autor: 'George Orwell', anio: 1949 },
];

// Obtener todos los libros
router.get('/', (req, res) => {
  res.json(libros);
});

// Obtener un libro específico por ID
router.get('/:id', (req, res) => {
  const libro = libros.find(l => l.id === parseInt(req.params.id));
  if (!libro) return res.status(404).send('Libro no encontrado');
  res.json(libro);
});

module.exports = router;
