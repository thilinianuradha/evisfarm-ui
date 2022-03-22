import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Navigation from '../Common components/Navigation';
import SocialMedia from '../Common components/SocialMedia';


export default function Contact() {
  return (
    <div >
         
              <Navigation/>
           
       <Container>
           <Row className="mb-1 mt-3">
               <Col md='8'>
                   <h1 className="display-4 mb-4">
                       Contact Us
                   </h1>
               </Col>
           </Row>
           <Row className='sec_sp'>
               <Col lg='5'className='mb-5 '>
                   <h3 className='color_sec py-4'> Get in Touch</h3>
                   <address>
                       <p>
                       <strong> E-mail : evisfarm@gmail.com</strong>
                       </p>
                       <p>
                           <strong> Phone : +94 526 5224</strong>
                       </p>
                       <p>
                           <strong> Address : No. 5, Main street , Anuradhapura</strong>
                       </p>
                   </address>
                   
               </Col>
               <Col lg='7' className='d-flex align-items-center'>
                   <form className='contact_form w-100'>
                       <Row>
                           <Col lg='6' className="form-group">
                               <input 
                               className='form-control'
                               id='name'
                               name='name'
                               placeholder='Name'
                               type='text'
                               />
                           </Col>
                    
                           <Col lg='6' className='form-group'>
                               <input 
                               className='form-control'
                               id='email'
                               name='email'
                               placeholder='Email'
                               type='email'
                               />
                           </Col>
                       </Row>
                       <br/>

                       <textarea className='form-control rounded-0' id='message'
                                                                    name='message'
                                                                    placeholder='Message'
                                                                    rows='5'>

                        </textarea>
                        <br/>
                        <Row>
                            <Col lg='10' className='form-group'>
                                <button variant="dark" type='submit' >Send</button>
                            </Col>
                        </Row>
                   </form>
               </Col>
           </Row>
           <br/>
           <Row className='sec_sp'>
              <SocialMedia/>
           </Row>
       </Container>
    </div>
  )
}
