const supertest = require('supertest');
const app = require('../../src/app');



test('Listar Pets (GET /pet)', async () => {
    const response = await supertest(app).get('/pet');

    expect(response.statusCode).toEqual(200);
    expect(response.body.data.length).toEqual(1);
});

test('Criar um Pet (POST /pet)', async () => {
    const response = await supertest(app).post('/pet').send({name: 'Nome'});

    expect(response.statusCode).toEqual(200);
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data).toHaveProperty('name', 'Nome');
    expect(response.body.data).toHaveProperty('adopted', false);
});

test('Adotar um Pet (POST /pet/adopt)', async () => {
    let response = null;
    response = await supertest(app).get('/pet');

    const id = response.body.data[0].id;

    expect(response.body.data[0].adopted).toBe(false);

    response = await supertest(app).post('/pet/adopt').send({ id });

    expect(response.statusCode).toEqual(200);
    expect(response.body.data.id).toEqual(id);
    expect(response.body.data.adopted).toBe(true);
});

test('Deletar um Pet (DELETE /pet/:id)', async () => {
    let response = null;
    response = await supertest(app).get('/pet');

    const id = response.body.data[0].id;

    response = await supertest(app).delete('/pet/' + id);

    expect(response.statusCode).toEqual(200);
});