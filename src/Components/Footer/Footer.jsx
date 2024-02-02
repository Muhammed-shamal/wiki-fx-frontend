import React from 'react'
import './Footer.css'
import { keyframes, styled } from 'styled-components'

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinningImage = styled.img`display: block;
margin: auto;
 
width: 100px; /* Adjust the size as needed */
height: auto;
animation: ${spinAnimation} 3s linear infinite; /* Adjust the animation duration as needed */`

export default function Footer() {
    return (
        <div>
            <>
                <div className="footer-section py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <h4 class="mb-1">Thank you for your support!</h4>
                                <p class="lead mb-0">Delivering the best products</p>
                            </div>
                            <div class="col-lg-6 buttons">
                                <a href="javascript:;" className="ms-5 btn btn-twitter mb-0 me-2">
                                    <i className="fab fa-twitter  " aria-hidden="true"></i> Twitter
                                </a>
                                <a href="javascript:;" className="btn btn-facebook mb-0 me-2">
                                    <i className="fab fa-facebook-square  " aria-hidden="true"></i> Facebook
                                </a>
                                <a href="javascript:;" className="btn btn-dribbble mb-0 me-2">
                                    <i className="fab fa-instagram " aria-hidden="true"></i> Instagram
                                </a>

                                <a href="javascript:;" className="btn btn-whatsapp mb-0 me-2">
                                    <i className="fab fa-whatsapp  " aria-hidden="true"></i> Whatsapp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Footer */}
                <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                    {/* Section: Social media */}
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    </section>
                    {/* Section: Social media */}
                    {/* Section: Links  */}
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            {/* Grid row */}
                            <div className="row mt-3">
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    {/* Content */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <i className="fas fa-gem me-3" />
                                        Company name
                                    </h6>
                                    <p>
                                        Welcome to our trading site! We offer the best,
                                        most affordable products and services around.
                                        Shop now and start finding great deals!
                                    </p>

                                    <SpinningImage src={`${process.env.PUBLIC_URL}/cta_shape1.png`} />
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            one
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            two
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            trhee
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            four
                                        </a>
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Pricing
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Settings
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Orders
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">
                                            Help
                                        </a>
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p>
                                        <i className="fas fa-home me-3" /> New York, NY 10012, US
                                    </p>
                                    <p>
                                        <i className="fas fa-envelope me-3" />
                                        info@example.com
                                    </p>
                                    <p>
                                        <i className="fas fa-phone me-3" /> + 01 234 567 88
                                    </p>
                                    <p>
                                        <i className="fas fa-print me-3" /> + 01 234 567 89
                                    </p>
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row */}
                        </div>
                    </section>
                    {/* Section: Links  */}
                    {/* Copyright */}
                    <div
                        className="text-center p-4"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                    >
                        © 2021 Copyright:
                        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
                            MDBootstrap.com
                        </a>

                        <a href="" className="ms-3 me-4 text-reset">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter" />
                        </a>

                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                    {/* Copyright */}
                </footer>
                {/* Footer */}
            </>

        </div>
    )
}
