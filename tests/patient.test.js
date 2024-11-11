const request = require('supertest');
const app = require('../server');

describe('Patient API', () => {
    it('should create a patient', async () => {
        const response = await request(app).post('/api/patients').send({
            name: 'Jane Doe',
            age: 30,
            priority: 2,
        });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Patient created successfully');
    });

    it('should update patient status', async () => {
        const response = await request(app).put('/api/patients/1/status').send({
            status: 'attended',
        });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Patient status updated');
    });
});
