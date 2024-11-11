const express = require('express');
const router = express.Router();

// Simulação de dados de pacientes
const pacientes = [];

// Lista todos os pacientes
router.get('/', (req, res) => {
  res.json(pacientes);
});

// Adiciona um novo paciente
router.post('/', (req, res) => {
  const { nome, idade } = req.body;
  if (!nome || !idade) {
    return res.status(400).json({ error: 'Nome e idade são obrigatórios!' });
  }
  const novoPaciente = { id: pacientes.length + 1, nome, idade };
  pacientes.push(novoPaciente);
  res.status(201).json(novoPaciente);
});

// Retorna um paciente específico
router.get('/:id', (req, res) => {
  const paciente = pacientes.find(p => p.id == req.params.id);
  if (!paciente) {
    return res.status(404).json({ error: 'Paciente não encontrado!' });
  }
  res.json(paciente);
});

// Atualiza um paciente
router.put('/:id', (req, res) => {
  const paciente = pacientes.find(p => p.id == req.params.id);
  if (!paciente) {
    return res.status(404).json({ error: 'Paciente não encontrado!' });
  }
  const { nome, idade } = req.body;
  if (nome) paciente.nome = nome;
  if (idade) paciente.idade = idade;
  res.json(paciente);
});

// Remove um paciente
router.delete('/:id', (req, res) => {
  const index = pacientes.findIndex(p => p.id == req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Paciente não encontrado!' });
  }
  pacientes.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
