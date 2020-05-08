const ticketsRouter = require('express').Router()
const Ticket = require('../models/ticket')


ticketsRouter.get('/', (request, response) => {
    Ticket.find({}).then(tickets => {
        response.json(tickets.map(ticket => ticket.toJSON()))
    })
})

ticketsRouter.get('/:id', (request, response, next) => {
    Ticket.findById(request.params.id).then(ticket => {
        response.json(ticket.toJSON())
    })
        .catch(error => next(error))
})

ticketsRouter.post('/', (request, response, next) => {
    const body = request.body

    if (body.ticket === undefined) {
        return response.status(400).json({
            error: 'Ticket name missing'
        })
    }

    const ticket = new Ticket({
        ticket: body.ticket,
        description: body.description,
        date: new Date(),
        test_cases: body.test_cases,
    })

    ticket.save().then(savedTicket => {
        response.json(savedTicket.toJSON())
    })
        .catch(error => next(error))
})

ticketsRouter.delete('/:id', (request, response, next) => {
    Ticket.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

ticketsRouter.put('/:id', (request, response, next) => {
    const body = request.body

    const ticket = {
        ticket: body.ticket,
        description: body.description,
        test_cases: body.test_cases,
    }

    Ticket.findByIdAndUpdate(request.params.id, ticket, { new: true })
        .then(updatedTicket => {
            response.json(updatedTicket.toJSON())
        })
        .catch(error => next(error))
})

module.exports = ticketsRouter
