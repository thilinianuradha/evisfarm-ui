import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Navigation from '../Common components/Navigation'

export default class Home extends Component {
  render() {
    return (

      <div className='home'>
         <Navigation/>
            <h1 className='h1'>EvisFarm</h1>
            <h2 className='h2'>Welcome to home page!</h2>
            <div className='link'>
              <Link to="/Login"> 
                <button type="button">
               Login
                </button>
              </Link>
            </div>

      </div>
    )
  }
}

