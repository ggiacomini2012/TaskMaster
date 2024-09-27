const request = require('supertest');
const app = require('../app'); // Certifique-se de que o caminho para o app.js esteja correto

describe('Testando a rota GET /status', () => {
  it('Deve retornar status 200 e a mensagem correta', async () => {
    const res = await request(app).get('/api/auth/status');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'API rodando...');
  });
});
