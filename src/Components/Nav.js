import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "reactstrap";
import Logo2 from "../Images/SOLACEtext.svg";
import Logo1 from "../Images/solacelogo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  const navBackgroundStyle = {
    background: "linear-gradient(180deg, #1C2B32 0%, #0B1215 100%)",
    padding: "15px 0",
    width: "100%",
    margin: 0,
  };

  const navLinkStyle = {
    margin: '0 5px',
    color: 'rgba(255, 255, 255, 0.7)',
    padding: '8px 15px',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
  };

  const activeNavLinkStyle = {
    ...navLinkStyle,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#FFFFFF',
  };

  const buttonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    color: '#FFFFFF',
    borderRadius: '20px',
    padding: '8px 15px',
  };

  const centerNavStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '25px',
    padding: '5px',
    maxWidth: 'fit-content',
    margin: '0 auto',
  };

  const toggleButtonStyle = {
    border: '1px solid rgba(255, 255, 255, 0.5)',
    backgroundColor: 'transparent',
  };

  const toggleIconStyle = {
    backgroundColor: 'transparent',
  };

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <div className="w-100 p-0 m-0">
      <Navbar style={navBackgroundStyle} expand="lg" variant="dark" className="w-100">
        <Container fluid>
          <Navbar.Brand className="fw-bold" href="#home">
            <span>
            <img src={Logo1} alt="Logo" style={{ width: "20px", height: "auto" }} />
            <img src={Logo2} alt="Logo" style={{ width: "80px", height: "auto" }} />
            </span>
            
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={toggleButtonStyle}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon" style={toggleIconStyle}></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
            <Nav style={centerNavStyle}>
              <Nav.Link 
                href="#services" 
                style={activeNav === "security" ? activeNavLinkStyle : navLinkStyle}
                onClick={() => handleNavClick("security")}
              >
                Security
              </Nav.Link>
              <Nav.Link 
                href="#portfolio" 
                style={activeNav === "lp" ? activeNavLinkStyle : navLinkStyle}
                onClick={() => handleNavClick("lp")}
              >
                Lp Management
              </Nav.Link>
              <Nav.Link 
                href="#contact" 
                style={activeNav === "mining" ? activeNavLinkStyle : navLinkStyle}
                onClick={() => handleNavClick("mining")}
              >
                Mining
              </Nav.Link>
              <Nav.Link 
                href="#faq" 
                style={activeNav === "pro" ? activeNavLinkStyle : navLinkStyle}
                onClick={() => handleNavClick("pro")}
              >
                Pro
              </Nav.Link>
              <Nav.Link 
                href="#faq" 
                style={activeNav === "docs" ? activeNavLinkStyle : navLinkStyle}
                onClick={() => handleNavClick("docs")}
              >
                Docs
              </Nav.Link>
            </Nav>
            <Button color="primary" style={buttonStyle} onClick={() => document.getElementById('submit').scrollIntoView({ behavior: 'smooth' })}>
              Join Waitlist
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;