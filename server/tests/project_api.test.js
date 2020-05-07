const mongoose = require('mongoose')
const helper = require('./test_helper')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Project = require('../models/project')

beforeEach(async () => {
    await Project.deleteMany({})

    let projectObject = new Project(helper.initialProjects[0])
    await projectObject.save()

    projectObject = new Project(helper.initialProjects[1])
    await projectObject.save()
})

test('projects are returned as json', async () => {
    await api
        .get('/api/projects')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('all prjects returned', async () => {
    const response = await api.get('/api/projects')

    expect(response.body.length).toBe(helper.initialProjects.length)
})

test('a valid project can be added', async () => {
    const newProject = {
        name: 'This is new project',
        current: false,
    }

    await api
        .post('/api/projects')
        .send(newProject)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const projectsAtEnd = await helper.projectsInDb()
    expect(projectsAtEnd.length).toBe(helper.initialProjects.length + 1)

    const contents = projectsAtEnd.map(p => p.name)
    expect(contents).toContain(
        'This is new project'
    )

})

afterAll(() => {
    mongoose.connection.close()
})
