const express = require('express');
const router = express.Router();

const filas = [];

// Lista todas as filas
router.get('/', (req, res) => {
  res.json(filas);
});

// Cria uma nova fila
router.post('/', (req, res) => {
  const { especialidade } = req.body;
  if (!especialidade) {
    return res.status(400).json({ error: 'Especialidade é obrigatória!' });
  }
  const novaFila = { id: filas.length + 1, especialidade, pacientes: [] };
  filas.push(novaFila);
  res.status(201).json(novaFila);
});

// Retorna detalhes de uma fila
router.get('/:id', (req, res) => {
  const fila = filas.find(f => f.id == req.params.id);
  if (!fila) {
    return res.status(404).json({ error: 'Fila não encontrada!' });
  }
  res.json(fila);
});

module.exports = router;
