import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';

export default function Form() {
  const [isBuyer, setIsBuyer] = useState(true);

  function onClickBuyerButton() {
    setIsBuyer(true);
  }

  function onClickSellerButton() {
    setIsBuyer(false);
  }

  return (
    <Container>
      <h2 className="ir">정보 입력 폼 컨테이너</h2>
      <Button isBuyer={isBuyer} onClick={onClickBuyerButton}>
        구매회원 로그인
      </Button>
      <Button isBuyer={!isBuyer} onClick={onClickSellerButton}>
        판매회원 로그인
      </Button>
      <LoginForm isBuyer={isBuyer} />
    </Container>
  );
}

const Container = styled.section`
  text-align: center;
  border-radius: 10px;
  display: block;
  width: 575px;
  margin: 0 auto;
`;

const Button = styled.button`
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  border: 1px solid #c4c4c4;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px 77px 23px;
  background-color: ${(props) => (props.isBuyer ? '#FFFFFF' : '#F2F2F2')};
  border-bottom: ${(props) => (props.isBuyer ? 'none' : null)};
`;
