import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavDropdown,
  Image,
  Row,
  Container,
  Col,
  Button,
  Navbar,
} from "react-bootstrap";
import "./MyNavbar.css";

const MyNavbar = () => {
  return (
    <>
      <div className="jumbotron">
        <Container>
          <Row>
            <Col sm={4}>
              <Image
                src="http://www.realestatelogodesign.com/real-estate-logos-1/three-houses-logo.jpg"
                alt="logo"
              />
              {/* <Image src={require("../../Images/houses.jpg")} alt="logo" /> */}
            </Col>
            <Col sm={8} className="center" id="nazwa">
              <div>
                Very long company name and some crucial information about your
                company.
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="navbar sticky-top"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav variant="pills" defaultActiveKey="home">
              <Nav.Item>
                <Nav.Link eventKey="home">
                  <Link to="/my-navbar/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="option1">
                  <Link to="/my-navbar/option1">Option 1</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="option2">
                  <Link to="/my-navbar/option2">Option 2</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item onSelect={(event) => event.preventDefault()}>
                <Nav.Link eventKey="dropdown">
                  <NavDropdown title="Dropdown" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">
                      <Link to="/my-navbar/action">Action</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">
                      <Link to="/my-navbar/separated-link">Separated Link</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="option3">
                  <Link to="/my-navbar/option3">Option 3</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link eventKey="logout">Log out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* <div className="content">Content</div> */}
      </Container>
    </>
  );
};

export default MyNavbar;
