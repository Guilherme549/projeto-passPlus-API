import QueueService from '../services/QueueService.js';
import db from '../../config/database.js';

const queueService = new QueueService(db);

export const addPatient = async (req, res) => {
    try {
        const patient = req.body;
        const result = await queueService.addPatientToQueue(patient);
        res.status(201).json({ message: 'Patient added', id: result.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getQueue = async (req, res) => {
    try {
        const patients = await queueService.getQueuePatients();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
