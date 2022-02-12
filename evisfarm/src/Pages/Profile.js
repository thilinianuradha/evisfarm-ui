import React, { Component } from 'react'
import { Link, Redirect} from 'react-router-dom'
import Table1 from '../Common components/Table1'
import './Profile.css';


const list = [
  {id:1, name:"Thilini Anuradha", Age: 25},
  {id:2, name:"Piyumi Thathsarani", Age: 25},
  {id:3, name:"Thanuja Mahendran", Age: 25},
]

const colNames = ['Id','Name','Age']

class Profile extends Component {
constructor(props){
    super(props)
    const token = localStorage.getItem("token")

    let loggedIn = true
    if (token==null){
        loggedIn=false
    }
    this.state = {
        loggedIn
    }
}

  render() {
      if(this.state.loggedIn===false){
          return <Redirect to = "/Home" />
      }
    return (
      <div className='Table1'>
<h1> Hello Thilini!</h1>
<Link to ="/Home">Back to Home</Link>
<Table1 list={list} colNames={colNames}/>

      </div>
    )
  }
}
export default Profile;