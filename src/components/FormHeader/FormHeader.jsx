import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/Logo-hodu.png';

export default function FormHeader() {
  return (
    <Container>
      <h2 className="ir">로그인 페이지 로고</h2>
      <LogoImg src={Logo} />
    </Container>
  );
}

const Container = styled.article`
  padding: 70px 0;
  text-align: center;
`;

const LogoImg = styled.img``;
