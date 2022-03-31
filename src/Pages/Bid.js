import React, { Component } from 'react'
import Table1 from '../Common components/Table1'
import Navigation3 from '../Common components/Navigation3'
import { Button } from '@mui/material'
import { Container,Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap'

const list = [
    {Vendor:"----------------", Amount:"---------------", Date:"---------------", },
    {Vendor:"----------------", Amount:"---------------", Date:"---------------", },
    {Vendor:"----------------", Amount:"---------------", Date:"---------------", },
  ]
  
  const colNames = ['Vendor','Amount','Posted On']  


export default class Notifications extends Component {
  render() {
    return (<div>
          <Navigation3 />
          <Container>
          <div className='col Table1'>

<div className='table_list'><Table1 list={list} colNames={colNames}/></div>

</div>

<div class="dropdown">
<InputGroup className="mb-3">
    <FormControl aria-label="Text input with dropdown button" />

    <DropdownButton
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-2"
      align="end"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
  </InputGroup>
</div> 



<Button>Add my Bid</Button>
      </Container>
      </div>
    )
  }
}
