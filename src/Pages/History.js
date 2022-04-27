import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import axios from "axios"


 class History extends React.Component {
  state = {
    crops: [],
};

componentDidMount(){
    axios.get("https://localhost:7082/api/[crops]") // where the api gets fetched from that API
      .then(res3=>{
        console.log(res3);
        this.setState({ crops: res3.data});
      })
  }


  render() {
    return (
      <div>
      {this.state.crops.map(crop=><li key={crop.id}>{crop.id}{crop.cropType} {crop.cropName} {crop.isAvailable} {<span> <button>view</button> </span>}</li>)}
     

<br/>
<br/>


      </div>
    )
  }
}
export default History;