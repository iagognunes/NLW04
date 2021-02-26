import request from 'supertest';
import { app } from '../app';
import { getConnection } from 'typeorm';


import createConnection from '../database';

describe("Users", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    });

    it("Should be able to createa new user", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            name: "user Example",
        });

        expect(response.status).toBe(201);
    });

    it("Should not be able to create a new user with exist email", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            name: "user Example",
        });

        expect(response.status).toBe(400);
    });
});

/*
Para o NODE_ENV funcionar é só instalar npm install -g win-node-env,
sendo asim nao precisa mudar o codigo.
*/