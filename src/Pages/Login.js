import { Link } from '@mui/material';
import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props)
    let loggedIn = false
    this.state = {
      Username:"",
      Password:"",
      loggedIn
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  onChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submitForm(e){
    e.preventDefault()
    const {Username, Password} = this.state

    if (Username==="Thilini" && Password==="thilini@123"){
      localStorage.setItem("token", "")
      this.setState({
        loggedIn: true
      })
    }
  }

  render() {
    if(this.state.loggedIn){
      return <Redirect to = "/Profile"/>
    }
    return (
      <div className='Login'>
        <h1>Welcome to EvisFarm!</h1>
        <form onSubmit={this.submitForm}>
          <div className='input'>
          <input type="text" placeholder="Username" name="Username" value={this.state.Username} onChange={this.onChange}/>
          <br/> 
          </div>
          <div className='input'>
          <input type="Password" placeholder="Password" name="Password" value={this.state.Password} onChange={this.onChange}/>
          <br/>
          </div>
        <div className='input'>
          <input type="Submit" value="Submit"/>
        </div>
      <p> Username = "Thilini" and Password = "thilini@123"</p>
      <p>Don't have an Account?   <Link to="/Signup"> Signup</Link></p>
        </form>
      </div>

    )
  }
}