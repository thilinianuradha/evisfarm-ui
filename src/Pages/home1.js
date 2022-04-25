import React, { Component } from 'react'
import './Home.css'
import { Col, Row, Container } from 'react-bootstrap'
import Image1 from '../Images/farmpng.png'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

export default class home1 extends Component {
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
    
        if (Email==="a" && Password==="b"){
          localStorage.setItem("token", "")
          this.setState({
            loggedIn: true
          })
        }
      }
    

  render() {
    if(this.state.loggedIn){
        return <Redirect to = "/Marketplace"/>
      }

    return (
      <div>
          <Row>
              <Col>
                <div>
                <p className="title">EvisFarm - Yield selling web Portal</p>
                <h4>Everyone is a Farmer !</h4>
                </div>
                <p className="homepageNote">EvisFarm simplifies the way of crop buying and selling. </p>
                <div className="homeImage bottomCol">
              <img src={Image1} alt='' width={500} height={300}/> <br/>
              </div>
              </Col>


              <Col>
              <div className='Login'>
        <h1>Welcome to EvisFarm!</h1>
        <h3>Login</h3>
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
          <input type="Submit" value="Login"/>
        </div>
      
      <p>Don't have an Account?   <Link to="/Signup"> Signup</Link></p>
        </form>
      </div>
              
              </Col>
          </Row>
      </div>
    )
  }
}
