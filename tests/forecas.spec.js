import app from '../src/app.js';
import request from 'supertest';

describe('GET /forecas', () => {
    test("verificar respuesta  /v1/forecast/", async () => {
        const response = await request(app).get("/v1/forecast/").send();
        expect(response.statusCode).toBe(200);
    });
    test("verificar respuesta /v1/forecast/:city?", async () => {
        const response = await request(app).get("/v1/forecast/corrientes").send();
        expect(response.statusCode).toBe(200);
    });
    test("verificar respuesta /v1/forecas/:city?", async () => {
        const response = await request(app).get("/v1/forecas/city:12345").send();
        expect(response.status).toBe(404);
        
    });
});