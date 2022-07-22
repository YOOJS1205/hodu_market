import React from 'react';
import styled from 'styled-components';
import FormHeader from '../../components/FormHeader/FormHeader';
import Form from '../../components/Form/Form';

export default function Join() {
  return (
    <Container>
      <h1 className="ir">회원가입 페이지</h1>
      <FormHeader />
      <Form />
    </Container>
  );
}

const Container = styled.section``;
