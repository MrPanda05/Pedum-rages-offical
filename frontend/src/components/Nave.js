import React from 'react'
import { Nav, Navbar, NavDropdown, Container  } from 'react-bootstrap'

const Nave = () => {
    return (
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
      <Container>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="ms">
           <Nav.Link href="/"><i className='fas fa-home-alt'></i>Inicio</Nav.Link>
           <Nav.Link href="/Sobre"><i className='fas fa-info'></i>Sobre</Nav.Link>
           <Nav.Link href="/Hist"><i className='fas fa-book'></i>Histórias</Nav.Link>
           <Nav.Link href="/Aju"><i className='fas fa-user'></i>Ajudantes</Nav.Link>
       </Nav>
       </Navbar.Collapse>
       </Container>
   </Navbar>
    )
}

export default Nave
