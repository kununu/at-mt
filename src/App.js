import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container'
import TestPlanForm from './components/TestPlan/TestPlanForm';
import TestPlanList from './components/TestPlan/TestPlanList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({}) => {

  useEffect(() => {
    // fetch data here
    // use redux action to dispatch a fetch ...
  }, []);

  return (
    <Container>
      <TestPlanForm />
      <TestPlanList />
    </Container>
  )
}

export default App;
