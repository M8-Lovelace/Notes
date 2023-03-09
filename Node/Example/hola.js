const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

const consultas = {};

// Agregar una nueva consulta
app.post('/consultas/:usuario', (req, res) => {
  const { usuario } = req.params;
  const { texto } = req.body;
  const uuid = uuidv4();
  consultas[uuid] = { texto, usuario };
  res.send({ uuid });
});

// Listar todas las consultas
app.get('/consultas', (req, res) => {
  const listaConsultas = Object.values(consultas);
  res.send(listaConsultas);
});

// Listar consultas que contienen una palabra
app.get('/consultas/contiene/:palabra', (req, res) => {
  const { palabra } = req.query;
  const consultasContiene = Object.values(consultas)
    .filter(c => c.texto.includes(palabra));
  res.send(consultasContiene);
});