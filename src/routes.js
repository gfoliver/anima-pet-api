const { Router } = require('express')
const PetController = require('./controllers/PetController')

const app = Router()

app.post('/pet', PetController.create)
app.get('/pet', PetController.all)
app.post('/pet/adopt', PetController.adopt)

module.exports = app