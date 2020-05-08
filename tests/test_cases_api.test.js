const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('test cases are returned as json', async () => {
  await api
    .get('/api/testcases')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there are 2 test cases', async () => {
    const response = await api.get('/api/testcases')

    expect(response.body).toHaveLength(2)
  })

afterAll(() => {
  mongoose.connection.close()
})
