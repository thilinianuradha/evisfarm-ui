import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Ad from '../Common components/Ad'
import Navigation2 from '../Common components/Navigation2'

export class Marketplace extends Component {
  render() {
    return (
      <div>
          <Navigation2 />
          <Container>
          <br/>
  <Row>
    <Col><Ad/></Col>
    <Col><Ad/></Col>
    <Col><Ad/></Col>
  </Row>
  <Row>
    <Col><Ad/></Col>
    <Col><Ad/></Col>
    <Col><Ad/></Col>
  </Row>
</Container>
      </div>
    )
  }
}

export default Marketplace