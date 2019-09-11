import React from "react";
import { Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

// import './style.css';
function Navigation (props) {
    return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Coleman Defense Solutions</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <NavDropdown title="Shop" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Assault Rifles</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Rifles</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Pistols</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Specials</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search Inventory" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navigation;