import React from 'react'
import { ButtonGroup,Button, Container } from 'react-bootstrap'

const Profiles = () => {
  return (
    <Container>
     <h1>Profiles</h1>
      Here we render all the profiles in our Data Base in a Card, in groups of 2, at the bottom of the component we have 2 buttons to navigate, going forward and backward.
      <ButtonGroup aria-label="Basic example">
  <Button variant="primary" disabled>-</Button>
  
  <Button variant="primary">+</Button>
</ButtonGroup>
</Container>
  )
}

export default Profiles
