import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import axios from "axios"
import { Button } from 'bootstrap';

 class PendingReq extends React.Component {
  state = {
    advertisements: [],
 
};

componentDidMount(){
  axios.get("https://localhost:7082/api/[advertisements]") // where the api gets fetched from that API
    .then(res1=>{
      console.log(res1);
      this.setState({ advertisements: res1.data});
    })
}


  render() {
    return (
      <div>
      
{this.state.advertisements.map(advertisement=><li key = {advertisement.id}>{advertisement.id}  {advertisement.location}{advertisement.areaofCultivation} {advertisement.nameofOwner} {<span> <button>view</button> </span>} </li>)} 

<br/>
<br/>


      </div>
    )
  }
}
export default PendingReq;