const request = require('supertest');
const app = require('../src/app')

describe('Test the root path', () => {
    it('It should response the GET method', (done) => {
        request(app).get('/pedido').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

   
});