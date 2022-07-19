import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Main() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    (async function getData() {
      const res = await axios.get('https://openmarket.weniv.co.kr/products');
      setProductList(res.data.results);
    })();
  }, []);

  return (
    <Container>
      {productList.map((item) => (
        <Product key={item.product_id}>
          <ProductImg src={item.image} />
          <ProductSeller>{item.seller_store}</ProductSeller>
          <ProductName>{item.product_name}</ProductName>
          <ProductPrice>
            <strong>{item.price}</strong>원
          </ProductPrice>
        </Product>
      ))}
    </Container>
  );
}

const Container = styled.section`
  padding: 80px 200px 180px;
  display: grid;
  gap: 70px;
  grid-template-columns: repeat(3, 1fr);
  width: calc(100% - 400px);
`;

const Product = styled.section``;

const ProductImg = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
`;

const ProductSeller = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin-top: 5px;
  color: #767676;
`;

const ProductName = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  color: #000000;
  font-size: 16px;
  line-height: 20px;
  strong {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
  }
`;
