import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { Outlet } from "react-router-dom";
//import "../NavBar/NavBar.css";

export const NavbarMenu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home" href="#home">
            Domarcas.com
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/qsomos" href="#qsomos">
              Quienes Somos
            </Nav.Link>
            <Nav.Link as={Link} to="/portafolio" href="#portafolio">
              Portafolio
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto" href="#contacto">
              Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/login" href="#login">
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
