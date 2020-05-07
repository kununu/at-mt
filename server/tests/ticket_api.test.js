const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('tickets are returned as json', async () => {
  await api
    .get('/api/tickets')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there are 3 tickets', async () => {
    const response = await api.get('/api/tickets')

    expect(response.body).toHaveLength(3)
  })

afterAll(() => {
  mongoose.connection.close()
})
