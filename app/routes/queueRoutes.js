// queueRoutes.js
const express = require('express');
const { addPatient, getQueue } = require('../controllers/QueueController');
const router = express.Router();

router.post('/add', addPatient);
router.get('/', getQueue);

module.exports = router;
