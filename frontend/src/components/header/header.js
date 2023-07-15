import React from "react";
import { Navbar, Container, Nav, NavDropdown, Form, Button} from "react-bootstrap";


export default function Header() {
  return (
    <Navbar bg = "primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Note Zipper</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">My Notes</Nav.Link>
            <NavDropdown title="Arslan" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
