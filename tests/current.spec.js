import app from '../src/app.js';
import request from 'supertest';


describe('GET /current', () => {
    test("verificar respuesta /v1/current/", async () => {
        const response = await request(app).get("/v1/current/").send();
        expect(response.statusCode).toBe(200);
        
    });
    test("verificar respuesta /v1/current/:city?", async () => {
        const response = await request(app).get("/v1/current/corrientes").send();
        expect(response.statusCode).toBe(200);
    });
    test("verificar respuesta /v1/current/:city?", async () => {
        const response = await request(app).get("/v1/current/city:123").send();
        expect(response.body.cod).toBe("404");
        
        
    });
});
