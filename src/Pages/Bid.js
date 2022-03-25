import React, { Component } from 'react'
import Table1 from '../Common components/Table1'
import Navigation3 from '../Common components/Navigation3'
import { Button } from '@mui/material'
import { Container } from 'react-bootstrap'

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
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">Rs. 200,000.00</a></li>
    <li><a href="#">Rs. 300,000.00</a></li>
    <li><a href="#">Rs. 400,000.00</a></li>
  </ul>
</div> 



<Button>Add my Bid</Button>
      </Container>
      </div>
    )
  }
}
