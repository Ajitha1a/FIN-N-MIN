import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from '../images/logo-2.png';
import download from '../images/download-icon.png';
import { saveAs } from "file-saver";

function Header(){
  const saveFile = () => {
    saveAs(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf ",
      "examp.pdf"
    );
  };
  return(
    <>
      <Navbar collapseOnSelect expand="md" className="headerbar">
        <Container fluid>
          <Navbar.Brand>
            <img src={logo} className="finnminlogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className='HOME'>
              <Nav.Link href="#HOME" className="active">Home</Nav.Link>
              <Nav.Link href="#DISCOVER">Discover</Nav.Link>
              <Nav.Link href="#ABOUT US">About Us</Nav.Link>
              <Nav.Link href="#CONTACT US">Contact Us</Nav.Link>
              <Nav.Link>
                <div className="button" onClick={saveFile}>
                  Brochure
                  <img src={download} className="download" />
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;