import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Navigation from '../Common components/Navigation'
import { Col, Container, Row} from 'react-bootstrap'
import Image3 from '../Images/farm.jpg'


export default class Home extends Component {
  render() {
    return (
      <div className='home'>
<Container>
<h1 className="display-4 mb-4">EvisFarm</h1>
  <h4>EveryoneisaFarmer!</h4>
</Container>
         <Navigation />
         <Row>
           <Row>
            <h3 className='h2 display-4 mb-4'>Welcome to home page!</h3>
            </Row>
            <Row>
              <Col>
              <Link to="/Signup"> 
                <button variant="outline-success"><h4>
              I want to sell..
              </h4> </button>
              </Link>
              </Col>
              <Col>
              <Link to="#"> 
                <button type="button"><h4>
              I want to buy..
              </h4></button>
              </Link>
              </Col>
              </Row>
              <Row className='mt-5'>
              <img src={Image3} alt='' height={200}/> <br/>
              </Row>
            </Row>

      </div>
    )
  }
}

