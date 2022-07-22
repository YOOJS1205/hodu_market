import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function LoginFunc() {
  return (
    <Container>
      <FirstButton to="/join">회원가입</FirstButton>
      <Button to="/">비밀번호 찾기</Button>
    </Container>
  );
}

const Container = styled.article`
  text-align: center;
  margin-top: 30px;
`;
const Button = styled(Link)`
  font-size: 16px;
  line-height: 20px;
  color: #333333;
`;

const FirstButton = styled(Button)`
  margin-right: 14px;
  &::after {
    display: inline-block;
    content: '';
    vertical-align: -3px;
    margin-left: 14px;
    width: 1px;
    height: 18px;
    background-color: #333333;
  }
`;
