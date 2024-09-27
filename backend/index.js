const sequelize = require('./config/db');
const User = require('./models/userModel');
const Task = require('./models/taskModel');
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Habilitar CORS para permitir requisições de outros domínios
app.use(cors());

// Middleware para processar JSON no corpo das requisições
app.use(express.json());

// Rotas de autenticação
app.use('/api/auth', authRoutes);

// Rota básica
app.get('/', (req, res) => {
  res.status(200).send({ message: 'API rodando...' });
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).send({ message: 'Erro ao buscar usuários' });
  }
});

// Iniciar o servidor
// app.listen(port, () => {
//   console.log(`Servidor rodando na porta ${port}`);
// });

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Tabelas sincronizadas no banco de dados');
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch(err => {
    console.error('Erro ao sincronizar as tabelas:', err);
  });

module.exports = app;