/*import React, { Component } from 'react'
import { Link, Redirect} from 'react-router-dom'
import Table1 from '../Common components/Table1'
import './Profile.css';
import Image1 from '../Images/images.jpg'
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

  


class Profile extends Component {
 
  fetchRecords = () =>{

let ads = "https://localhost:7082/api/[advertisements]";
let buyers =  "https://localhost:7082/api/[Buyers]";


const requestOne = axios.get(ads);
const requestTwo = axios.get(buyers);

axios
  .all([requestOne, requestTwo])
  .then(
    axios.spread((...responses) => {
      const responseOne = responses[0];
      const responseTwo = responses[1];

      // use/access the results
      console.log(responseOne, responseTwo);
    })
  )
  .catch(errors => {
    // react on errors.
    console.error(errors);
  });






}
componentDidMount(){
  this.fetchRecords();
}






    

    //const token = localStorage.getItem("token")

    /*let loggedIn = true
    if (token==null){
        loggedIn=false
    }
    this.state = {
        loggedIn
    }
    */


  /*render()
   {
    const { posts } = this.state 
    return
    (
       
        <div className='row profile'>
           <div className='col column1'>
             <h1> Hello Thilini!</h1>
             <img src={Image1} alt=''/> <br/>
               <Link to ="/"> 
               <div class="col-md-12 text-center">
                  <button type="button" >
                      Back to Home
                  </button>
                  </div>
               </Link>
           </div>
           <div className='col column2 Table1'>

           <div className='table_list'><h5>Advertisements</h5><Table1 list={
             posts.length ?
             posts.map(post => <div key={post.id}>{post.id}{post.location}{post.description}</div> ): null
           }/></div>
          



             <div className='table_list'><h5>Pending Requests</h5><Table1 list={list} colNames={colNames}/></div>
             <div className='table_list'><h5>In-progress</h5><Table1 list={list2} colNames={colNames2}/></div>
             <div className='table_list'><h5>History(Details)</h5><Table1 list={list3} colNames={colNames3}/></div>
           </div>
        </div>
   
    )
  }



  return (

<div >
 
           <Row >
             <Col>
             <h1> Hello Thilini!</h1>
             <img src={Image1} alt=''/> <br/>
               <Link to ="/"> 
               <div >
                  <button type="button" >
                      Back to Home
                  </button>
                  </div>
               </Link>
               </Col>
           <Col>
           <Row>
           list of state
      {
        ads.length ?
        ads.map(ad => <div key={ad.id}>{ad.location} {ad.description} {ad.estimatedPrice} {ad.areaofCultivation} {ad.nameofOwner}</div>) :
        null
      }
      </Row>
          <Row>

           list of state
      {
        buyers.length ?
        buyers.map(buyer => <div key={buyer.id}>{buyer.location} {buyer.description} {buyer.estimatedPrice} {buyer.areaofCultivation} {buyer.nameofOwner}</div>) :
        null
      }</Row>
         
      </Col>
    )
   </Row>
          </div>
  )}
}

*/