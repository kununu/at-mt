import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const TestPlanFormModal = (props) => {
  const [state, setState] = useState({item: {name:''}, show: false});

  const handleClose = () => setState({
    ...state,
    show: false
  });

  const handleShow = () => setState({
    ...state,
    show: true
  })

  const handleItemsChange = event => {
    const value = event.target.value
    setState({
      ...state,
      item: {
        [event.target.name]: value
      }
    });
  };

  const submitItem = (event) => {
    const item = {
      name: state.item.name,
      date: new Date().toISOString()
    };

    event.preventDefault();

    axios
      .post('http://localhost:3001/projects', item)
      .then(response => {
        console.log(response);
        props.triggerUpdate();
      })

    setState({
      ...state,
      show: false
    });
  }

  return (
    <>
      <Button variant="primary" className="float-right" size="sm" onClick={handleShow}>
        Add Test Plan
      </Button>
      <Modal show={state.show} onHide={handleClose}>
        <Form onSubmit={submitItem}>
          <Modal.Header closeButton>
            <Modal.Title>Add Test Plan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Title>Create New Test Plan</Card.Title>
            <Form.Group controlId="formSuiteName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Test Plan Name"
                name="name"
                value={state.itemName}
                onChange={handleItemsChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" type="submit">Save changes</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default TestPlanFormModal;