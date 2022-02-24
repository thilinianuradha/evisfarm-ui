import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Navigation from '../Common components/Navigation'
import { Container} from 'react-bootstrap'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
<Container>
<h1>EvisFarm</h1>
  <p>EveryoneisaFarmer!</p>
</Container>
         <Navigation />
            <h3 className='h2'>Welcome to home page!</h3>
            <div className='link'>
              <Link to="/Signup"> 
                <button type="button">
              I want to sell..
                </button>
              </Link>
           
              <Link to="#"> 
                <button type="button">
              I want to buy..
                </button>
              </Link>
            </div>
          

      </div>
    )
  }
}

