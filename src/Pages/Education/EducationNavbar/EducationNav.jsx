import { Navbar, Container, Nav } from 'react-bootstrap';
import './EducationNav.css'

function EducationNav() {
    return (
        <>
            <Navbar expand="lg" bg="light" variant="light" className="shadow-3" fixed={'top'}>
                <Container fluid>
                    <Navbar.Brand href="#" className="mr-auto">
                        <i className="fas fa-globe-europe text-primary"></i>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="mx-5">
                            <Nav.Item>
                                <Nav.Link href="/" className="fw-bold edu-nav-link">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/brokers-list" className='edu-nav-link'>Brokers</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/ranking-list" className='edu-nav-link'>Ranking List</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#" className='edu-active'>Education</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/about-us" className='edu-nav-link'>About us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/contact-us" className='edu-nav-link'>Contact us</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <div className="col-md d-flex justify-content-end align-items-center">
                            <div className="social-media .f_social_icon">
                                <p className="mb-0 d-flex">
                                    <a
                                        href="#"
                                        className=""
                                    >
                                        <span className="fab fa-facebook me-3">
                                            <i className="sr-only">Facebook</i>
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className=" "
                                    >
                                        <span className="fab fa-twitter me-3">
                                            <i className="sr-only">Twitter</i>
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className=" "
                                    >
                                        <span className="fab fa-instagram me-3">
                                            <i className="sr-only">Instagram</i>
                                        </span>
                                    </a>

                                </p>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default EducationNav;


{/* <Nav className="flex-row">
                        <Nav.Item>
                            <Nav.Link href="#!">
                                <i className="fab fa-youtube"></i>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#!">
                                <i className="fab fa-facebook-f"></i>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#!">
                                <i className="fab fa-twitter"></i>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#!">
                                <i className="fab fa-instagram"></i>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav> */}