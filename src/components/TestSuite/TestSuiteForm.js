import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const TestSuiteForm = () => {
  const [state, setState] = useState({name:'', description:''});

  const addItem = (event) => {
    const obj = {
      name: state,
      date: new Date().toISOString()
    };

    axios
      .post('http://localhost:3001/test-suites', obj)
      .then(response => {
        console.log(response);
      });
  }

  const handleItemsChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Card>
      <Card.Header>Add Item</Card.Header>
      <Card.Body>
        <Form onSubmit={addItem}>
          <Card.Title>Create New Test Suite</Card.Title>
            <Form.Group controlId="formSuiteName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Test Suite Name"
                value={state.name}
                onChange={handleItemsChange}
              />
          </Form.Group>
          <Form.Group controlId="formSuiteDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
                type="text"
                placeholder="Test Suite Description"
                value={state.description}
                onChange={handleItemsChange}
              />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TestSuiteForm;
