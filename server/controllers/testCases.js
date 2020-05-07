const testCasesRouter = require('express').Router()
const TestCase = require('../models/testCase')


testCasesRouter.get('/', (request, response) => {
    TestCase.find({}).then(testCases => {
        response.json(testCases.map(testCase => testCase.toJSON()))
    })
})

testCasesRouter.get('/:id', (request, response, next) => {
    TestCase.findById(request.params.id).then(testCase => {
        response.json(testCase)
    })
        .catch(error => next(error))
})

testCasesRouter.post('/', (request, response, next) => {
    const body = request.body

    if (body.name === undefined) {
        return response.status(400).json({
            error: 'Name missing'
        })
    }

    const testCase = new TestCase({
        name: body.name,
        short_description: body.short_description,
        test_steps: body.test_steps,
        gherkin_steps: body.gherkin_steps,
        test_data: body.test_data,
        e2e_link: body.e2e_link,
        jira_link: body.jira_link,
        date: new Date(),
    })

    testCase.save().then(savedTestCase => {
        response.json(savedTestCase.toJSON())
    })
        .catch(error => next(error))
})

testCasesRouter.delete('/:id', (request, response, next) => {
    TestCase.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

testCasesRouter.put(':id', (request, response, next) => {
    const body = request.body

    const testCase = {
        name: body.name,
        description: body.description,
        current: body.current,
    }

    TestCase.findByIdAndUpdate(request.params.id, testCase, { new: true })
        .then(updatedTestCase=> {
            response.json(updatedTestCase.toJSON())
        })
        .catch(error => next(error))
})

module.exports = testCasesRouter
