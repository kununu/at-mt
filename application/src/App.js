import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import TestCaseContainer from './components/TestCase/TestCasesContainer'
import TestCase from './components/TestCase/TestCase';
import TestPlanForm from './components/TestPlan/TestPlanForm'
import TestPlanList from './components/TestPlan/TestPlanList'

const App = () => {
  return (
      <Container>
        <div>
          <TestPlanForm />
          <TestPlanList />
        </div>
        <br />
        <TestCaseContainer />
      </Container>
  )
}

export default App;
