import React from 'react';
import styled from 'styled-components';
import Form from '../../components/Form/Form';
import FormHeader from '../../components/FormHeader/FormHeader';
import LoginFunc from './LoginFunc';

export default function Login() {
  return (
    <Container>
      <h1 className="ir">로그인 페이지</h1>
      <FormHeader />
      <Form />
      <LoginFunc />
    </Container>
  );
}

const Container = styled.section``;
