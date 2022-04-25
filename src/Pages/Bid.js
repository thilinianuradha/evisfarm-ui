import React, { Component } from 'react'
import Table1 from '../Common components/Table1'
import Navigation3 from '../Common components/Navigation3'
import { Button } from '@mui/material'
import './Bid.css';
import { Container,Dropdown, DropdownButton, InputGroup, FormControl, Row } from 'react-bootstrap'

const list = [
    {Vendor:"----------------", Amount:"---------------", Date:"---------------", },
    {Vendor:"----------------", Amount:"---------------", Date:"---------------", },
    {Vendor:"----------------", Amount:"---------------", Date:"---------------", },
  ]
  
  const colNames = ['Vendor','Amount','Posted On']  


export default class Notifications extends Component {
  render() {
    return (
    <div>
          <Navigation3 />
          <Container>
            <Row >
          <div className='col Table1'>

                <Table1 list={list} colNames={colNames}/>

</div>
</Row>

<div class="dropdown">
<InputGroup className="mb-3">
    <FormControl aria-label="Text input with dropdown button" />

    <DropdownButton
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-2"
      align="end"
    >
      <Dropdown.Item href="#">Rs. 100,000.00</Dropdown.Item>
      <Dropdown.Item href="#">Rs. 200,000.00</Dropdown.Item>
      <Dropdown.Item href="#">Rs. 300,000.00</Dropdown.Item>
      <Dropdown.Item href="#">Rs. 400,000.00</Dropdown.Item>
      <Dropdown.Item href="#">Rs. 500,000.00</Dropdown.Item>
      <Dropdown.Item href="#">Rs. 600,000.00</Dropdown.Item>
      <Dropdown.Item href="#">Rs. 700,000.00</Dropdown.Item>
      <Dropdown.Item href="#">Rs. 800,000.00</Dropdown.Item>
      <Dropdown.Item href="#">Rs. 900,000.00</Dropdown.Item>
      <Dropdown.Item href="#">Rs. 1,000,000.00</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Enter</Dropdown.Item>
    </DropdownButton>
  </InputGroup>
</div> 



<Button>Add my Bid</Button>
      </Container>
      </div>
    )
  }
}
