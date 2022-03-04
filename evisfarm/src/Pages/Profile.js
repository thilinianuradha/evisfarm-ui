import React, { Component } from 'react'
import { Link, Redirect} from 'react-router-dom'
import Table1 from '../Common components/Table1'
import './Profile.css';
import Image1 from '../Images/images.jpg'
import Axios from 'axios'


const list = [
  {id:1, Description:"Maize cultivation/Anuradhapura/50Acres", Pending_Requests: 4},
  {id:2, Description:"Paddy cultivation/Polonnaruwa/10Acres", Pending_Requests: 2},
  {id:3, Description:"Carrot cultivation/Nuwara-Eliya/2Acres", Pending_Requests: 0},
]

const colNames = ['Id','Description','Pending_Requests']


const list2 = [
  {id:1, Description:"Maize cultivation/Anuradhapura/50Acres", Inprogress: 4},
  {id:2, Description:"Paddy cultivation/Polonnaruwa/10Acres", Inprogress: 2},
  {id:3, Description:"Carrot cultivation/Nuwara-Eliya/2Acres", Inprogress: 0},
]

const colNames2 = ['Id','Description','Inprogress']

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
          return <Redirect to = "/" />
      }
      return (
        <div className='row profile'>
           <div className='col column1'>
             <h1> Hello Thilini!</h1>
             <img src={Image1} alt=''/> <br/>
               <Link to ="/"> 
               <div class="col-md-12 text-center">
                  <button type="button" >
                      Back to Home
                  </button>
                  </div>
               </Link>
           </div>
           <div className='col column2 Table1'>

             <div className='table_list'><h5>Pending Requests</h5><Table1 list={list} colNames={colNames}/></div>
             <div className='table_list'><h5>In-progress</h5><Table1 list={list2} colNames={colNames2}/></div>
             <div className='table_list'><h5>History(Details)</h5><Table1 list={list3} colNames={colNames3}/></div>
           </div>
        </div>
    )
  }
}
export default Profile;