const app = require('./app');
const sequelize = require('./config/db');
const User = require('./models/userModel');
const Task = require('./models/taskModel');
require('dotenv').config();

const port = process.env.PORT || 5000;

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
