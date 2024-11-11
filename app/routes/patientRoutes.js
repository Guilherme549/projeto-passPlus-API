const express = require('express');
const { createPatient, updatePatientStatus } = require('../controllers/PatientController');
const router = express.Router();

router.post('/', createPatient);
router.put('/:id/status', updatePatientStatus);

module.exports = router;
