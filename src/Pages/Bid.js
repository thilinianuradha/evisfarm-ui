import React, { Component } from 'react'
import Table1 from '../Common components/Table1'
import Navigation3 from '../Common components/Navigation3'

const list = [
    {Vendor:"##########", Amount:"#################", Date:"########", },
    {Vendor:"##########", Amount:"#################", Date:"########", },
    {Vendor:"##########", Amount:"#################", Date:"########", },
  ]
  
  const colNames = ['']  


export default class Notifications extends Component {
  render() {
    return (
      <div>
          <Navigation3 />
          <div className='col Table1'>

<div className='table_list'><Table1 list={list} colNames={colNames}/></div>

</div>
      </div>
    )
  }
}
