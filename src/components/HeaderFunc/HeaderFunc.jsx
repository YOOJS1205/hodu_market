import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import ShoppingCart from '../../assets/icon-shopping-cart.svg';
import UserLogo from '../../assets/icon-user.svg';

export default function HeaderFunc() {
  const location = useLocation();

  return (
    <FlexContainer>
      <Button to="/">
        <ButtonImg src={ShoppingCart} isFirst={true} alt="장바구니 버튼" />
        <ButtonText>장바구니</ButtonText>
      </Button>
      <Button to="/">
        <ButtonImg src={UserLogo} alt="로그인 버튼" />
        <ButtonText>
          {location.pathname === '/' ? '로그인' : location.pathname === 'login/buyer' ? '마이페이지' : null}
        </ButtonText>
      </Button>
    </FlexContainer>
  );
}

const FlexContainer = styled.article`
  display: flex;
  gap: 30px;
`;

const Button = styled(Link)`
  text-align: center;
`;

const ButtonImg = styled.img`
  padding-right: ${(props) => (props.isFirst ? '5px' : null)};
`;

const ButtonText = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: #767676;
`;
