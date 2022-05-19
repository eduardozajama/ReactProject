import React from 'react'
import {CardGroup,Card, Container} from 'react-bootstrap'

function Team() {
    return (

    <Container>
        <h1>Our team</h1>
          <CardGroup>
  <Card>
    <Card.Img variant="top" src='../images/card01.jpg' />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        Description:<br></br>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src='../images/card01.jpg' />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        Description:<br></br>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src='../images/card01.jpg' />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        Description:<br></br>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
   
  </Card>
</CardGroup>  
</Container>

    )
}

export default Team