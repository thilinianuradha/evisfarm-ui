import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'

export class Ad extends Component {
  render() {
    return (
      <div>
         

         <Card style={{ width: '18rem', margin: '20px' }}>
            <Card.Img variant="top" src="nbnbnbnb " />
            <Card.Body>
                <Card.Title>Maize Cultivation</Card.Title>
                <Card.Text>
                Anuradhapura / 50 Acres <br/><br/>
                A 50 acres of maize cultivation is going to start in this december. <br/>
                Price- 0000000$
                </Card.Text>
                <Button variant="light">More Details</Button>

                <Button variant="light">Buy</Button>
            </Card.Body>
        </Card>


      </div>
    )
  }
}

export default Ad
