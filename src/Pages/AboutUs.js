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
           <p>ukehrkew ekthejrt elktkjwl wlkejwl wlkerjw wlkej wlekjflej ekjgheorbye euyh5y ethekrg j4lti34 4htljh4t etjherjthea rtlhaertjae ertherht aeoirtheurt awet owiithoeut </p>
        </Col>
        <Col lg='7' className='d-flex align-items-center'>
           <p>
               <span>Grow </span>
               <span>Sell </span>
               <span>earn </span>
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