import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Container, Button, ListGroup, Figure} from 'react-bootstrap'
import Navigation3 from '../Common components/Navigation3'
import Table1 from '../Common components/Table1'



const list = [
  {Row1:"Crop Type", Row2:'-----------'},
  {Row1:"Location",Row2:'-----------', },
  {Row1:"Area of cultivation",Row2:'-----------',},
  {Row1:"Expected Harvest",Row2:'-----------', },
  {Row1:"Starting date",Row2:'-----------', },
  {Row1:"Targetted Selling Price", Row2:'-----------',},
]

const colNames = ['','']  


export default class AdInfo extends Component {
  render() {
    return (
      <div>
      <Navigation3/>
      <Container style={{ margin : '50px'}}>
      <Row>
    <Col> <ListGroup.Item>Maize cultivation in Anuradhapura</ListGroup.Item> <br/>
    <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt=""
    src=""
    border={150} 
  />
  <Figure.Caption>
    The land of 50 Acres.
  </Figure.Caption>
</Figure>
</Col>
    <Col>
    <Container> 
    <Row>
      
    <div className='col Table1'>

<div className='table_list'><Table1 list={list} colNames={colNames}/></div>

</div>
    
</Row>
<br/>
<br/>
<br/>

  <Link to="/Bid"> <Button> I will keep a price here.. </Button> </Link>

     </Container>
    </Col>
  </Row> 
      </Container>
     

      </div>
    )
  }
}
