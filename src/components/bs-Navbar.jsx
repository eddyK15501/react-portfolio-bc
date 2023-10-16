/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const bsNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand className="fs-1 text-light" href="#home">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav text-light">
          <Nav className="ms-auto fs-6 flex-gap">
            <Nav.Link className="mx-auto text-light" href="#about-me">About Me</Nav.Link>
            <Nav.Link className="mx-auto text-light" href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className="mx-auto text-light" href="#contact-me">Contact Me</Nav.Link>
            <Nav.Link className="mx-auto text-light" href="#resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default bsNavbar