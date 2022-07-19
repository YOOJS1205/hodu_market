import React, { useState } from 'react';
import styled from 'styled-components';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

export default function Home() {
  // 로그인 여부에 따라서 헤더 오른쪽의 버튼 텍스트 변경
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Container>
      <h1 className="ir">메인 페이지</h1>
      <Header isLogin={isLogin} />
      <Banner />
      <Main />
      <Footer />
    </Container>
  );
}

const Container = styled.section``;
