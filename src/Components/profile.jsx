import React, { useState } from 'react';
import { Breadcrumb, Card, Button, Image, ListGroup, Col, Row } from 'react-bootstrap';
import './profile.css'
//import {ReactComponent as Rank1} from ''

const UserProfile = () => {
    const [activeItem, setActiveItem] = useState('rankings');

    const handleItemClick = (item) => { setActiveItem(item) };

    const renderHeaderContent = () => {
        switch (activeItem) {
            case 'rankings':
                return (
                    <a href="/en/wikifxranking.html" className="header-rankings">
                        <span><i className="fa-solid fa-trophy"></i></span>
                        <span className="header-rankings-text" style={{ marginLeft: 6 }}>
                            Rankings
                        </span>
                    </a>
                );
            case 'fire':
                return (
                    <a href="/en/wikifxfire.html" className="header-rankings">
                        <span><i className="fa-solid fa-fire"></i></span>
                        <span className="header-rankings-text" style={{ marginLeft: 6 }}>
                            Fire
                        </span>
                    </a>
                );


            case 'tv':
                return (
                    <a href="/en/wikifxranking.html" className="header-rankings">
                        <span><i className="fa-solid fa-tv"></i></span>
                        <span className="header-rankings-text" style={{ marginLeft: 6 }}>
                            Rankings
                        </span>
                    </a>
                );
            case 'danger':
                return (
                    <a href="/en/wikifxfire.html" className="header-rankings">
                        <span><i className="fa-solid fa-circle-exclamation"></i></span>
                        <span className="header-rankings-text" style={{ marginLeft: 6 }}>
                            Danger
                        </span>
                    </a>
                );



            // Add more cases for other items as needed
            default:
                return null;
        }
    };

    return (
        <section >
            <div className="container py-5">
                <div className="row">
                    <div className="col">

                        <Breadcrumb className=" bg-light rounded-3  p-2 mb-4">
                            {/* <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">User</Breadcrumb.Item>
                            <Breadcrumb.Item active>User Profile</Breadcrumb.Item> */}
                            here list out the broker names
                        </Breadcrumb>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className='broker-list'> <Card className="mb-4 border-radius-0  border-none" >
                            <Card.Body className="text-center">
                                <div className='header-potion'>
                                    {renderHeaderContent()}
                                    <ul>
                                        <li className={activeItem === 'rankings' ? 'active-rank' : ''} onClick={() => handleItemClick('rankings')}>
                                            <span className='icon'><i className="fa-solid fa-trophy"></i></span>
                                        </li>
                                        <li className={activeItem === 'fire' ? 'active-rank' : ''} onClick={() => handleItemClick('fire')}>
                                            <span className='icon'><i className="fa-solid fa-fire"></i></span>
                                        </li>
                                        <li className={activeItem === 'tv' ? 'active-rank' : ''} onClick={() => handleItemClick('tv')}>
                                            <span className='icon'><i className="fa-solid fa-tv"></i></span>
                                        </li>
                                        <li className={activeItem === 'danger' ? 'active-rank' : ''} onClick={() => handleItemClick('danger')}>
                                            <span className='icon'><i className="fa-solid fa-circle-exclamation"></i></span>
                                        </li>
                                    </ul>
                                </div>

                                <ul className="list-group list-group-flush rounded-3">
                                    <li className="list-group-item d-flex flex-column flex-sm-row align-items-center justify-content-sm-between p-3">
                                        <img src="https://example.com/product1.jpg" alt="Product 1" className="product-img mb-2 mb-sm-0" />
                                        <div className="flex-grow-1 text-center text-sm-start">
                                            <h6 className="mb-0">Product 1</h6>
                                            <p className="text-muted mb-2">Price: $20.99</p>
                                        </div>
                                        {/* <Button variant="primary" className="btn-sm">Add to Cart</Button> */}
                                        <img className='svg' src={`${process.env.PUBLIC_URL}/ranking-list logo/1.svg`} alt="Your SVG" />
                                        
                                    </li>
                                    <li className="list-group-item d-flex flex-column flex-sm-row align-items-center justify-content-sm-between p-3">
                                        <img src="https://example.com/product2.jpg" alt="Product 2" className="product-img mb-2 mb-sm-0" />
                                        <div className="flex-grow-1 text-center text-sm-start">
                                            <h6 className="mb-0">Product 2</h6>
                                            <p className="text-muted mb-2">Price: $29.99</p>
                                        </div>
                                        <img className='svg' src={`${process.env.PUBLIC_URL}/ranking-list logo/2.svg`} alt="Your SVG" />
                                    </li>

                                    <li className="list-group-item d-flex flex-column flex-sm-row align-items-center justify-content-sm-between p-3">
                                        <img src="https://example.com/product2.jpg" alt="Product 2" className="product-img mb-2 mb-sm-0" />
                                        <div className="flex-grow-1 text-center text-sm-start">
                                            <h6 className="mb-0">Product 2</h6>
                                            <p className="text-muted mb-2">Price: $29.99</p>
                                        </div>
                                        <img className='svg' src={`${process.env.PUBLIC_URL}/ranking-list logo/3.svg`} alt="Your SVG" />
                                    </li>
                                </ul>

                            </Card.Body>
                        </Card>
                        </div>


                    </div>

                    <Col>
                        {/* Existing card for user details */}
                        <Card className="mb-4">
                            <Card.Body>
                                {/* Existing user details */}
                            </Card.Body>
                        </Card>

                        <Col >
                            <div className='gap-bottom'>
                                <Card className="mb-4 mb-md-0">
                                    <Row>
                                        <Col lg={6} className="mb-3 mb-lg-0">
                                            <Image
                                                src="https://wzimg.ruiyin999.cn/guoji/2024-01-11/638405904862621619/ART638405904862621619_133674.jpg-article_list"
                                                alt="img"
                                                fluid
                                                className="news-img img-fluid"
                                            />
                                        </Col>
                                        <Col lg={6}>
                                            <div className="news-data animate__animated animate__fadeInUp">
                                                <h4 className="mainhead">
                                                    Forex vs. Crypto: Which Should You Pick?
                                                </h4>
                                                <p className="description">
                                                    The million-dollar question in online trading boils down to no more than 'Which should I pick?'
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </div>

                            <div className='gap-bottom'>
                                <Card className="mb-4 mb-md-0">
                                    <Row>
                                        <Col lg={6} className="mb-3 mb-lg-0">
                                            <Image
                                                src="https://wzimg.ruiyin999.cn/guoji/2024-01-11/638405895541381368/ART638405895541381368_481268.png-article_list"
                                                alt="img"
                                                fluid
                                                className="news-img img-fluid"
                                            />
                                        </Col>
                                        <Col lg={6}>
                                            <div className="news-data animate__animated animate__fadeInUp">
                                                <h4 className="mainhead">
                                                    Bold prime got me framed again
                                                </h4>
                                                <p className="description">
                                                    Please do not trust this company, they got me conned and took all my money.
                                                    Check my profile to get help in getting back your money from those thieves.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </div>

                        </Col>
                    </Col>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;
