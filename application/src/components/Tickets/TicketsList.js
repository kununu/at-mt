import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Row, Col} from 'react-bootstrap';
import ticketsService from '../../services/ticketsController';

const TicketsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    ticketsService
      .getAll()
      .then(initialItems => {
        setItems(initialItems);
      })
  }, [setItems]);

  if (Array.isArray(items) && items.length) {
    return (
      <Card>
        <ListGroup>
          {items.map(item =>
            <ListGroup.Item><Row>
            <Col xs={6}><div><b>{item.ticket}</b><br /> {item.description}</div></Col>
            <Col xs={6}><div className="float-right">Date added: {item.date}</div></Col>
          </Row></ListGroup.Item>
          )}
        </ListGroup>
      </Card>
    )
  }

  return (
    <div>No Test Suites in the Database!</div>
  )
}

export default TicketsList;
