import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from '../Button/Button';

export default function LoginForm({ isBuyer }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  function onHandleLoginInput(e) {
    setId(e.target.value);
  }

  function onHandlePasswordInput(e) {
    setPassword(e.target.value);
  }

  async function onClickLoginButton(e) {
    e.preventDefault();
    try {
      const res = await axios.post('https://openmarket.weniv.co.kr/accounts/login/', {
        username: id,
        password: password,
        login_type: isBuyer ? 'BUYER' : 'SELLER',
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <Label htmlFor="id" />
      <Input id="id" placeholder="아이디" onChange={onHandleLoginInput} />
      <Label htmlFor="password" />
      <Input id="password" type="password" placeholder="비밀번호" isLast={true} onChange={onHandlePasswordInput} />
      <Button isActive={true} buttonText="로그인" onClick={onClickLoginButton} />
    </Container>
  );
}

const Container = styled.form`
  padding: 34px 35px 36px;
  border: 1px solid #c4c4c4;
`;

const Label = styled.label``;

const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  font-size: 16px;
  line-height: 20px;
  padding: 20px 0;
  margin-bottom: ${(props) => (props.isLast ? '36px' : null)};
`;
