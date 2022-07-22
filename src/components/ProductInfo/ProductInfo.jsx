import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import styled from 'styled-components';

export default function ProductInfo() {
  const { productImage, productStore, productName, productPrice } = useSelector((state) => ({
    productImage: state.ProductInfoReducer.productImage,
    productStore: state.ProductInfoReducer.productStore,
    productName: state.ProductInfoReducer.productName,
    productPrice: state.ProductInfoReducer.productPrice,
  }));

  console.log(productImage, productStore, productName, productPrice);
  return (
    <Container>
      <h2 className="ir">상품정보</h2>
      <ProductImage src={productImage} />
      <ProductDetail>
        <h2 className="ir">상품 디테일</h2>
        <ProductStore>{productStore}</ProductStore>
        <ProductName>{productName}</ProductName>
        <ProductPrice>
          {productPrice}
          <strong>원</strong>
        </ProductPrice>
        <Delivery to="/">택배배송</Delivery>
        <FreeDelivery to="/">무료배송</FreeDelivery>
        <ProductCount></ProductCount>
      </ProductDetail>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  gap: 50px;
`;

const ProductImage = styled.img`
  width: 50%;
  aspect-ratio: 1 / 1;
`;

const ProductDetail = styled.section`
  width: 50%;
  aspect-ratio: 1 / 1;
`;

const ProductStore = styled.p`
  font-size: 18px;
  line-height: 23px;
  color: #767676;
`;

const ProductName = styled.p`
  margin: 16px 0 20px;
  font-size: 36px;
  line-height: 45px;
  color: #000000;
`;

const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: #000000;
  margin-bottom: 100px;
  strong {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
  }
`;

const Delivery = styled(Link)`
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;

const FreeDelivery = styled(Delivery)`
  &::before {
    display: inline-block;
    content: '/';
    margin: 0 5px;
    vertical-align: 1px;
  }
`;

const ProductCount = styled.article`
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  padding: 30px 0;
  margin-top: 20px;
`;
