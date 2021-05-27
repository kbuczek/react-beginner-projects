import React from "react";
import { Nav, NavDropdown, Image, Row, Container, Col } from "react-bootstrap";
import "./Navbar.css";
import MyLogo from "../Images/houses.jpg";

const Navbar = () => {
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
              {/* <Image src={require(MyLogo)} alt="logo" /> */}
            </Col>
            <Col sm={8} className="center" id="nazwa">
              <div>
                Zarządca nieruchomości ".NET" Ulica Przygodna 4/78a , Kraków
                30-835
              </div>
            </Col>
          </Row>
        </Container>
      </div>

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
          <Nav.Item className="justify-content-end">
            <Nav.Link eventKey="logout">Log out</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <div className="content">Content</div>
    </>
  );
};

export default Navbar;
