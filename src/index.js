const express = require('express')
const cors = require('cors')
const routes = require('./routes')

require('dotenv-safe').config({
    allowEmptyValues: true
})

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
