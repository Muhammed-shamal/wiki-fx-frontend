import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import './Contact.css'

export default function Contact() {
    return (
        <>
            <div>
                <div className="bg-img w-full px-4 md:w-8/12 lg:w-7/12">
                    <Col lg='4'>
                        <div className="container p-3 heading-plus-sub mb-5">
                            <h1 style={{ color: 'whitesmoke' }}>
                                Contact Us
                            </h1>
                            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center' }}>
                                <div><span className='logo_nav'>Wiki-fx
                                </span></div>

                                <span> <i class="fa-solid fa-arrow-right text-light" ></i></span>
                                <div><h4 style={{ color: 'white' }}>Contact US
                                </h4></div>
                            </div>
                        </div>
                    </Col>

                </div>
            </div>


            {/* className={window.innerWidth <= 555 ? `p-0` : 'container p-5'} */}
            <div>
                <Row className="ld-row ld-row-outer" style={{ marginTop: '2em' }}>
                    <div class=" text-center">
                        <div >
                            <h3>Contact us</h3>

                            <p>
                                For further questions, including partnership opportunities, <br />please email hello@creative-tim.com
                                or contact using our contact form.
                            </p>
                            <img src={`${process.env.PUBLIC_URL}/pricing_wave.png`} width={70} alt="Icon" />
                        </div>
                    </div>
                    <Col >
                        <div className="mt-3 vc_separator wpb_content_element vc_separator_align_left vc_sep_width_100 vc_sep_pos_align_center vc_custom_1654234394106 vc_separator-has-text">
                            <span className="vc_sep_holder vc_sep_holder_l">
                                <span
                                    style={{ borderColor: '#191c5f border-color:rgba(25,28,95,.12)' }}
                                    className="vc_sep_line"
                                ></span>
                            </span>
                            <h4 style={{ color: 'white', marginTop: '7px' }}>SAY HELLO!</h4>
                            <span className="vc_sep_holder vc_sep_holder_r">
                                <span
                                    style={{ borderColor: '#191c5f border-color:rgba(25,28,95,.12)' }}
                                    className="vc_sep_line"
                                ></span>
                            </span>
                        </div>
                    </Col>
                </Row>

                <Row className="d-lg-flex d-sm-block contact-right-left">
                    <Col lg={6}>
                        <div className='left'>
                            <div className="card" style={{ borderRadius: 15 }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                    <form>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                id="form3Example1cg"
                                                className="form-control form-control-lg"
                                                placeholder='Full Name'
                                            />
                                            <label className="form-label" htmlFor="form3Example1cg">
                                                Your Name
                                            </label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                id="form3Example3cg"
                                                className="form-control form-control-lg"
                                                placeholder='Email here'
                                            />
                                            <label className="form-label" htmlFor="form3Example3cg">
                                                Your Email
                                            </label>
                                        </div>


                                        <div class="form-group mb-4 mt-md-0 mt-4">
                                            <label>Your valuble feedback pls</label>
                                            <textarea
                                                name="message"
                                                class="form-control"
                                                id="message"
                                                rows="6"

                                            ></textarea>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button
                                                type="button"
                                                className="btn btn-custom-green text-body"
                                            >
                                                Register
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} >
                        <div className="right">
                            <div className="ld-fancy-heading text-uppercase ld_fancy_heading_657e0f4f83c76">
                                <h6 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                    Locations
                                </h6>
                            </div>
                            <div className="ld-fancy-heading ld_fancy_heading_657e0f4f8486f">
                                <h6 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                    <p />
                                </h6>

                                <h6 style={{ marginTop: '4 rem' }}>Corporate Office:</h6>
                                <p className="contact-descripton">
                                    FOXIOM LEADS PVT LTD 16&amp;17 2nd floor Neo space 2 Kinfra Techno Industrial Park Calicut University (po) Kakkanchery Malappuram
                                </p>

                                <div>
                                    <h6>Regional Office:</h6>
                                    <p style={{ marginTop: '1em', marginBottom: '1em' }}>26, Mecca Street, Fahaheel, Kuwait</p>
                                </div>
                            </div>

                            <Row className="d-lg-flex d-sm-block justify-content-between">
                                <Col>
                                    <div className="ld-fancy-heading text-uppercase ld_fancy_heading_657e0f4f855c6">
                                        <h6 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                            Mail Us
                                        </h6>
                                    </div>
                                    <div className="ld-fancy-heading ld_fancy_heading_657e0f4f8612c">
                                        <p className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                            Connect with us and let’s grow together
                                        </p>
                                    </div>
                                    <div className="ld-fancy-heading ld_fancy_heading_657e0f4f86839">
                                        <h6 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                            <a href="mailto:hr@foxiom.com">info@dhanwis.com</a>
                                        </h6>
                                    </div>

                                </Col>


                                {/* Call section */}
                                <Col>
                                    <div className="ld-fancy-heading text-uppercase ld_fancy_heading_657e0f4f87411">
                                        <h6 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                            Call Us
                                        </h6>
                                    </div>
                                    <div className="ld-fancy-heading ld_fancy_heading_657e0f4f87ab3">
                                        <p className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                            We are just one call away
                                        </p>
                                    </div>
                                    <div className="ld-fancy-heading ld_fancy_heading_657e0f4f88134">
                                        <h6 className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                            <span style={{ color: '#000080' }}>
                                                <a href="tel:+919895111400">+91 9895111400 | </a>
                                                <a href="tel:+96566011953">+965 66011953</a>
                                            </span>
                                        </h6>
                                    </div>
                                </Col>
                            </Row>
                            <div style={{ maxInlineSize: '33ch', marginTop: '1rem' }}>
                                <h3 >Let’s <span style={{ color: '#008446' }}>Get In Touch With Us</span></h3>
                            </div>
                        </div>
                    </Col>
                </Row>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.82306143901!2d75.36421720688162!3d11.877670092596782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6ce1316235134b%3A0x52648ce532c58725!2sDhanwis%20Techinfo%20Solutions%20%7C%20Best%20Website%20Development%20%7C%20App%20Development%20%7C%20Digital%20Marketing%20%7C%20Company%20In%20Kannur%20%7C%20Kerala!5e0!3m2!1sen!2sin!4v1704444011945!5m2!1sen!2sin"
                    width={`${window.innerWidth <= 500 ? 400 : '100%'}`}
                    height={`${window.innerWidth <= 500 ? 300 : '600'}`}
                    style={{ border: 0, marginTop: '4em' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                /></div>
        </>
    )
}
