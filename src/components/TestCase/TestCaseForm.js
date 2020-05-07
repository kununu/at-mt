import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import axios from 'axios'

const TestCaseForm = (props) => {
  const {testCase} = props
  const[state, setNewTestCase] = useState({
    name: testCase.name || '',
    description: testCase.name || '',
    'test steps': testCase.name || '',
    'test data': testCase.name || '',
    'e2e link': testCase.name || '',
    'jira link': testCase.name || ''
  })

  const addNewTestCase = event => {
    event.preventDefault();
    const testcase = {
      name: state.name,
      date: new Date().toDateString(),
      description: state.description,
      'test steps': state['test steps'],
      'test data': state['test data'],
      'e2e link': state['e2e link'],
      'jira link': state['jira link']

    }
    axios
      .post('http://localhost:3001/test-cases', testcase)
      .then(response => {
        console.log(response.data)
      })
      .then(props.viewList)
  }

  const handleChange =  e => {
    const value = e.target.value
    setNewTestCase({...state, [e.target.name]: value})
  }

  const formItems = () => {
    let form = []
    for (const stateKey in state) {
      form.push(
        (<Form.Group key={stateKey}>
          <Form.Label>{stateKey}</Form.Label>
          <Form.Control
            onChange={handleChange}
            placeholder={testCase[stateKey] || `add ${stateKey}`}
            name={stateKey}
            value={state[stateKey]}
            required
          />
        </Form.Group>)
      )
    }
    return form
  }
  return (
    <Card border={'primary'}>
      <Card.Header>
        <Card.Title>Create a new test case</Card.Title>
        <Button
          version='primary'
          onClick={props.viewList}
        >Back to list</Button>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={addNewTestCase}>
          {formItems()}
          <p>*all fields are required.</p>
          <Button
            variant="primary"
            type="submit">Save</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default TestCaseForm;
