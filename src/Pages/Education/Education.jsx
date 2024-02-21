import { React, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import './Education.css'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Video from './Video'
import Related from './Related';


const cryptoTrading = 'https://www.youtube.com/watch?v=EYb9eDsxgrs';
const investmentBeginner = 'https://www.youtube.com/watch?v=8Ij7A1VCB7I'
const beginnerGuideTrading = 'https://www.youtube.com/watch?v=teIlt2Vvebs&list=PLoaYyJ1XHGSaIO3FCMxASGIHsRE220Gn7'
const startTrading2024 = 'https://www.youtube.com/watch?v=u_dEHmKFXhE'
const tradingBeginner = 'https://www.youtube.com/watch?v=_YVQN6_nkfs'

export default function Education() {
  const [clickedItemId, setClickedItemId] = useState(null)

  const handleItemClick = (id) => {
    console.log(id);
    setClickedItemId(id)
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: document.title,
        url: window.location.href,
      });
      console.log('Successfully shared');
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };




  return (
    <>
      <div className='education-page'>
        <Container>
          <Row >
            <Col lg={6}>
              <div className="mt-5 no-gutters slider-text align-items-center">
                <div  >
                  <div
                    className="text mt-5 pt-5 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={300}
                    data-aos-duration={1000}
                  >
                    <span >Welcome to something</span>
                    <h1 className="mt-4">  A Comprehensive Approach to Mastering the  <a href="https://www.google.com/search?q=Trading+market+education" className='text-with-underline' target="_blank">Market</a></h1>
                    <p className="mt-4 desc">
                      Stay informed about market news, economic indicators, and geopolitical events that influence currency prices.
                      Use technical and fundamental analysis to make informed trading decisions.
                    </p>
                    <p>
                      <button className='btn btn_get btn_get_three mt-3 p-lg-4 py-lg-3'> Get Started Now! </button>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      <section className='section1'>
        <div style={{ paddingTop: "4em", paddingBottom: "4em" }}></div>
        <Container >
          <Row  >
            <Col md={6} >
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle className='card-small-title'>What is Trading ?</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardImage className='img-left' src={`${process.env.PUBLIC_URL}/TradingEdu/7SHbzOkI_mid.webp`} position='top' alt='...' />
                <MDBCardBody>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>

                    <span>Powered by Wiki-fx</span>

                    <span className='text-muted'> Education</span>
                  </div>
                  <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                  <MDBCardText>
                    The process of trading involves the exchange of financial instruments, including stocks, bonds, currencies, commodities, or derivatives, to earn a profit from fluctuations in their prices over the short term. Traders who engage in this activity can be individuals, institutions,
                    or automated systems that execute trades based on predefined criteria.
                  </MDBCardText>

                  <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                    <span className='share-btn'>
                      <i class="fa-solid fa-share-nodes" onClick={handleShare}></i>
                    </span>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </Col>

            <Col md={6} className='right-border' >
              <h3>About Trading</h3>
              <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
              <p>
                Trading is difficult, and it's not something you can become proficient at quickly. You will thus want advanced education if you are serious about mastering the art of profiting from the markets. Here's where our educational concepts are useful.
                <br />
                <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                These offer hundreds of insights compiled by users with a cumulative millennium of expertise. These Ideas address a wide range of subjects, including trading psychology, risk management, recommended practices for using specific instruments, columns about trading, and intricate pattern designs.
                <br />
                <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                The success of Educational Ideas can be attributed to the fact that they are not restricted to expensive gated courses or stuffy academic textbooks. Rather, they are written by knowledgeable traders and hosted here for free usage by anybody.
              </p>
              <Button className='btn btn_get btn_get_three' href='https://en.wikipedia.org/wiki/Trade' target='_blank'>Learn More</Button>
            </Col>
          </Row>
        </Container>
      </section >

      <section className='section2'>
        <div style={{ paddingTop: "5em", paddingBottom: "5em" }}></div>
        <Container >
          <Row>
            <Col md={6}>
              <h3 style={{ color: '#131722' }}>How Start Trading as a Beginner</h3>
              <p>
                Learn about the financial markets, various trading techniques, risk management,
                and the instruments you'll be trading
                (stocks, FX, cryptocurrencies, etc.) before you start trading.
                Begin with a demo account or trade with small amounts of real money to gain experience without risking large sums.
              </p>

              <Button className='btn btn_get btn_get_three' href='https://www.youtube.com/watch?v=dV00JxVDBdk' target='_blank'>Watch Now</Button>
            </Col>
            <Col md={6}>
              <h3 style={{ color: '#131722' }}>Watch Our Educational Videos</h3>
              <Video />
            </Col>
          </Row>
        </Container>
      </section>


      <section className='section1'>
        <div style={{ paddingTop: "4em", paddingBottom: "4em" }}></div>
        <Container >
          <Row  >
            <Col md={6} className='right-border' >
              <h3>Forex Trading!</h3>
              <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
              <p>
                Forex trading, or foreign exchange trading (FX), is the process of converting one currency into another. It's one of the most active markets in the world, with around $6.6 trillion worth of forex transactions every day.
                <br />
                <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                Foreign exchange trading, which is also known as forex trading or currency trading, is the act of buying and selling currencies on the foreign exchange market to make a profit from fluctuations in exchange rates.
                <br />
                <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                The forex market is the biggest and most liquid financial market in the world, with a daily trading volume that surpasses $6 trillion USD.
                <br />
                <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                The forex market is the largest financial market in the world, with trillions of dollars traded every day. It operates 24 hours a day, five days a week, across major financial centers worldwide.
              </p>
              <Button className='btn btn_get btn_get_three' href='https://en.wikipedia.org/wiki/Foreign_exchange_market' target='_blank'>Learn More</Button>
            </Col>


            <Col md={6} >
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle className='card-small-title'>What is Forex ?</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardImage className='img-left' src={`${process.env.PUBLIC_URL}/pexels-markus-spiske-3970330.jpg`} position='top' alt='...' />
                {/* <video controls>
                  <source src={`${process.env.PUBLIC_URL}/TradingEdu/chart-big.avc1.5ddfd85030f4ba213936.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
                <MDBCardBody>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>

                    <span>Powered by Wiki-fx</span>

                    <span className='text-muted'> Education</span>
                  </div>
                  <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                  <MDBCardText>
                    Forex trading involves trading currency pairs, where one currency is exchanged for another.
                    The most commonly traded currency pairs include EUR/USD (Euro/US Dollar), GBP/USD (British Pound/US Dollar), USD/JPY (US Dollar/Japanese Yen), and USD/CHF (US Dollar/Swiss Franc).
                  </MDBCardText>

                  <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                    <span className='share-btn'>
                      <i class="fa-solid fa-share-nodes" onClick={handleShare}></i>
                    </span>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </Col>
          </Row>
        </Container>
      </section >

      <section className='section3'>
        <div style={{ paddingTop: "4em", paddingBottom: "4em" }}></div>
        <Container  >
          <Related />
        </Container>
      </section>
    </>
  )
}
