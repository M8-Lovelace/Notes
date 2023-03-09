// Importamos las librerías necesarias
import * as dotenv from 'dotenv';
import express from 'express';
import { Configuration, OpenAIApi } from 'openai';
import {v4 as uuidv4} from 'uuid';

const PORT = process.env.PORT || 8080

// Cargamos las variables de entorno
dotenv.config();

// Configuramos el servidor
const app = express();

app.use(express.static("public"));
app.use(express.json());

let myuuid = uuidv4();
let consultas = {}

// Configuramos la API de OpenAI
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Creamos la instancia de la API
const openai = new OpenAIApi(configuration);

// Función para generar texto con OpenAI API
async function runCompletion(texto) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: texto}],
  });
  return completion.data.choices[0].message.content;
}

// Agregar una nueva consulta
app.post('/consultas/:usuario',async (req, res) => {
  const { usuario } = req.params;
  const { texto } = req.body;
  const rta= await runCompletion(texto);
  const uuid = uuidv4();

  consultas[uuid] = {  usuario, texto, rta};

  res.send({ consultas });
});

// Listar todas las consultas
app.get('/consultas', (req, res) => {
  const listaConsultas = Object.values(consultas);
  res.send(listaConsultas);
});

app.get('/consultas/contiene', (req, res) => {
  const palabra = req.query.palabra;
  const consultasContiene = Object.values(consultas)
    .filter(c => c.texto.includes(palabra));
  res.send(consultasContiene);
});

// Listar consultas de un usuario
app.get('/consultas/usuario/', (req, res) => {
  const usuario = req.query.usuario;
  const consultasUsuario = Object.values(consultas)
    .filter(c => c.usuario === usuario);
  res.send(consultasUsuario);
});

// Eliminar una consulta
app.delete('/consultas/:uuid', (req, res) => {
  const { uuid } = req.params;
  delete consultas[uuid];
  res.send({ consultas });
});

// Mensaje de bienvenida al servidor, indica que está activo
app.listen(PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
})