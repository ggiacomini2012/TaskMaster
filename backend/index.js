const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Habilitar CORS para permitir requisições de outros domínios
app.use(cors());

// Middleware para processar JSON no corpo das requisições
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Backend funcionando com CORS e body-parser!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
