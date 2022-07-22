import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import ProductInfo from '../../components/ProductInfo/ProductInfo';

export default function ProductDetail() {
  const { productImage, productStore, productName, productPrice } = useSelector((state) => ({
    productImage: state.ProductInfoReducer.productImage,
    productStore: state.ProductInfoReducer.productStore,
    productName: state.ProductInfoReducer.productName,
    productPrice: state.ProductInfoReducer.productPrice,
  }));

  console.log(productImage, productStore, productName, productPrice);

  return (
    <Container>
      <h1 className="ir">상품 정보 페이지</h1>
      <Header />
      <MainContainer>
        <ProductInfo />
      </MainContainer>
    </Container>
  );
}

const Container = styled.article``;

const MainContainer = styled(Container)`
  padding: 80px 200px 0;
`;
