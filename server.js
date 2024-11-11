require('dotenv').config();
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const { Sequelize } = require('sequelize');
const app = express();
const port = 3333;

// Configuração do Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
});

// Teste de conexão
sequelize.authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

app.use(express.json());

// Definição de rotas
app.get('/', (req, res) => {
  res.send('API Pass+ em execução.');
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

// Middleware externo de tratamento de erros personalizado
app.use(errorHandler);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
