import React from 'react'
import { Navbar, Button, Nav } from 'react-bootstrap';


export default function NavBar() {
  
  const logo = "{^url^}"
  
  return (
    <>
  
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">{logo}</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/features">Features</Nav.Link>
      <Nav.Link href="/pricing">Pricing</Nav.Link>
    </Nav>
     <Button variant="outline-light" href="/signup">Sign Up</Button>
  </Navbar>

</>
  )
}
