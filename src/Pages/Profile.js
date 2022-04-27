import React, { Component, useState, useEffect } from 'react'
import Image1 from '../Images/images.jpg'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import './Profile.css';
import PendingReq from './PendingReq'
import Ongoing from './Ongoing'
import History from './History'
import Navigation from '../Common components/Navigation';

const Profile = () => {


    return (
    
 <div>
           <Row>
             <Navigation/>
             <Col>
             <h1> Hello Thilini!</h1>
             <img src={Image1} alt=''/> <br/>
            <p>Ms. Thilini Anuradha</p>
            <p>Anuradhapura</p>
            <p>anuradhathilini@gmail.com</p>

               <Link to ="/Adpost"> 
               <div className="col-md-12 text-center">
                  <button type="button" >
                      Create an advertisement
                  </button>
                  </div>
               </Link>
               </Col>
               <Col>
              
        <PendingReq/> 
        <Ongoing/>
        <History/>
               </Col>
               </Row>

      </div>
    )
  }

export default Profile;