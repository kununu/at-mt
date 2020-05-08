import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import TestCaseContainer from './components/TestCase/TestCasesContainer'
import TestPlansContainer from './components/TestPlan/TestPlanContainer'

const App = () => {
  return (
    <div>
      {/* <Container>
        <TestPlansContainer />
      </Container> */}
      <Container>
        <TestCaseContainer />
      </Container>
    </div>

  )
}

export default App;
