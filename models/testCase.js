const mongoose = require('mongoose')

const testCaseSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true
  },
  short_description: {
    type: String,
    minlength: 5,
    maxlength: 150,
    required: false
  },
  test_steps: {
      type: Array,
      minlength: 5,
      required: false,
  },
  gherkin_steps: {
      type: Array,
      minlength: 5,
      required: false,
  },
  test_data: {
      type: String,
      minlength: 5,
      required: false,
  },
  e2e_link: {
      type: String,
      minlength: 5,
      required: false,
  },
  jira_link: {
      type: String,
      minlength: 5,
      required: false,
  },
  date: Date,
})

testCaseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Test case', testCaseSchema)
