import React from 'react';
import Container from 'react-bootstrap/Container';
import ProjectsList from './components/Projects/ProjectsList';
import TestCaseContainer from './components/TestCase/TestCasesContainer';
import TicketsList from './components/Tickets/TicketsList';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
      <Container>
        <ProjectsList />
        <br />
        <TicketsList />
        <br />
        <TestCaseContainer />
      </Container>
    )
  }


export default App;
