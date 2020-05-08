import React from 'react';
import Container from 'react-bootstrap/Container';
import ProjectsList from './components/Projects/ProjectsList';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
      <Container>
        <ProjectsList />
      </Container>
    )
  }


  export default App
