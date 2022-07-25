import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import styled from 'styled-components';
import CountButton from '../CountButton/CountButton';
import Button from '../Button/Button';

export default function ProductInfo() {
  const [productNum, setProductNum] = useState(0);

  const { productImage, productStore, productName, productPrice } = useSelector((state) => ({
    productImage: state.ProductInfoReducer.productImage,
    productStore: state.ProductInfoReducer.productStore,
    productName: state.ProductInfoReducer.productName,
    productPrice: state.ProductInfoReducer.productPrice,
  }));

  function getProductNum(num) {
    setProductNum(num);
  }

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
        <div>
          <Delivery to="/">택배배송</Delivery>
          <FreeDelivery to="/">무료배송</FreeDelivery>
        </div>
        <ProductCount>
          <CountButton getProductNum={getProductNum} />
        </ProductCount>
        <PriceContainer>
          <PriceSum>총 상품 금액</PriceSum>
          <Text>
            <ProductSum>
              총 수량 <strong>{productNum}</strong>개
            </ProductSum>
            <PriceSumText>
              <strong>{productNum * productPrice}</strong>원
            </PriceSumText>
          </Text>
        </PriceContainer>
        <ButtonContainer>
          <Button size="large" isActive={true} buttonText="바로 구매" />
          <Button size="medium" isActive={false} buttonText="장바구니" />
        </ButtonContainer>
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
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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

const PriceContainer = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 40px 0 22px;
`;

const PriceSum = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
`;

const Text = styled.section`
  margin-top: -18px;
`;

const ProductSum = styled.span`
  font-size: 18px;
  line-height: 23px;
  color: #767676;
  strong {
    color: #21bf48;
  }
  &::after {
    display: inline-block;
    content: '';
    width: 2px;
    vertical-align: -2px;
    height: 18px;
    background-color: #c4c4c4;
    margin: 0 12px;
  }
`;

const PriceSumText = styled.span`
  color: #21bf48;
  font-size: 18px;
  line-height: 23px;
  strong {
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
  }
`;

const ButtonContainer = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 14px;
`;
