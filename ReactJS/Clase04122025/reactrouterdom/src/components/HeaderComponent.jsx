import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export default function HeaderComponent() {
    return (
        <Navbar expand="lg" className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                       <NavLink to='/'>Home</NavLink> 
                       <NavLink to='/about'>About</NavLink>
                       <NavLink to='/contact'>Contact</NavLink>
                       <NavLink to='/turnos'>Turnos</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
