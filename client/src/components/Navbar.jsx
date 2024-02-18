import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Inner } from '../style/Inner';

const Header = styled.header`
  margin: auto 0;
  display: flex;
  justify-content: space-between;
  height: 100px;
  border-bottom: 1px solid gray;
`

const LogoLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  width: 300px;
  height: 100%;
  overflow: hidden;
`

const LogoImg = styled.img`
  height: 80%;
`

const Title = styled.h1`
  display: inline;
  font-size: 30px;
  font-weight: bold;
  color: crimson;
`

export default function Navbar() {
  return (
    <Header>
      <Inner>
      <LogoLink to="/" title="커피 컵 아이콘 제작자: Luvdat - Flaticon">
        <LogoImg className="logoimage" src="http://localhost:3000/images/free-icon-coffee-4721026.png" alt="로고아이콘" />
        <Title>COFFEE_DAY</Title>
      </LogoLink>
      </Inner>
    </Header>
  );
}

