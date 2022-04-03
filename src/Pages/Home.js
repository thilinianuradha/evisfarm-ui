import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Navigation from '../Common components/Navigation'
import { Col, Container, Row} from 'react-bootstrap'
import Image1 from '../Images/farmpng.png'


export default class Home extends Component {
  render() {
    return (
      <div className='home'>
<Container>
<p className="title">EvisFarm - Yiled selling web Portal</p>
  <h4>Everyone is a Farmer !</h4>
</Container>
         <Navigation />
         <Container className="container2">
           <Row>
           <Col className="bottomCol">
         <Row className="bottom-half">
              <p className="homepageNote">EvisFarm simplifies the way of crop buying and selling. </p>
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
              </Col>
              <Col className="homeImage bottomCol">
              <img src={Image1} alt='' width={500} height={300}/> <br/>
              </Col>
              </Row>
              </Container>

      </div>
    )
  }
}



