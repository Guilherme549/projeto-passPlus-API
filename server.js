import express from 'express';
import dotenv from 'dotenv';

import queueRoutes from './app/routes/queueRoutes.js';
import patientRoutes from './app/routes/patientRoutes.js';
import { handleError } from './app/utils/ErrorHandler.js';

dotenv.config();

const app = express();
app.use(express.json());

// Rotas
app.use('/api/queue', queueRoutes);
app.use('/api/patients', patientRoutes);

// Middleware de Erros
app.use((err, req, res, next) => {
    handleError(err, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
