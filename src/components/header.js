import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    
  return (
    <div className='Header' >
      <Navbar bg='dark' variant='dark'sticky='top' expand='lg'  >
        <Navbar.Brand>
         <img src='images/logo.png' alt='logo' width={100}></img>
         logo</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
        
        <Nav>
           <Nav.Link href='home'>Home</Nav.Link>
           <Nav.Link href='about'>About us</Nav.Link>
           <Nav.Link href='team'>Our Team</Nav.Link>
           <Nav.Link href='profiles'>Profiles</Nav.Link>
           <Nav.Link href='team'>Contact us</Nav.Link>

           <Button size='lg'>Register </Button>   
       
       </Nav>
       
       </Navbar.Collapse>
       </Navbar>
       
    </div>
  )
}

export default Header