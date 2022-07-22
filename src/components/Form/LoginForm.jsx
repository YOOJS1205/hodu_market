import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from '../Button/Button';

export default function LoginForm({ isBuyer }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isIdEmpty, setIsIdEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isRight, setIsRight] = useState(true);

  function onHandleLoginInput(e) {
    setId(e.target.value);
  }

  function onHandlePasswordInput(e) {
    setPassword(e.target.value);
  }

  async function onClickLoginButton(e) {
    e.preventDefault();
    try {
      if (id && password) {
        const res = await axios.post('https://openmarket.weniv.co.kr/accounts/login/', {
          username: id,
          password: password,
          login_type: isBuyer ? 'BUYER' : 'SELLER',
        });
        console.log(res);
      } else if (id && !password) {
        setIsIdEmpty(false);
        setIsPasswordEmpty(true);
      } else if (!id && password) {
        setIsIdEmpty(true);
        setIsPasswordEmpty(false);
      } else {
        setIsIdEmpty(true);
        setIsPasswordEmpty(true);
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.FAIL_Message === '로그인 정보가 없습니다.') {
        setIsRight(false);
      } else {
        setIsRight(true);
      }
    }
  }
  return (
    <Container>
      <Label htmlFor="id" />
      <Input id="id" placeholder="아이디" onChange={onHandleLoginInput} />
      {isIdEmpty ? <WarningText>아이디를 입력해 주세요.</WarningText> : null}
      <Label htmlFor="password" />
      <Input id="password" type="password" placeholder="비밀번호" isLast={true} onChange={onHandlePasswordInput} />
      {isPasswordEmpty ? <WarningText isLast={true}>비밀번호를 입력해 주세요.</WarningText> : null}
      {isRight ? null : <WarningText isLast={true}>아이디 또는 비밀번호가 일치하지 않습니다.</WarningText>}
      <Button isActive={true} buttonText="로그인" onClick={onClickLoginButton} size="full" />
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

const WarningText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #eb5757;
  text-align: left;
  margin-top: ${(props) => (props.isLast ? '-20px' : '10px')};
  margin-bottom: ${(props) => (props.isLast ? '20px' : null)};
`;
