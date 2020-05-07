const mongoose = require('mongoose')
require('dotenv').config()

const ticketSchema = new mongoose.Schema({
  ticket: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true
  },
  description: {
    type: String,
    minlength: 5,
    maxlength: 250,
    required: false
  },
  date: Date,
  test_cases: {
      type: Array,
      minlength: 5,
  }
})

ticketSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Ticket', ticketSchema)
