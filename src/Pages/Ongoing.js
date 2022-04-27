import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import axios from "axios"


 class Ongoing extends React.Component {
  state = {
    Buyers: [],
};

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
      
      {this.state.Buyers.map(Buyer=><li key = {Buyer.id}> {Buyer.id} {Buyer.fullName} {Buyer.location} {Buyer.email} {<span> <button>view</button> </span>}</li>)}

<br/>
<br/>


      </div>
    )
  }
}
export default Ongoing;