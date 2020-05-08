import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import itemsService from '../../services/items';

const ProjectsForm = (props) => {
  const [state, setState] = useState({item: {name:'', description: ''}, show: false});

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
        ...state.item,
        [event.target.name]: value
      }
    });
  };

  const submitItem = (event) => {
    const item = {
      name: state.item.name,
      description: state.item.description,
      date: new Date().toISOString()
    };

    event.preventDefault();

    itemsService
      .create(item)
      .then(() => props.triggerUpdate())
      .catch(error => console.log(error));

    setState({
      ...state,
      show: false
    });
  }

  return (
    <>
      <Button variant="primary" className="float-right" size="sm" onClick={handleShow}>
        Add Project
      </Button>
      <Modal show={state.show} onHide={handleClose}>
        <Form onSubmit={submitItem}>
          <Modal.Header closeButton>
            <Modal.Title>Add Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Title>Create New Project</Card.Title>
            <Form.Group controlId="formProjectName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Project Name"
                name="name"
                value={state.item.name}
                onChange={handleItemsChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Project Name"
                name="description"
                value={state.item.description}
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

export default ProjectsForm;
