import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
 <h1>EvisFarm</h1>
 <h2>Welcome to home page!</h2>
 <Link to="/Login"> <button type="button">
          Login
     </button></Link>

      </div>
    )
  }
}

