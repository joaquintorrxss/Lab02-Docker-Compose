const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const nombre = process.env.MESSAGE || 'Anonimo';
  res.send(`Hola, soy la API de ${nombre}`);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API corriendo en el puerto ${PORT}`);
});