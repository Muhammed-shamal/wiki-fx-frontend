import React, { useEffect, useState } from 'react';
import { APIKEY } from '../../Constants/constantUrl';
import axios from '../../Constants/axios';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const TickerContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  background-color:white;
`;

const TickerText = styled.div`
  display: inline-block;
  animation: ${scroll} 7s linear infinite;
  margin-right:1.4rem;
  font-size:18px;
  font-weight:bold;
   
  span {
     color: #089981; 
   // color:#2b2a5dd6;
  }
`;

export default function Currency() {
  const [currencyPairs, setCurrencyPairs] = useState([]);

  useEffect(() => {
    axios.get(`/v1/latest?apikey=${APIKEY}`).then((response) => {
      const currencies = response.data.data; // Assuming currencies is an object
      setCurrencyPairs(Object.entries(currencies).map(([currency, price]) => ({ currency, price })));
    });
  }, []);


  return (
    <div className='mt-2'>
      <TickerContainer>
        {currencyPairs.map((pair, index) => (
          <TickerText key={index}>

            <span>{pair.currency}:</span> {pair.price}
          </TickerText>
        ))}
      </TickerContainer>
    </div>
  );
}
