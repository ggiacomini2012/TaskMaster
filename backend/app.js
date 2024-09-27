const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

// Habilitar CORS para permitir requisições de outros domínios
app.use(cors());

// Middleware para processar JSON no corpo das requisições
app.use(express.json());

// Rotas de autenticação
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.status(200).send({ message: 'API rodando...' });
  });

module.exports = app;
