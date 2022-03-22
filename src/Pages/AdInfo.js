import React, { Component } from 'react'
import { Row, Col, Container, Button, ListGroup, Figure} from 'react-bootstrap'
import Navigation3 from '../Common components/Navigation3'

export default class AdInfo extends Component {
  render() {
    return (
      <div>
      <Navigation3/>
      <Container style={{ margin : '10px'}}>
      <Row>
    <Col> <ListGroup.Item>Maize cultivation in Anuradhapura</ListGroup.Item> 
    <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt=""
    src=""
    border={150}
    
  />
  <Figure.Caption>
    The land of 50 Acres.
  </Figure.Caption>
</Figure>
</Col>
    <Col> <Button variant="link">Keep a prize Bid</Button>
    <ListGroup>
  <ListGroup.Item>Crop_type</ListGroup.Item>
  <ListGroup.Item>Location</ListGroup.Item>
  <ListGroup.Item>Area of cultivation</ListGroup.Item>
  <ListGroup.Item>Expected Harvest</ListGroup.Item>
  <ListGroup.Item>Starting date</ListGroup.Item>
  <ListGroup.Item>Targetted selling price</ListGroup.Item>
</ListGroup>
    </Col>
  </Row> 
      </Container>
     

      </div>
    )
  }
}
