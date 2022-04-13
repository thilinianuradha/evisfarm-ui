import { Link } from 'react-router-dom'
import { Button} from 'bootstrap'
import React, { Component } from 'react'
import AdPost from './AdPost'
import axios from "axios"
import { Card } from 'react-bootstrap'









 class ProfileX extends React.Component {
  state = {
    advertisements: [],
    Buyers: [],
};

componentDidMount(){
  axios.get("https://localhost:7082/api/[advertisements]") // where the api gets fetched from that API
    .then(res1=>{
      console.log(res1);
      this.setState({ advertisements: res1.data});
    })
}
componentDidMount(){
  axios.get("https://localhost:7082/api/[Buyers]") // where the api gets fetched from that API
    .then(res2=>{
      console.log(res2);
      this.setState({ Buyers: res2.data});
    })
}

  render() {
    return (
      <div>
        <Link to="AdPost"><button> CLICK </button></Link> 
<br/>
{this.state.advertisements.map(advertisement=><li key = {advertisement.id}>{advertisement.id}  {advertisement.location}{advertisement.areaofCultivation} {advertisement.nameofOwner}</li>)}
{this.state.Buyers.map(Buyer=><li key = {Buyer.id}>{Buyer.id}  {Buyer.fullName}{Buyer.location} {Buyer.email}</li>)}
<br/>
<br/>


      </div>
    )
  }
}
export default ProfileX;

/*  <div className='col column2 Table1'>

<div className='table_list'><h5>Advertisements</h5><Table1 list={
  posts.length ?
  posts.map(post => <div key={post.id}>{post.id}{post.location}{post.description}</div> ): null
}/></div>




  <div className='table_list'><h5>Pending Requests</h5><Table1 list={list} colNames={colNames}/></div>
  <div className='table_list'><h5>In-progress</h5><Table1 list={list2} colNames={colNames2}/></div>
  <div className='table_list'><h5>History(Details)</h5><Table1 list={list3} colNames={colNames3}/></div>
</div> */