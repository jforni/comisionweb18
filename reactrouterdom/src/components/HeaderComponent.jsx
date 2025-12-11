import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export default function HeaderComponent({logIn, logOut, auth}) {
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
                        {
                            auth && (
                                <NavLink to='/admin'>Admin</NavLink>
                            )
                        }
                        <Button className="btn btn-outline-light" onClick={()=>auth ? logOut() : logIn()}>
                            {auth ? 'Log Out' : 'Log In'}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
