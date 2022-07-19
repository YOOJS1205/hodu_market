import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

export default function Home() {
  return (
    <Container>
      <h1 className="ir">메인 페이지</h1>
      <Header />
      <Banner />
      <Main />
    </Container>
  );
}

const Container = styled.section``;
