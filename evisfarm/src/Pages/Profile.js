import React, { Component } from 'react'
import { Link, Redirect} from 'react-router-dom'
import Table1 from '../Common components/Table1'
import './Profile.css';


const list = [
  {id:1, Description:"Maize cultivation/Anuradhapura/50Acres", Pending_Requests: 4},
  {id:2, Description:"Paddy cultivation/Polonnaruwa/10Acres", Pending_Requests: 2},
  {id:3, Description:"Carrot cultivation/Nuwara-Eliya/2Acres", Pending_Requests: 0},
]

const colNames = ['Id','Description','Pending_Requests']


const list2 = [
  {id:1, Description:"Maize cultivation/Anuradhapura/50Acres", Pending_Requests: 4},
  {id:2, Description:"Paddy cultivation/Polonnaruwa/10Acres", Pending_Requests: 2},
  {id:3, Description:"Carrot cultivation/Nuwara-Eliya/2Acres", Pending_Requests: 0},
]

const colNames2 = ['Id','Description','Pending_Requests']

const list3 = [
  {id:1, Description:"Maize cultivation/Anuradhapura/50Acres", Status: "Completed" , Vendor:"Thilini Anuradha"},
  {id:2, Description:"Paddy cultivation/Polonnaruwa/10Acres", Status: "Completed", Vendor:"Thilini Anuradha"},
  {id:3, Description:"Carrot cultivation/Nuwara-Eliya/2Acres", Status: "Completed", Vendor:"Thilini Anuradha"},
]

const colNames3 = ['Id','Description','Status', 'Vendor']


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
          <Link to ="/Home"> 
            <button type="button">
              Back to Home
            </button>
          </Link>

          <div><h3>Pending Requests</h3><Table1 list={list} colNames={colNames}/></div>
          <div><h3>In-progress</h3><Table1 list={list2} colNames={colNames2}/></div>
          <div><h3>History(Details)</h3><Table1 list={list3} colNames={colNames3}/></div>
       </div>
    )
  }
}
export default Profile;