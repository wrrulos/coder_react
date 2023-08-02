import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="./img/logo.jpg"
            width="40"
            height="45"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/products/monitors">Monitors</Nav.Link>
            <Nav.Link as={Link} to="/products/accessories">Accessories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;