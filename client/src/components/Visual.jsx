import React from 'react';
import styled from 'styled-components';
import theme from '../style/Theme';

const StyledSection = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 650px;
  &:before {
    content:'';
    display: inline-block;
    top: 0;
    right: 0;
    width:30%;
    height: 100%;
    background: #F2C6CF;
  }
`
const TextSection = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  height: 40%;
  width: 40%;
  background: ${theme.lightyellow};
  border: 1px solid ${theme.lightgray};
  p:first-of-type {
    font-size: 23px;
    font-weight: 500;
    color: ${theme.brown};
  }
  strong{
    font-size: 45px;
  }
`
const TextLeft = styled.p`
  position: absolute; 
  top: -5%;
  font-size: 30px;
  border: 1px solid ${theme.lightgray};
`
const ImageSection = styled.div`
  position: absolute;
  right: 5%;
  top: 10%;
  height: 70%;
  width: 30%;
  border: 1px solid ${theme.lightgray};
`
const TextRight = styled.p`
  position: absolute; 
  left: -30%;
  bottom: 20%;
  font-size: 30px;
  color: black;
  background: white;
  transform: rotate(-90deg);
  z-index: 10;
`
const Image = styled.img`
  width: 100%;
  object-fit: contain;
`

export default function Visual() {
  return (
    <div>
      <StyledSection>
        <TextSection>
          <p>CoffeeDay's Pick<br />
          <strong>오늘은 이 커피 어때요?</strong></p>
          <p>everyday, coffeeDay</p>
        </TextSection>
        <ImageSection>
          <TextRight>CoffeeDay's Pick</TextRight>
          <Image src="http://localhost:3000/images/americano.jpg"></Image>
        </ImageSection>
      </StyledSection>
    </div>
  );
}

