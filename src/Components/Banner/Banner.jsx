import React from 'react'
import './Banner.css'
import { Col, Container, Row } from 'react-bootstrap'

export default function Banner() {

    return (
        <>
            <Container>
                <Row className='mt-10'>
                    <Col>
                        <div className='landing-hero'>
                            <div className="offset-md-2 col-md-8 text-center">
                                <h2>A trusted and secure cryptocurrency exchange.</h2>
                                <p>
                                    Crypo is the most advanced UI kit for making the Blockchain platform. This
                                    kit comes with 4 different exchange page, market, wallet and many more
                                </p>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Please enter the name of the broker for inquiries"
                                        aria-label="Please enter the name of the broker for inquiries"
                                        aria-describedby="button-addon2"
                                    />
                                    <div className="input-group-append ms-2">
                                        <button className={`${window.innerWidth < 500 ? 'mt-1 btn btn-primary btn-sm' : 'btn btn-primary btn-md'}`} type="button" id="button-addon2">
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* trusted clients , or partership */}
                        {/* <div className='py-5'>
                            <div class="row">
                                <div class="col-8 mx-auto text-center">
                                    <h6 class="opacity-5"> More than 50+ brands trust Soft</h6>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-2 col-md-4 col-6 mb-4">
                                    <img
                                        className="w-100 opacity-9"
                                        src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img//logos/gray-logos/logo-coinbase.svg"
                                        alt="logo"
                                    />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 mb-4">
                                    <img
                                        className="w-100 opacity-9"
                                        src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img//logos/gray-logos/logo-nasa.svg"
                                        alt="logo"
                                    />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 mb-4">
                                    <img
                                        className="w-100 opacity-9"
                                        src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img//logos/gray-logos/logo-netflix.svg"
                                        alt="logo"
                                    />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 mb-4">
                                    <img
                                        className="w-100 opacity-9"
                                        src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img//logos/gray-logos/logo-pinterest.svg"
                                        alt="logo"
                                    />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 mb-4">
                                    <img
                                        className="w-100 opacity-9"
                                        src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img//logos/gray-logos/logo-spotify.svg"
                                        alt="logo"
                                    />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 mb-4">
                                    <img
                                        className="w-100 opacity-9"
                                        src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img//logos/gray-logos/logo-vodafone.svg"
                                        alt="logo"
                                    />
                                </div>
                            </div>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </>


    )
}


