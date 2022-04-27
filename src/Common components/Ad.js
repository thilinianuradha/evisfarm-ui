import React, { Component } from 'react'
import { Button, Card  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Ad.css'
import Im1 from '../Images/image1.jpg'

export class Ad extends Component {
  render() {
    return (
      <div>
         

         <Card style={{ width: '18rem', margin: '20px' }}>
            <Card.Img variant="top" src={Im1} />
            <Card.Body>
                <Card.Title style={{color: "#50C678"}}>Maize Cultivation</Card.Title>
                <Card.Text>
                Anuradhapura / 50 Acres <br/><br/>
                A 50 acres of maize cultivation is going to start in this december. <br/>
                Price- 0000000$ <br/>
     
                </Card.Text>
                <Button className="m-3" style={{color: "#000000" , backgroundColor:"#50C678"}} btn-sm col-xs-2 margin-left> <Link to="/AdInfo"> More Details </Link></Button>
                <Button className="m-3" style={{color: "#000000" , backgroundColor:"#50C678"}}><Link to="/Bid">Buy</Link></Button>
            </Card.Body>
        </Card>


      </div>
    )
  }
}

export default Ad
