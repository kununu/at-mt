import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import TestCaseContainer from './components/TestCase/TestCasesContainer'

const App = () => {
  return (
      <Container variant='dark'>
        <TestCaseContainer />
      </Container>
  )
}

export default App;
