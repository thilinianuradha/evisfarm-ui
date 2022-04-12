import React, { Component, useState, useEffect } from 'react'
import Image1 from '../Images/images.jpg'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import './Profile.css';
import { render } from '@testing-library/react'

const Profile = () => {
React.useEffect(()=>{
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

/*export default class Profile extends Component {
  state = {
    advertisements: [],
};
componentDidMount(){
  axios.get("https://localhost:7082/api/[advertisements]") // where the api gets fetched from that API
    .then(res=>{
      console.log(res);
      this.setState({ advertisements: res.data});
    })
}
*/
/*useEffect(()=>{
  fetchdata()
}, [])
*/
 
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
            
               </Col>
               </Row>

      </div>
    )
  }

export default Profile;