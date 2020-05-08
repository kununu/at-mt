const projectsRouter = require('express').Router()
const Project = require('../models/project')


projectsRouter.get('/', (request, response) => {
    Project.find({}).then(projects => {
        response.json(projects.map(project => project.toJSON()))
    })
})

projectsRouter.get('/:id', (request, response, next) => {
    Project.findById(request.params.id).then(project => {
        response.json(project.toJSON())
    })
        .catch(error => next(error))
})

projectsRouter.post('/', (request, response, next) => {
    const body = request.body

    if (body.name === undefined) {
        return response.status(400).json({
            error: 'Name missing'
        })
    }

    const project = new Project({
        name: body.name,
        description: body.description,
        date: new Date(),
        current: body.current || false,
    })

    project.save().then(savedProject => {
        response.json(savedProject.toJSON())
    })
        .catch(error => next(error))
})

projectsRouter.delete('/:id', (request, response, next) => {
    Project.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

projectsRouter.put(':id', (request, response, next) => {
    const body = request.body

    const project = {
        name: body.name,
        description: body.description,
        current: body.current,
    }

    Project.findByIdAndUpdate(request.params.id, project, { new: true })
        .then(updatedProject => {
            response.json(updatedProject.toJSON())
        })
        .catch(error => next(error))
})

module.exports = projectsRouter
