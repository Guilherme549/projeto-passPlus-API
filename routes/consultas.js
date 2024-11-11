const express = require('express');
const router = express.Router();

const consultas = [];

// Lista todas as consultas
router.get('/', (req, res) => {
  res.json(consultas);
});

// Agenda uma nova consulta
router.post('/', (req, res) => {
  const { pacienteId, data } = req.body;
  if (!pacienteId || !data) {
    return res.status(400).json({ error: 'Paciente e data são obrigatórios!' });
  }
  const novaConsulta = { id: consultas.length + 1, pacienteId, data };
  consultas.push(novaConsulta);
  res.status(201).json(novaConsulta);
});

module.exports = router;
