import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

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
      localStorage.setItem("token", "hjwgwjhgefwjeghfwjhef")
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
      <div>
<h1>welcome to EvisFarm!</h1>
<form onSubmit={this.submitForm}>
  <input type="text" placeholder="Username" name="Username" value={this.state.Username} onChange={this.onChange}/>
  <br/>
  <input type="Password" placeholder="Password" name="Password" value={this.state.Password} onChange={this.onChange}/>
  <br></br>
  <input type="Submit"/>

  <p> Username = "Thilini" and Password = "thilini@123"</p>
</form>
      </div>
    )
  }
}