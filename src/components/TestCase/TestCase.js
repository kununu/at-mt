import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import itemsService from '../../services/testCasesController'


const TestCase = (props) => {
  const [state, setState] = useState([])
  const testCase = props.items ? props.items : state

  useEffect(() => {
    itemsService
      .getById(props.id)
      .then(initialItems => {
        setState(initialItems)
      })
      .catch(error => {
          console.log(`Fail to load test cases with id ${testCase.id}`)
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
            <h1>{testCase.id}. {testCase.name} </h1>
          </Card.Title>
        <h4>Created at: {testCase.date}</h4>
        <h4>E2E Link:
            <a href={testCase.e2e_link}>
             {testCase.e2e_link}
            </a>
        </h4>
        <h4>JIRA link:
          <a href={testCase.jira_link}>
            {testCase.jira_link}
          </a>
        </h4>
        <h2>Description: {testCase.description}</h2>
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
                <th>{testCase.test_steps}</th>
                <th>{testCase.test_data}</th>
                <th>{testCase.expected}</th>
              </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>

  )
}

export default TestCase;
