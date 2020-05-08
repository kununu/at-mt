import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import TestPlanFormModal from '../TestPlan/TestPlanForm';

class TestPlanList extends React.Component
{
  constructor() {
    super();
    this.state = { items: [], showForm: false }
    this.updateHandler = this.updateHandler.bind(this)
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    // this.fetchData();
  }

  fetchData() {
    axios
      .get('http://localhost:3001/projects')
      .then(response => {
        this.setState({ ...this.state, items: response.data})
      });
  }

  updateHandler() {
    this.fetchData();
  }

  render() {
    if(Array.isArray(this.state.items) && this.state.items.length) {
      return (
        <Card  border={'primary'}>
          <Card.Header>
            <Row>
            <Col xs={6} as="h3">Test Plans</Col>
            <Col xs={6}><TestPlanFormModal triggerUpdate={this.updateHandler} /></Col>
            </Row>
          </Card.Header>
          <ListGroup>
            {this.state.items.map(item =>
              <ListGroup.Item>Id: {item.id}, Name: {item.name}, Date added: {item.date}</ListGroup.Item>
            )}
          </ListGroup>
        </Card>
      )
    }

    return (
      <div>No Test Plans in the Database!</div>
    )
  }
}

export default TestPlanList;
