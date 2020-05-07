import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const TestPlanFormModal = () => {
  const [state, setState] = useState({formItem: {}, show: true});

  const onSubmit = () => setState();
  const handleClose = () => setState({
    ...state,
    [state.show]: false
  });

  return (
    <Modal show={state.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Test Plan </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Card.Title>Create New Test Plan</Card.Title>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};


// const TestPlanFormModal = () => {
//   const [show, setShow] = useState(true);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const onSubmit = () => {
//     setShow(false);
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Add Test Plan</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <TestPlanForm onSubmit={onSubmit}></TestPlanForm>
//       </Modal.Body>
//     </Modal>
//   );
// }

// const TestPlanForm = ({onSubmit, closeModal}) => {
//   const [state, setState] = useState()

//   const addItem = (event) => {
//     event.preventDefault()
//     const itemObject = {
//       name: state,
//       date: new Date().toISOString()
//     };

//     axios
//       .post('http://localhost:3001/projects', itemObject)
//       .then(response => {
//         console.log(response)
//       });
//   }

//   const handleItemsChange = (event) => {
//     setState(event.target.value);
//   }

//   return (
//     <Card>
//       <Card.Header>Add Item</Card.Header>
//       <Card.Body>
//         <Form onSubmit={onSubmit}>
//           <Card.Title>Create New Test Plan</Card.Title>
//           <Form.Group controllId="formPlanName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Test Plan Name"
//               value={state}
//               onChange={handleItemsChange}
//             />
//           </Form.Group>
//           <div className="float-right">
//             <Button variant="secondary" onClick={closeModal}>
//               Close
//             </Button>
//             {' '}
//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </div>
//         </Form>
//       </Card.Body>
//     </Card>
//   )
// }

export default TestPlanFormModal;
