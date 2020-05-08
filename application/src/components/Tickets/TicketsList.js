import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

const TestSuiteList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/test-suites')
      .then(response => {
        setItems(response.data);
      })
  }, [setItems]);

  if (Array.isArray(items) && items.length) {
    return (
      <Card>
        <ListGroup>
          {items.map(item =>
            <ListGroup.Item>Name: {item.name}, Date added: {item.date}</ListGroup.Item>
          )}
        </ListGroup>
      </Card>
    )
  }

  return (
    <div>No Test Suites in the Database!</div>
  )
}

export default TestSuiteList;
