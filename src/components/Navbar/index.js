import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import {Navbar, NavDropdown, Nav, Button} from 'react-bootstrap';
import logo from './../../assets/logo.svg';
import './styless.css';

const NavBar = () => (
    <Navbar  bg="light" expand="lg" className="justify-content-md-center">
        <Toolbar className={"appBar"}>
            <Navbar.Brand href="#" ><img src={logo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto navBar" >
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Plans</Nav.Link>
                    <NavDropdown title="Organizations" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Organizations</NavDropdown.Item>
                        <NavDropdown.Item href="#">Organizations</NavDropdown.Item>
                        <NavDropdown.Item href="#">Organizations</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Organizations</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" className="browseCourses">Browse courses</Nav.Link>
                    <Nav.Link href="#">Support</Nav.Link>
                    <Button variant="outline-secondary" className="buttonSignIn">Sign in</Button>
                    <Button variant="success" className="buttonTrial">7 day trial</Button>
                </Nav>
            </Navbar.Collapse>
        </Toolbar>
    </Navbar>
);

export default NavBar;