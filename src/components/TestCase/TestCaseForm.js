import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import itemsService from '../../services/testCasesController'

const TestCaseForm = (props) => {
  const {testCase} = props
  const[state, setNewTestCase] = useState({
    name: testCase.name || '',
    description: testCase.short_description || '',
    test_steps: testCase.test_steps || '',
    test_data: testCase.test_data || '',
    e2e_link: testCase.e2e_link || '',
    jira_link: testCase.jira_link || ''
  })

  const addNewTestCase = event => {
    event.preventDefault();
    const testcase = {
      name: state.name,
      date: new Date().toDateString(),
      description: state.description,
      test_steps: state.test_steps,
      test_data: state.test_data,
      e2e_link: state.e2e_link,
      jira_link: state.jira_link
    }
    itemsService
      .create(testcase)
      .then(response => {
        console.log(response.data)
      })
      .then(props.viewList)
      .catch(error => {
        console.log('Failed to create test case')
      })
  }

  const updateTestCase = event => {
    event.preventDefault();
    const testcase = {
      name: state.name,
      date: new Date().toDateString(),
      description: state.description,
      test_steps: state.test_steps,
      test_data: state.test_data,
      e2e_link: state.e2e_link,
      jira_link: state.jira_link
    }
    itemsService
      .update(testCase.id, testcase)
      .then(props.viewList)
      .catch(error => {
        console.log(`Failed to update test case for ${testCase.id}`)
      })
  }

  const handleSubmit = () => {
    return (!props) ? addNewTestCase : updateTestCase
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
            placeholder={`add ${stateKey}`}
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
