import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
 <h1>EvisFarm</h1>
 <h2>Welcome to home page!</h2>
 <Link to="/Login">Login</Link>

      </div>
    )
  }
}

