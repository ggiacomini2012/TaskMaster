const request = require('supertest');
const app = require('../app');
const sequelize = require('../config/db');

describe('Testando a rota GET /', () => {
    // Estabelecer a conexão antes dos testes
    beforeAll(async () => {
      await sequelize.authenticate();
    });
  
    it('Deve retornar status 200 e a mensagem correta', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'API rodando...');
    });
  
    // Fechar a conexão após os testes
    afterAll(async () => {
      await sequelize.close();
    });
  });