import React from 'react';
import styled from 'styled-components';

export default function Func() {
  return (
    <Container>
      <h2 className="ir">상품 상세 버튼</h2>
      <Button type="button" autoFocus>
        버튼
      </Button>
      <Button type="button">리뷰</Button>
      <Button type="button">Q&A</Button>
      <Button type="button">반품/교환정보</Button>
    </Container>
  );
}

const Container = styled.article`
  padding: 150px 0 300px;
`;

const Button = styled.button`
  width: 25%;
  padding: 18px 0;
  border-bottom: 6px solid #e0e0e0;
  color: #767676;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  &:focus {
    border-color: #21bf48;
    color: #21bf48;
  }
`;
