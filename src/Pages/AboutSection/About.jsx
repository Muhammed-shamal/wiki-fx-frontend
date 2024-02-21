import React from 'react'
import './About.css'
import { Col, Container, Row } from 'react-bootstrap'

export default function About() {
    return (
        <div>
            <Container >
                <Row >
                    <Col >
                        <div className='about-start'>
                            <h1 className='main-head' >
                                Our mission is to help every Indian confidently Up their wealth
                            </h1>
                            <div><button className='btn btn-outline-success  '>
                                Contact Us
                            </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
