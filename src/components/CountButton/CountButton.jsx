import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function CountButton({ getProductNum }) {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    getProductNum(productCount);
  }, [productCount]);

  function onClickPlusButton() {
    setProductCount((state) => state + 1);
  }

  function onClickMinusButton() {
    if (productCount > 0) {
      setProductCount((state) => state - 1);
    }
  }

  return (
    <Container>
      <Button onClick={onClickMinusButton}>-</Button>
      <Count>{productCount}</Count>
      <Button onClick={onClickPlusButton}>+</Button>
    </Container>
  );
}

const Container = styled.section``;

const Button = styled.button`
  font-size: 30px;
  color: #c4c4c4;
  border: 1px solid #c4c4c4;
  width: 50px;
  height: 50px;
`;

const Count = styled.p`
  font-size: 20px;
  color: #000000;
  border: 1px solid #c4c4c4;
  width: 48px;
  height: 48px;
  vertical-align: 1px;
  display: inline-block;
  line-height: 50px;
  text-align: center;
`;
