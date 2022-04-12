import React, { Component, useState, useEffect } from 'react'
import Image1 from '../Images/images.jpg'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import './Profile.css';










const Profile = () => {



  const [t1,sett1] = useState ('')

  let one = "https://localhost:7082/api/[advertisements]"
  let two = "https://localhost:7082/api/[Buyers]"
   
  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);
   
  axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
    const responseOne = responses[0]
    const responseTwo = responses[1]
    //console.log(responseOne, responseTwo);
   sett1(responseOne.data)
   
    // use/access the results 
  })).catch(errors => {
    // react on errors.
  })







/*React.useEffect(()=>{
  Promise.all([
      fetch('https://localhost:7082/api/[advertisements]'),
      fetch('https://localhost:7082/api/[Buyers]')
  ]).then(function (responses) {
      // Get a JSON object from each of the responses
      return Promise.all(responses.map(function (response) {
          return response.json();
      }));
  }).then(function (data) {
      // Log the data to the console
      // You would do something with both sets of data here
      console.log(data[0]);
  }).catch(function (error) {
      // if there's an error, log it
      console.log(error);
  });
  },[])

*/












/*const Profile = () => {
  const [t1, sett1] = useState([]);
  const [t2, sett2] = useEffect([]);

const fetchdata = () => {
  const table1 ='https://localhost:7082/api/[advertisements]';
  const table2='https://localhost:7082/api/[crops]'

const one = axios.get(table1)
const two = axios.get(table2)
axios.all(one,two).then(
  axios.spread((...allData) => {
    const one=allData
    const two=allData
    
    console.log(one)
    console.log(two)
  } )
)
}*/


 
    return (
    
 <div>
           <Row>
             <Col>
             <h1> Hello Thilini!</h1>
             <img src={Image1} alt=''/> <br/>
               <Link to ="/"> 
               <div className="col-md-12 text-center">
                  <button type="button" >
                      Back to Home
                  </button>
                  </div>
               </Link>
               </Col>
               <Col>
              <p> {t1} </p> 
               </Col>
               </Row>

      </div>
    )
  }

export default Profile;