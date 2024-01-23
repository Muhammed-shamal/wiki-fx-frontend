import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

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
`;

const TickerText = styled.div`
  display: inline-block;
  animation: ${scroll} 5s linear infinite;
`;

// animation: ${scroll} 10s linear infinite;

const TickerTape = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <TickerContainer >
      <TickerText >{text}</TickerText>
      <TickerText >{text}</TickerText>
      <TickerText >{text}</TickerText>
      <TickerText >{text}</TickerText>
      <TickerText >{text}</TickerText>
      <TickerText >{text}</TickerText>
      <TickerText >{text}</TickerText>
      <TickerText >{text}</TickerText>
    </TickerContainer>

  );
};

export default TickerTape;
