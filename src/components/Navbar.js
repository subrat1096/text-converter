import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

export const Navigate = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="/">Text-Utility</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-Navbar-nav" />
          <Navbar.Collapse id="basic-Navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/"><b>Home</b></Nav.Link>
              <Nav.Link as={Link} to="about"><b>About</b></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant="outline-primary">Search</Button>
        </Container>
      </Navbar>
    </div>
  );
};
