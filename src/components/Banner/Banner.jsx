import React from 'react';
import styled from 'styled-components';
import LeftArrow from '../../assets/icon-swiper-1.svg';
import RightArrow from '../../assets/icon-swiper-2.svg';

export default function Banner() {
  return (
    <Container>
      <h2 className="ir">홈 화면 배너</h2>
      <Button>
        <ButtonImg src={LeftArrow} alt="이전 이미지로 넘어가는 버튼" />
      </Button>
      <Button>
        <ButtonImg src={RightArrow} alt="다음 이미지로 넘어가는 버튼" />
      </Button>
    </Container>
  );
}

const Container = styled.section`
  height: 350px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
`;

const ButtonImg = styled.img``;
