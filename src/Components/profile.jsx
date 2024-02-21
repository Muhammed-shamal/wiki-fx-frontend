import React, { useEffect, useState } from 'react';
import { Breadcrumb, Card, Button, Image, Col, Row } from 'react-bootstrap';
import './profile.css'
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from '../Constants/customstyle';



function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

const DivBetween = styled.div`
display: flex;
justify-content: space-between;
margin-top:4px;
`

const UserProfile = () => {
    const [activeItem, setActiveItem] = useState('rankings');
    const [data, setData] = useState([]);
    const handleItemClick = (item) => { setActiveItem(item) };
    const sizeLg = window.innerWidth >= 768;
    const sizeMs = window.innerWidth <= 767
    const [isHovered, setIsHovered] = useState(false)

    const rankImages = [
        `${process.env.PUBLIC_URL}/ranking-list logo/1.svg`,
        `${process.env.PUBLIC_URL}/ranking-list logo/2.svg`,
        `${process.env.PUBLIC_URL}/ranking-list logo/3.svg`,
    ];

    useEffect(() => {
        // fetch("https://fakestoreapi.com/products?limit=5").then((response) => response.json()).then((data) => {
        //     console.log(data)
        //     setData(data);
        // })
    }, [])


    // const fakeData = [
    //     {
    //         id: 1,
    //         name: "Product 1",
    //         image: "https://eimgjys.fxeyee.com/logo/0001698019/FXT0001698019_907528.png_wiki-template-global",
    //         rankImg: `${process.env.PUBLIC_URL}/ranking-list logo/1.svg`,
    //     },
    //     {
    //         id: 2,
    //         name: "Product 2",
    //         image: "https://eimgjys.fxeyee.com/logo/637853008698807935/FXT637853008698807935_296902.jpg_wiki-template-global",
    //         rankImg: `${process.env.PUBLIC_URL}/ranking-list logo/2.svg`,
    //     },
    //     {
    //         id: 3,
    //         name: "Product 3",
    //         image: "https://resources1.interface003.com/web20/img/rankingList/iocn-bg.png?v=Sat%20Jan%2020%202024%2012:37:47%20GMT+0530%20(India%20Standard%20Time)",
    //         rankImg: `${process.env.PUBLIC_URL}/ranking-list logo/3.svg`,
    //     },
    // ];


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

            default:
                return null;
        }
    };

    return (
        <section >
            <div className="container py-5">
                <div className="row">
                    <div className="col">

                        <Breadcrumb className="bg-light rounded-3  p-2 mb-4">
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

                                <div className='mt-5  '>
                                    <ul className="list-group">
                                        {/* {data.map((value, index) => (
                                            <li key={value.id} className="list-group-item mb-3 border-none">
                                                <div className='row'>
                                                    <div className='col-lg-2 col-md-4 mb-3 mb-md-0'>
                                                        <img src={value.image} alt="Product 1" className="product-img img-fluid" />
                                                    </div>
                                                    <div className='col-lg-10 col-md-8'>
                                                        <div className="d-flex flex-column flex-md-row justify-content-md-between">
                                                            <h6 className="mb-2 mb-md-0">{value.title}</h6>
                                                            <img className='rank mt-2 mt-md-0' src={rankImages[index % rankImages.length]} alt="Rank" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))} */}
                                        <li className="list-group-item mb-3  ">
                                            {/* row d-flex justify-content-center align-items-center h-100 */}
                                            <div>
                                                <div className="start-section d-lg-flex text-black">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                                            alt="Generic placeholder image"
                                                            className="img-fluid"
                                                            style={{ width: 80, borderRadius: 10 }}
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <img className='rank mt-2 mt-md-0' src={`${process.env.PUBLIC_URL}/ranking-list logo/1.svg`} alt="Rank" />
                                                        <h5 className="mb-1">Danny McLoan</h5>
                                                        <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                                                            Senior Journalist
                                                        </p>
                                                        <div
                                                            className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                                            style={{ backgroundColor: "#efefef" }}
                                                        >
                                                            <div>
                                                                <p className="small text-muted mb-1">Years</p>
                                                                <p className="mb-0">41</p>
                                                            </div>
                                                            <div className="px-3">
                                                                <p className="small text-muted mb-1">Followers</p>
                                                                <p className="mb-0">976</p>
                                                            </div>
                                                            <div>
                                                                <p className="small text-muted mb-1">Rating</p>
                                                                <p className="mb-0">8.5</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="start-section d-lg-flex text-black">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                                            alt="Generic placeholder image"
                                                            className="img-fluid"
                                                            style={{ width: 80, borderRadius: 10 }}
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <img className='rank mt-2 mt-md-0' src={`${process.env.PUBLIC_URL}/ranking-list logo/1.svg`} alt="Rank" />
                                                        <h5 className="mb-1">Danny McLoan</h5>
                                                        <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                                                            Senior Journalist
                                                        </p>
                                                        <div
                                                            className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                                            style={{ backgroundColor: "#efefef" }}
                                                        >
                                                            <div>
                                                                <p className="small text-muted mb-1">Years</p>
                                                                <p className="mb-0">41</p>
                                                            </div>
                                                            <div className="px-3">
                                                                <p className="small text-muted mb-1">Followers</p>
                                                                <p className="mb-0">976</p>
                                                            </div>
                                                            <div>
                                                                <p className="small text-muted mb-1">Rating</p>
                                                                <p className="mb-0">8.5</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
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

                    <section className="py-5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="row justify-content-start">
                                        <div className="col-md-6">
                                            <div className="info">
                                                <div className="icon icon-md">
                                                    <span><i class="fa-solid fa-rocket" style={{ fontSize: '30px', color: '#048d2dff' }}></i></span>
                                                </div>
                                                <h5>Fully integrated</h5>
                                                <p>
                                                    We get insulted by others, lose trust for those We get back
                                                    freezes
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="info">
                                                <div className="icon icon-md">
                                                    <span><i class="fa-solid fa-cart-shopping" style={{ fontSize: '30px', color: '#048d2dff' }}></i></span>
                                                </div>
                                                <h5>Payments functionality</h5>
                                                <p>
                                                    We get insulted by others, lose trust for those We get back
                                                    freezes
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-start">
                                        <div className="col-md-6">
                                            <div className="info">
                                                <div className="icon icon-md">
                                                    <span><i class="fa-solid fa-paper-plane" style={{ fontSize: '30px', color: '#048d2dff' }}></i></span>
                                                </div>
                                                <h5>Prebuilt components</h5>
                                                <p>
                                                    We get insulted by others, lose trust for those We get back
                                                    freezes
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="info">
                                                <div className="icon icon-md">

                                                    <span><i class="fa-solid fa-bell" style={{ fontSize: '30px', color: '#048d2dff' }}></i></span>
                                                </div>
                                                <h5>Improved platform</h5>
                                                <p>
                                                    We get insulted by others, lose trust for those We get back
                                                    freezes
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 ms-auto">
                                    <div className="card">
                                        <img
                                            className="card-img-top"
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/funny.jpg"
                                        />
                                        <div
                                            className="position-relative overflow-hidden"
                                            style={{ height: 50, marginTop: "-50px" }}
                                        >
                                            <div className="position-absolute w-100 top-0 z-index-1">
                                                <svg
                                                    className="waves waves-sm"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 24 150 40"
                                                    preserveAspectRatio="none"
                                                    shapeRendering="auto"
                                                >
                                                    <defs>
                                                        <path
                                                            id="card-wave"
                                                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                                                        />
                                                    </defs>
                                                    <g className="moving-waves">
                                                        <use
                                                            xlinkHref="#card-wave"
                                                            x={48}
                                                            y={-1}
                                                            fill="rgba(255,255,255,0.30"
                                                        />
                                                        <use
                                                            xlinkHref="#card-wave"
                                                            x={48}
                                                            y={3}
                                                            fill="rgba(255,255,255,0.35)"
                                                        />
                                                        <use
                                                            xlinkHref="#card-wave"
                                                            x={48}
                                                            y={5}
                                                            fill="rgba(255,255,255,0.25)"
                                                        />
                                                        <use
                                                            xlinkHref="#card-wave"
                                                            x={48}
                                                            y={8}
                                                            fill="rgba(255,255,255,0.20)"
                                                        />
                                                        <use
                                                            xlinkHref="#card-wave"
                                                            x={48}
                                                            y={13}
                                                            fill="rgba(255,255,255,0.15)"
                                                        />
                                                        <use
                                                            xlinkHref="#card-wave"
                                                            x={48}
                                                            y={16}
                                                            fill="rgba(255,255,255,0.99)"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h4>Soft UI Design System</h4>
                                            <p>
                                                One of the most beautiful and complex UI Kits built by the team
                                                behind Creative Tim. That's pretty impressive.
                                            </p>
                                            <a href="javascript:;" className="text-success icon-move-right">
                                                More about us
                                                <i
                                                    className="fas fa-arrow-right text-xs ms-1"
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className='few-newses'>
                        <div className='text-center mb-5'>
                            <h2 className='head'>Stay Updated</h2>
                            <p className='desc'>
                                Get the latest Market News at your fingertips
                            </p>

                            <a href="#" className='btn btn-outline-success'>Read market talk</a>
                        </div>

                        <div className='slider-container'>
                            <Slider {...settings} nextArrow={<i class="fa-solid fa-arrow-right"></i>} prevArrow={<i class="fa-solid fa-arrow-left"></i>}>
                                <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                    <Card className='card-section'>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/startTradingWithTea.jpg'} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button className="read-more" variant="success">Read more</Button>
                                        </Card.Body>
                                        <Card.Footer>
                                            <DivBetween>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                                <small className="text-muted">News Letters</small>
                                            </DivBetween>
                                        </Card.Footer>
                                    </Card>
                                </div>

                                <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                    <Card className='card-section'>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/startTradingWithTea.jpg'} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button className="read-more" variant="success">Read more</Button>
                                        </Card.Body>
                                        <Card.Footer>
                                            <DivBetween>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                                <small className="text-muted">News Letters</small>
                                            </DivBetween>
                                        </Card.Footer>
                                    </Card>
                                </div>

                                <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                    <Card className='card-section'>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/startTradingWithTea.jpg'} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button className="read-more" variant="success">Read more</Button>
                                        </Card.Body>
                                        <Card.Footer>
                                            <DivBetween>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                                <small className="text-muted">News Letters</small>
                                            </DivBetween>
                                        </Card.Footer>
                                    </Card>
                                </div>

                                <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                    <Card className='card-section'>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/startTradingWithTea.jpg'} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button className="read-more" variant="success">Read more</Button>
                                        </Card.Body>
                                        <Card.Footer>
                                            <DivBetween>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                                <small className="text-muted">News Letters</small>
                                            </DivBetween>
                                        </Card.Footer>
                                    </Card>
                                </div>

                                <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                    <Card className='card-section'>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/startTradingWithTea.jpg'} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button className="read-more" variant="success">Read more</Button>
                                        </Card.Body>
                                        <Card.Footer>
                                            <DivBetween>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                                <small className="text-muted">News Letters</small>
                                            </DivBetween>
                                        </Card.Footer>
                                    </Card>
                                </div>

                            </Slider>
                        </div>
                    </section>


                    <div className="footer-section  py-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <h4 class="mb-1">Thank you for your support!</h4>
                                    <p class="lead mb-0">Delivering the best products</p>
                                </div>
                                <div class="col-lg-6 buttons">
                                    <a href="javascript:;" className="ms-5 btn btn-sm btn-twitter mb-0 me-2">
                                        <i className="fab fa-twitter  " aria-hidden="true"></i> Twitter
                                    </a>
                                    <a href="javascript:;" className="btn  btn-sm btn-facebook mb-0 me-2">
                                        <i className="fab fa-facebook-square  " aria-hidden="true"></i> Facebook
                                    </a>
                                    <a href="javascript:;" className="btn  btn-sm btn-dribbble mb-0 me-2">
                                        <i className="fab fa-instagram " aria-hidden="true"></i> Instagram
                                    </a>

                                    <a href="javascript:;" className="btn  btn-sm btn-whatsapp mb-0 me-2">
                                        <i className="fab fa-whatsapp  " aria-hidden="true"></i> Whatsapp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    );
};

export default UserProfile;
