import { React, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import './Navbar.css'
import Currency from '../Currency-section/currency';


export const NavbarSection = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation(); // Get the current location using useLocation


  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
  return (
    <div hidden={props.isHide}>
      <Currency />
      <Navbar className='bg-custom' expand="lg" data-bs-theme="dark">
        <Container fluid>
          <Link to="/"  > <Navbar.Brand style={{ color: "whitesmoke" }} href="/">Wiki-fx</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavToggle} />
          <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end ${isNavCollapsed ? 'collapse' : ''}`}>
            <Nav className="ms-5 me-auto">
              {/* Use Link component instead of Nav.Link */}
              {/* <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`}>Home</Link> */}
              <Link to="/brokers-list" className={`nav-link ${location.pathname === '/brokers-list' ? 'active-link' : ''}`}>Brokers</Link>
              <Link to="/ranking-list" className={`nav-link ${location.pathname === '/ranking-list' ? 'active-link' : ''}`}>Ranking List</Link>
              {/* <Link to="/education-Educate-yourself" className={`nav-link ${location.pathname === '/education-Educate-yourself' ? 'active-link' : ''}`}>Education</Link> */}
              <Nav.Link href="/education-Educate-yourself" className={`nav-link ${location.pathname === '/education-Educate-yourself' ? 'active-link' : ''}`}>Education</Nav.Link>
              <Link to="/news" className={`nav-link ${location.pathname === '/news' ? 'active-link' : ''}`}>News</Link>
              <Link to="/about-us" className={`nav-link ${location.pathname === '/about-us' ? 'active-link' : ''}`}>About Us</Link>
              <Link to="/contact-us" className={`nav-link ${location.pathname === '/contact-us' ? 'active-link' : ''}`}>Contact Us</Link>
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
        </Container>
      </Navbar>
    </div>
  )
};

