import React, { Component } from 'react'

import { Navbar , Nav } from 'react-bootstrap'
import { Form , FormControl, Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

export default class Navigation2 extends Component {
  render() {
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">EvisFarm</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/ProfileX">My Profile</Nav.Link>
              
        
            </Nav>
            <Nav className="d-flex">
            <Nav.Link href="/Notifications"> Notifications </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}


