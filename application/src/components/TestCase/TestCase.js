
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import itemsService from '../../services/testCasesController'


const TestCase = (props) => {
  const [state, setState] = useState({id : props.id})
  // const testCase = props.items ? props.items : state

  useEffect(() => {
    itemsService
      .getById(state.id)
      .then(initialItem => {
        setState(initialItem)
      })
      .catch(error => {
          console.log(`Fail to load test cases with id ${state.id}`)
      })
  }, [setState])

  return (
      <Card>
        <Card.Header className="justify-content-center">
          <Button
            onClick={props.viewList}
            variant='primary'
          >Back</Button>
          <Card.Title >
            <h1>{state.id}. {state.name} </h1>
          </Card.Title>
        <h4>Created at: {state.date}</h4>
        <h4>E2E Link:
            <a href={state.e2e_link}>
             {state.e2e_link}
            </a>
        </h4>
        <h4>JIRA link:
          <a href={state.jira_link}>
            {state.jira_link}
          </a>
        </h4>
        <h2>Description: {state.description}</h2>
      </Card.Header>
      <Card.Body>
        <Table variant='dark'>
          <thead>
            <tr>
              <th>STEP ID</th>
              <th>STEPS</th>
              <th>TEST DATA</th>
              <th>EXPECTED</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <th>1</th>
                <th>{state.test_steps}</th>
                <th>{state.test_data}</th>
                <th>{state.expected}</th>
              </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>

  )
}

export default TestCase;
