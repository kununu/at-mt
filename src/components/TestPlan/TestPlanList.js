import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row'
import axios from 'axios';

const TestPlanList = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/projects')
      .then(response => {
        setItems(response.data)
      })
  }, [setItems])

  if (Array.isArray(items) && items.length) {
    return (
      <Card>
        <Card.Header>
          <Row>
          <Col xs={6} as="h3">Test Plans</Col>
          <Col xs={6}><Button className="float-right" size="sm">Add Test Plan</Button></Col>
          </Row>
        </Card.Header>
        <ListGroup>
          {items.map(item =>
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

export default TestPlanList;
