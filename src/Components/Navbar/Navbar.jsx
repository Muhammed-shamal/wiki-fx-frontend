import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import './Navbar.css'


export const NavbarSection = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation(); // Get the current location using useLocation

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <Navbar className='bg-custom'  expand="lg" fixed="top">
      <div className="container">
        <Navbar.Brand href="#home">WikiFx</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavToggle} />
        <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end ${isNavCollapsed ? 'collapse' : ''}`}>
          <Nav className="mx-auto">
            {/* Use Link component instead of Nav.Link */}
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/brokers" className={`nav-link ${location.pathname === '/brokers' ? 'active' : ''}`}>Brokers</Link>
            <Link to="/ranking-list" className={`nav-link ${location.pathname === '/ranking-list' ? 'active' : ''}`}>Ranking List</Link>
            <Link to="/education" className={`nav-link ${location.pathname === '/education' ? 'active' : ''}`}>Education</Link>
            <Link to="/news" className={`nav-link ${location.pathname === '/news' ? 'active' : ''}`}>News</Link>
            <Link to="/contact-us" className={`nav-link ${location.pathname === '/contact-us' ? 'active' : ''}`}>Contact Us</Link>
          </Nav>
          <Nav className="flex-row">
            <Nav.Link href="#youtube">
              <i className="fab fa-youtube"></i>
            </Nav.Link>
            <Nav.Link href="#facebook">
              <i className="fab fa-facebook-f"></i>
            </Nav.Link>
            <Nav.Link href="#instagram">
              <i className="fab fa-instagram"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

