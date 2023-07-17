import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="./img/logo.jpg"
            width="40"
            height="45"
            className="d-inline-block align-top"
          />{' '}
          RTecno
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Products" id="products-dropdown">
              <NavDropdown.Item href="/motherboards">Motherboards</NavDropdown.Item>
              <NavDropdown.Item href="/processors">Processors</NavDropdown.Item>
              <NavDropdown.Item href="/ram-memory">RAM Memory</NavDropdown.Item>
              <NavDropdown.Item href="/storage">Storage</NavDropdown.Item>
              <NavDropdown.Item href="/graphics-cards">Graphics Cards</NavDropdown.Item>
              <NavDropdown.Item href="/power-supplies">Power Supplies</NavDropdown.Item>
              <NavDropdown.Item href="/cases">Cases</NavDropdown.Item>
              <NavDropdown.Item href="/pc-cooling">PC Cooling</NavDropdown.Item>
              <NavDropdown.Item href="/keyboards-mice-pads">Keyboards, Mice, and Pads</NavDropdown.Item>
              <NavDropdown.Item href="/headsets-microphones">Headsets and Microphones</NavDropdown.Item>
              <NavDropdown.Item href="/web-ip-cameras">Web and IP Cameras</NavDropdown.Item>
              <NavDropdown.Item href="/monitors">Monitors</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;