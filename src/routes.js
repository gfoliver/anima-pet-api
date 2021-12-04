const { Router } = require('express')
const PetController = require('./controllers/PetController');
const PetRepository = require('./repositories/PetRepository');

const app = Router()

const petRepository = new PetRepository();
const petController = new PetController(petRepository);

app.post('/pet', (req, res) =>  petController.create(req, res))

app.get('/pet', (req, res) => petController.all(req, res))

app.post('/pet/adopt', (req, res) =>  petController.adopt(req, res))

app.delete('/pet/:id', (req, res) =>  petController.delete(req, res))

module.exports = app