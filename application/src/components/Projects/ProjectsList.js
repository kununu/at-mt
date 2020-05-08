import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import ProjectsForm from './ProjectsForm';
import itemsService from '../../services/items'

class TestPlanList extends React.Component {
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
    itemsService
      .getAll()
      .then(initialItems => {
        this.setState({...this.state, items: initialItems});
      })
      .catch(error => {
        console.log('Fail');
      });
  }

  updateHandler() {
    this.fetchData();
  }

  render() {
    if (Array.isArray(this.state.items) && this.state.items.length) {
      return (
        <Card border={'primary'}>
          <Card.Header>
            <Row>
              <Col xs={6} as="h3">Projects</Col>
              <Col xs={6}><ProjectsForm triggerUpdate={this.updateHandler} /></Col>
            </Row>
          </Card.Header>
          <ListGroup>
            {this.state.items.map(item =>
              <ListGroup.Item>
                <Row>
                  <Col xs={6}><div><b>{item.name}</b><br /> {item.description}</div></Col>
                  <Col xs={6}><div className="float-right">Date added: {item.date}</div></Col>
                </Row>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Card>
      )
    }

    return (
      <div>Projects</div>
    )
  }
}

export default TestPlanList;
