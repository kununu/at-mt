import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'


const TestCase = (props) => {
  const [state, setState] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:3001/test-cases/${props.id}`)
      .then(response => {
        setState(response.data)
      })
  }, [setState])
  const testCase = props.items ? props.items : state

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
            <a href={testCase['e2e link']}>
             {testCase['e2e link']}
            </a>
        </h4>
        <h4>JIRA link:
          <a href={testCase['jira link']}>
            {testCase['jira link']}
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
                <th>{testCase['test steps']}</th>
                <th>{testCase['test data']}</th>
                <th>{testCase.expected}</th>
              </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>

  )
}

export default TestCase;
