import app from '../src/app.js';
import request from 'supertest';

describe('GET /location', () => {
    test("verificar respuesta /v1/location", async () => {
        const response = await request(app).get("/v1/location").send();
        expect(response.statusCode).toBe(200);
    });
    test("verificar respuesta /v1/location/:city?", async () => {
        const response = await request(app).get("/v1/location/city").send();
        expect(response.status).toBe(404);
    });
});
