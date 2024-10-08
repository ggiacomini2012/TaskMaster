# TaskMaster

## Descrição
**TaskMaster** é uma aplicação web para gerenciamento de tarefas, permitindo que os usuários criem, editem e organizem suas atividades de forma eficiente. A aplicação é construída com foco em usabilidade e eficiência, utilizando as melhores práticas de desenvolvimento.

## Tecnologias Utilizadas
- **Frontend**: [React](https://reactjs.org/): Biblioteca para construção de interfaces de usuário.
- **Backend**: [Node.js](https://nodejs.org/): Ambiente de execução JavaScript no lado do servidor.
- **Banco de Dados**: [PostgreSQL](https://www.postgresql.org/): Sistema de gerenciamento de banco de dados relacional.
- **Hospedagem**: [Heroku](https://www.heroku.com/): Plataforma de cloud para o deployment da aplicação.

## Funcionalidades
- **Gerenciamento de Tarefas**: Criação, edição, visualização e exclusão de tarefas.
- **API**: Uma API robusta para fornecer dados ao frontend e permitir interação com o banco de dados.
- **Deploy Automático**: Integração contínua e entrega contínua (CI/CD) para automatizar o processo de deploy após cada commit.

## Metodologias de Desenvolvimento
- **TDD (Test-Driven Development)**: Desenvolvimento orientado a testes, garantindo que cada funcionalidade esteja coberta por testes.
- **CI/CD**: Automatização do processo de deploy após cada commit no repositório.

## Estrutura do Projeto
- **Repositório no GitHub**: Organização em um repositório no GitHub com commits semânticos.
- **Divisão entre Frontend e Backend**: A aplicação é dividida entre frontend (React) e backend (Node.js), com uma API para comunicação entre ambos.
- **Uso do Docker**: Containerização da aplicação, facilitando a replicação do ambiente de desenvolvimento.
- **Commits Semânticos**: Uso de mensagens de commit que descrevem claramente as mudanças realizadas.
- **Checagem de Estilo com ESLint**: Para manter um código limpo e consistente, garantindo a qualidade do código.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/ggiacomini2012/TaskMaster.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd TaskMaster
   ```

3. Construa e inicie os contêineres Docker:
   ```bash
   docker-compose up --build
   ```

4. Acesse o frontend em seu navegador:
   - O **frontend** estará disponível em: [http://localhost:3000](http://localhost:3000)
   - O **backend** estará rodando em: [http://localhost:5000](http://localhost:5000)

5. Para parar os contêineres:
   ```bash
   docker-compose down
   ```

## Contribuição
Sinta-se à vontade para contribuir! Abra um pull request ou envie uma issue com sugestões ou melhorias.

## Licença
Este projeto está licenciado sob a MIT License.

## Contato
Para perguntas ou sugestões, entre em contato:
- E-mail: ggiacomini2012@gmail.com
- [LinkedIn](https://www.linkedin.com/in/guilhermegiacominidev/)
