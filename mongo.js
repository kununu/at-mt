const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://AT_MT:${password}@cluster0-yzry0.mongodb.net/D2B2?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
  current: Boolean,
})

const ticketSchema = new mongoose.Schema({
  ticket: String,
  description: String,
  date: Date,
  test_cases: Array,

})

const testCaseSchema = new mongoose.Schema({
  name: String,
  short_description: String,
  date: Date,
  test_steps: Array,
  gherkin_steps: Array,
  test_data: String,
  e2e_link: String,
  jira_link: String,
})

const Project = mongoose.model('Project', projectSchema)
const Ticket = mongoose.model('Ticket', ticketSchema)
const TestCase = mongoose.model('TestCase', testCaseSchema)

const project = new Project({
  name: 'Project 1',
  description: 'This is description',
  date: new Date(),
  current: true,
})

const ticket = new Ticket({
  ticket: 'KUNCU-244 Add culture statements',
  description: 'Add culture statements in my-kununu',
  date: new Date(),
  test_cases: ['5eb3aec8b23a965de19acc3e', '5eb3aec8b23a965de19acc3e', '5eb3aec8b23a965de19acc3e', '5eb3aec8b23a965de19acc3e'],
})

const testCase = new TestCase({
  name: 'Test case 1',
  short_description: 'User should be able to post new culture statement',
  test_steps: [
    'Login as Profile owner',
    'Navigate to culture statements page',
    'Click on company link',
    'Write new statement',
    'Click submit',
    'Verify statement posted'
  ],
  gherkin_steps: [
    'Given User logged in as Profile owner',
    'And user has companies rights',
    'And user has writen new statement',
    'When user submits new statement',
    'Then new statement is saved',
    'And new statement is shown on profile'
  ],
  test_data: 'email: kununu.testuser+po@gmail.com , pass: password1 , culture statements page: https://www.kununu.com/at/culture/statements , company: kununu GmbH, statement text: This is  statement test',
  e2e_link: 'https://github.com/kununu/e2e-automation/specs/my-kununu/profileOwner/cultureStatementsSpec.js',
  jira_link: 'https://jira.com/bla/bla',
  date: new Date(),
})

project.save().then(response => {
  console.log('Project saved!');
})

ticket.save().then(response => {
  console.log('Ticket saved');
})

testCase.save().then(response => {
  console.log('Test case saved');
  mongoose.connection.close();
})

/*Project.find({}).then(result => {
  result.forEach(project => {
    console.log(project)
  })
  mongoose.connection.close()
})*/
