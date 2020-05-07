import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import React, {useState, useEffect} from 'react'


const TestCaseList = (props) => {
    const [items,  setItems] = useState([])
    useEffect(() => {
      axios
        .get('http://localhost:3001/test-cases')
        .then(response => {
          setItems(response.data)
        })
    }, [setItems])
    return (
        <Card border='primary'>
            <Card.Header>
                    <Card.Title style={{display:'inline'}}>List of existing test cases</Card.Title>
                    <Button
                        version='primary'
                        style={{float:'right'}}
                        onClick={() => props.viewForm('form')}
                    >Create new</Button>
            </Card.Header>
            <Card.Body>
                <ListGroup
                variant="flush">
                    {items.map(items => {
                        return (<ListGroup.Item style={{display:'inline'}} variant='light'>
                            <button
                                className="list-group-item list-group-item-action"
                                onClick={() => props.viewFullCase('fullCase', items.id)}>
                                Id: {items.id} , Name: {items.name}  , Date added: {items.date} Description: {items.description}
                            </button>
                            <Button
                                onClick={() => props.viewForm('form', items.id, items)}
                                version='primary'
                                style={{float:'right', margin:'10px'}}
                            >Edit</Button>
                            <Button
                                version='primary'
                                style={{float:'right', margin:'10px'}}
                            >Delete</Button>
                        </ListGroup.Item>)
                        }
                    )}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default TestCaseList;
