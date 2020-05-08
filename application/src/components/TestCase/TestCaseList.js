import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import itemsService from '../../services/testCasesController'
import ListGroup from 'react-bootstrap/ListGroup'
import React, {useState, useEffect} from 'react'



const TestCaseList = (props) => {
    const [items,  setItems] = useState([])
    useEffect(() => {
      itemsService
        .getAll()
        .then(initialItems => {
          setItems(initialItems)
        })
        .catch(error => {
            console.log('Fail to load test cases')
        })
    }, [setItems])

    const removeItem = (id) => {
        itemsService
            .remove(id)
            .then(response => {
                console.log(response)
            })
            .then(() => window.location.reload(false))
            .catch(error => {
                console.log('Failed to remove test case')
            })
    }
    return (
        <Card border='primary'>
            <Card.Header>
                    <Card.Title >List of existing test cases</Card.Title>
                    <Button
                        version='primary'
                        onClick={() => props.viewForm('form')}
                    >Create new</Button>
            </Card.Header>
            <Card.Body>
                <ListGroup
                variant="flush">
                    {items.map(items => {
                        return (
                            <ListGroup.Item  variant='light'>
                                <Button className="list-group-item list-group-item-action"
                                    onClick={() => props.viewFullCase('fullCase', items.id)}>
                                    Id: {items.id} , Name: {items.name}  , Date added: {items.date} Description: {items.short_description}
                                </Button>
                                <Button
                                    onClick={() => props.viewForm('form', items.id, items)}
                                    version='primary'
                                >Edit</Button>
                                <Button
                                    version='primary'
                                    onClick={()=>removeItem(items.id)}>
                                    Delete
                                </Button>
                            </ListGroup.Item>
                        )})}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default TestCaseList;
