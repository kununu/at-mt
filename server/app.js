const config = require('./utils/config')
const projectsRouter = require('./controllers/projects')
const ticketsRouter = require('./controllers/tickets')
const testCasesRouter = require('./controllers/testCases')
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/projects', projectsRouter)
app.use('/api/tickets', ticketsRouter)
app.use('/api/testcases', testCasesRouter)


// TODO: Create middlware
const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
        }
    next(error)
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

app.use(errorHandler)


module.exports = app
