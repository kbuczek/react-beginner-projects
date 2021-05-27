import React, { FaBars } from "react";
import { Nav, NavDropdown, Container } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="jumbotron" style={{ marginBottom: "0px" }}>
        Nazwa zarządcy nieruchomości
      </div>
      {/* <Container> */}
      <div className="sticky-top">
        <Nav
          variant="pills"
          className="navbar-expand-md navbar-dark bg-dark container"
          defaultActiveKey="home"
        >
          <Nav.Item>
            <Nav.Link eventKey="home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="option1">Option 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="option2">Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="dropdown">
              <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  Something else here
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="option3">Option 3</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      {/* </Container> */}
      <div className="peepee" style={{ marginBottom: "0px" }}>
        Content
      </div>
    </>
  );
};

export default Navbar;
