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
<p className="title">EvisFarm</p>
  <h4>EveryoneisaFarmer!</h4>
</Container>
         <Navigation />
         <Row>
            <Row>
              <Col>
              <Link to="/Signup"> 
                <button className="button"><h5>
              I want to sell..
              </h5> </button>
              </Link>
              </Col>
              <Col>
              <Link to="/Signup"> 
                <button className="button"><h5>
              I want to buy..
              </h5></button>
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



