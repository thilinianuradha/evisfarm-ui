import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import Navigation from '../Common components/Navigation';
import Image2 from '../Images/images.png';
import SocialMedia from '../Common components/SocialMedia'

export default function AboutUs() {
  return (
   <div>
       <Navigation/>

    <Container>
    <Row className="mb-1 mt-3">
        <Col md='8'>
            <h1 className="display-4 mb-4">
                About Us
            </h1>
        </Col>
    </Row>
    <Row className='sec_sp'>
        <Col>
        <img src={Image2} alt='' width={240} /> <br/>
            
        </Col>
        <Col lg='7' className='d-flex align-items-center'>
           <p>The "EvisFarm" gives you a new experience in selling your crops. Our intention is to provide you a great service. So give a try on "EvisFarm" ! </p>
        </Col>
        <Col lg='7' className='d-flex align-items-center'>
           <p>
               <span> Grow !</span>
               <span> Sell !</span>
               <span> earn !</span>
           </p>
        </Col>
</Row>
<Row className='sec_sp'>
              <SocialMedia/>
           </Row>
            
</Container>
</div>
)
}