import React from 'react'
import './Related.css'


function getRandomItems(arr, count) {
    const shuffled = arr.slice(); // Copy the array to avoid modifying the original, default will be 0;

    let currentIndex = shuffled.length;
    let temporaryValue, randomIndex;


    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element... as randomly;
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        temporaryValue = shuffled[currentIndex];
        shuffled[currentIndex] = shuffled[randomIndex];
        shuffled[randomIndex] = temporaryValue;
    }

    // Return the first 'count' items from the shuffled array
    return shuffled.slice(0, count);
}

const EduData = [
    { id: 1, img: `${process.env.PUBLIC_URL}/TradingEdu/131400.jpg`, title: "What is Stock Market ?", description: "The stock market is like a bustling marketplace where people buy and sell ownership stakes in publicly traded companies. Here's a variety of special and unique descriptions to help beginners understand" },
    { id: 2, img: `${process.env.PUBLIC_URL}/collage-finance-banner-concept.jpg`, title: "What is Share Market ?", description: "The stock market, also known as the share market or equity market, is a platform where individuals and institutions can buy and sell shares of publicly traded companies" },
    { id: 3, img: `${process.env.PUBLIC_URL}/TradingEdu/pexels-david-mcbee-730564.jpg`, title: "What is Cryptocurrency ?", description: "Cryptocurrency is a digital or virtual form of currency that uses cryptography for security and operates independently of a central authority, such as a government or bank" },

    { id: 4, img: `${process.env.PUBLIC_URL}/TradingEdu/naruto-holding-1-gold-coin-in-1-hand-each-in-a-science-lab-animated-393805003.png`, title: "What is Bitcoin ?", description: "Bitcoin is a digital currency, also known as cryptocurrency, that operates on a decentralized network called blockchain." },
    { id: 5, img: `${process.env.PUBLIC_URL}/TradingEdu/SYjKf7H3_mid.webp`, title: "What is Intraday Trading ?", description: "Intraday trading, also called day trading, is a strategy in which traders buy and sell financial instruments within the same day to take advantage of short-term price movements." },
    { id: 6, img: `${process.env.PUBLIC_URL}/TradingEdu/pexels-anna-nekrashevich-6801651.jpg`, title: "What is Investment ?", description: "Intraday trading, or day trading, involves buying and selling financial instruments within the same day to profit from short-term price movements. Unlike investors, intraday traders close out all their positions by the end of the trading day." },
]



export default function Related( ) {

    const randomItems = getRandomItems(EduData, 3);

    return (
        <div>
            <section className="articles" >
                {randomItems.map((datas) => (<article>
                    <div className="article-wrapper" key={datas.id}>
                        <figure>
                            <img src={datas.img} alt="Realated-img" style={{ backgroundPosition: 'center' }} />
                        </figure>
                        <div className="article-body">
                            <h2>{datas.title}</h2>
                            <p>
                                {datas.description}
                            </p>
                        </div>

                        <div style={{color:"darkkhaki",padding:"1rem",fontSize:'larger'}}>
                        <span>Comming Soon</span>
                        </div>
                    </div>
                </article>))}
            </section>
        </div>
    )
}

