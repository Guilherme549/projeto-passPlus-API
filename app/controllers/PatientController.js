const PatientService = require('../services/PatientService');
const db = require('../../config/database');

const patientService = new PatientService(db);

const createPatient = async (req, res) => {
    try {
        const { name, age, priority } = req.body;
        const patient = await patientService.createPatient({ name, age, priority });
        res.status(201).json({ message: 'Patient created successfully', patient });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updatePatientStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updatedPatient = await patientService.updateStatus(id, status);
        res.status(200).json({ message: 'Patient status updated', updatedPatient });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createPatient, updatePatientStatus };
