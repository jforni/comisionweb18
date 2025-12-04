import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap/esm';
import { NavLink } from 'react-router-dom';

export default function HeaderComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to='/'>MentorIA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/mentorchat'>MentorChat</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/admin'>Admin</NavLink>
          </Nav>
          <Button variant='info'>Iniciar Sesión</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
