require('dotenv').config();
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const pacienteRoutes = require('./routes/pacientes');
const filaRoutes = require('./routes/filas');
const consultaRoutes = require('./routes/consultas');
const { Sequelize } = require('sequelize');

const app = express();
const port = process.env.PORT || 3000;

// Configuração do Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite',
});

sequelize.authenticate()
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

app.use(express.json());

// Rotas
app.use('/pacientes', pacienteRoutes);
app.use('/filas', filaRoutes);
app.use('/consultas', consultaRoutes);

// Middleware de tratamento de erros
app.use(errorHandler);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
