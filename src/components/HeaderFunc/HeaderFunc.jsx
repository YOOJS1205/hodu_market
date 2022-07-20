import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ShoppingCart from '../../assets/icon-shopping-cart.svg';
import UserLogo from '../../assets/icon-user.svg';

export default function HeaderFunc({ isLogin }) {
  return (
    <FlexContainer>
      <Button>
        <ButtonImg src={ShoppingCart} isFirst={true} alt="장바구니 버튼" />
        <ButtonText>장바구니</ButtonText>
      </Button>
      <Link to="/login">
        <Button>
          <ButtonImg src={UserLogo} alt="로그인 버튼" />
          <ButtonText>{!isLogin ? '로그인' : '마이페이지'}</ButtonText>
        </Button>
      </Link>
    </FlexContainer>
  );
}

const FlexContainer = styled.article`
  display: flex;
  gap: 30px;
`;

const Button = styled.button`
  text-align: center;
  border: none;
  background-color: #ffffff;
`;

const ButtonImg = styled.img`
  padding-right: ${(props) => (props.isFirst ? '5px' : null)};
`;

const ButtonText = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: #767676;
`;
