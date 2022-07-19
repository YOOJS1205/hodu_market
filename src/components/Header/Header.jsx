import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HoduLogo from '../../assets/Logo-hodu.png';
import SearchLogo from '../../assets/search.svg';
import HeaderFunc from '../HeaderFunc/HeaderFunc';

export default function Header() {
  return (
    <Container>
      <h2 className="ir">메인 페이지 헤더</h2>
      <Left>
        <h3 className="ir">헤더 왼쪽</h3>
        <Logo to="/">
          <LogoImg src={HoduLogo} alt="호두마켓 로고" />
        </Logo>
        <SearchContainer>
          <Search placeholder="상품을 검색해보세요!" />
          <SearchImg src={SearchLogo} alt="검색 버튼" />
        </SearchContainer>
      </Left>
      <Right>
        <h3 className="ir">헤더 오른쪽</h3>
        <HeaderFunc />
      </Right>
    </Container>
  );
}

const Container = styled.article`
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.article``;

const Right = styled.article``;

const Logo = styled(Link)`
  margin-right: 30px;
  height: 38px;
  vertical-align: -12px;
`;

const LogoImg = styled.img`
  width: 124px;
  height: 38px;
`;

const SearchContainer = styled.article`
  position: relative;
  display: inline;
`;
const Search = styled.input`
  font-size: 16px;
  line-height: 20px;
  color: #767676;
  padding: 13px 22px;
  border: 2px solid #21bf48;
  border-radius: 50px;
  width: 300px;
`;

const SearchImg = styled.img`
  position: absolute;
  right: 22px;
  top: -2px;
`;
