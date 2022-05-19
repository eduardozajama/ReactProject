import React from 'react'
import {Form,Button, Container,ListGroup,Card} from 'react-bootstrap'

function ContactForm() {
    return (
    <Container>
        <h1>Contact us </h1>
        <Form style={{ width: '18rem' }}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Full name</Form.Label>
    <Form.Control type="name" placeholder="Full name" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Your message</Form.Label>
    <Form.Control as='textarea' type="text" placeholder="Your message" />
  </Form.Group>
 
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>Our company's name </ListGroup.Item>
    <ListGroup.Item>Our address</ListGroup.Item>
    <ListGroup.Item>Phone Number </ListGroup.Item>
    <ListGroup.Item>Location </ListGroup.Item>
  </ListGroup>
</Card>

</Container>
    )
}

export default ContactForm
