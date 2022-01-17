import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

function Footer(){
  return(
    <>
      <Navbar expand="sm" className="footer">
        <Container fluid className="responsfooter">
          <Navbar.Brand id="copyright">
            © 2022-2035 Fin-N-Min.com
          </Navbar.Brand>
          <Navbar id="responsive-navbar-nav">
            <Nav>
              <Nav.Link id='footer-menu'>Home</Nav.Link>
              <Nav.Link id='footer-menu'>Discover</Nav.Link>
              <Nav.Link id='footer-menu'>About Us</Nav.Link>
              <Nav.Link id='footer-menu'>Contact Us</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
    </>
  )
}
export default Footer;