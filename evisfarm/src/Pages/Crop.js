import React, { Component } from 'react'
import Table1 from '../Common components/Table1'



const list = [
    {id:1, Crop_type:"Vegetables", Crop_name: "Beans", No_of_Ads:2},
    {id:1, Crop_type:"Vegetables", Crop_name: "Beans", No_of_Ads:2},
    {id:1, Crop_type:"Vegetables", Crop_name: "Beans", No_of_Ads:2},
   
  ]
  
  const colNames = ['Id','Crop type','Crop name','No of Ads']  



export default class Home extends Component {
    render() {
      return (
          <div>
                <div className='col column2 Table1'>

<div className='table_list'><h5>Crops</h5><Table1 list={list} colNames={colNames}/></div>

</div>
          </div>
      )
    }
}
