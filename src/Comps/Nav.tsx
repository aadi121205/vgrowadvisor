import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";

const BasicNavbar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link}>MySite</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}>Home</Nav.Link>
            <Nav.Link as={Link}>About</Nav.Link>
            <Nav.Link as={Link}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BasicNavbar;