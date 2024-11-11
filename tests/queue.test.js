const request = require('supertest');
const app = require('../server');

describe('Queue Management API', () => {
    it('should add a patient to the queue', async () => {
        const response = await request(app).post('/api/queue/add').send({
            name: 'John Doe',
            age: 45,
            priority: 1,
        });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Patient added');
    });

    it('should retrieve patients in the queue', async () => {
        const response = await request(app).get('/api/queue/');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});
