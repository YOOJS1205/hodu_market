import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Func from './Func';

export default function ProductDetail() {
  return (
    <Container>
      <h1 className="ir">상품 정보 페이지</h1>
      <Header />
      <MainContainer>
        <ProductInfo />
        <Func />
      </MainContainer>
    </Container>
  );
}

const Container = styled.article``;

const MainContainer = styled(Container)`
  padding: 80px 200px 0;
`;
