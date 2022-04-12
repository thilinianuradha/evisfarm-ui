
import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props)
    let loggedIn = false
    this.state = {
      Email:"",
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
    const {Email, Password} = this.state

    if (Email==="Thilini@gmail.com" && Password==="thilini@123"){
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
          <input type="text" placeholder="Email" name="Email" value={this.state.Email} onChange={this.onChange}/>
          <br/> 
          </div>
          <div className='input'>
          <input type="Password" placeholder="Password" name="Password" value={this.state.Password} onChange={this.onChange}/>
          <br/>
          </div>
        <div className='input'>
          <input type="Submit" value="Submit"/>
        </div>
      
      <p>Don't have an Account?   <Link to="/Signup"> Signup</Link></p>
        </form>
      </div>

    )
  }
}