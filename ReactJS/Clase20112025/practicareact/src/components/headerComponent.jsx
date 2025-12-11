import React, { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Button, Modal } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export default function HeaderComponent({logInAdmin, logOutAdmin, authAdmin}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/'>Home</NavLink>
                        <NavDropdown title="Masculino" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Camisas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Pantalones</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Ropa interior</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to='/about'>About Us</NavLink>
                        <NavLink to='/contact'>Contact Us</NavLink>
                        {
                            authAdmin && (<NavLink to='/admin'>Admin</NavLink>)
                        }
                        <Button className='btn btn-outline-light' onClick={()=> authAdmin ? logOutAdmin() : logInAdmin()}>
                            {authAdmin ? 'LogOut' : 'LogIn'}
                        </Button>
                    </Nav>
                    {/* <Button variant="primary" onClick={handleShow}>
                        Launch demo modal
                    </Button> */}
                </Navbar.Collapse>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>¡Su Compra!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Navbar>
    )
}
