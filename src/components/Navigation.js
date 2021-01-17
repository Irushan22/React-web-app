import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Gozt Runner</Navbar.Brand>
        <Nav className="ml-auto">
          {/* <Nav.Link href="/">Home</Nav.Link> */}
          <Nav.Link href="/Login">Login</Nav.Link>
          <Nav.Link href="/SignUp">Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
