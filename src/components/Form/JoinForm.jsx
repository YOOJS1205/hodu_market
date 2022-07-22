import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

export default function JoinForm({ isBuyer }) {
  // 회원가입 폼 내용 전체가 입력되었는지의 여부
  const [isActive, setIsActive] = useState(false);

  // 유저 정보를 담는 객체
  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
    password2: '',
    userName: '',
    phoneNum: '',
  });

  return (
    <Container>
      <h2 className="ir">회원가입 폼 전체</h2>
      <FormContainer>
        <h3 className="ir">회원가입 폼</h3>
        <Label htmlFor="id">아이디</Label>
        <IdContainer>
          <FullInput
            id="id"
            onChange={(e) =>
              setUserInfo({
                ...userInfo,
                id: e.target.value,
              })
            }
          />
          <Button id="check" buttonText="중복확인" isActive={true} size="medium" />
        </IdContainer>
        <Label htmlFor="password">비밀번호</Label>
        <FullInput
          id="password"
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              password: e.target.value,
            })
          }
        />
        <Label htmlFor="re-password">비밀번호 재확인</Label>
        <FullInput
          id="re-password"
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              password2: e.target.value,
            })
          }
          isLast={true}
        />
        <Label htmlFor="name">이름</Label>
        <FullInput
          id="name"
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              userName: e.target.value,
            })
          }
        />
        <Label htmlFor="phone-number">휴대폰번호</Label>
        <InputContainer>
          <FirstPhoneNum>
            <Option>010</Option>
            <Option>011</Option>
            <Option>016</Option>
            <Option>017</Option>
          </FirstPhoneNum>
          <PhoneNumInput id="phone-number" />
          <PhoneNumInput id="phone-number" />
        </InputContainer>
        <Label htmlFor="email">이메일</Label>
        <InputContainer>
          <EmailInput id="email" />
          <EmailText>@</EmailText>
          <EmailInput id="email" />
        </InputContainer>
        {isBuyer ? null : (
          <>
            <Label htmlFor="seller-number">사업자 등록번호</Label>
            <IdContainer>
              <FullInput id="seller-number" />
              <Button id="check" buttonText="인증" isActive={true} size="medium" />
            </IdContainer>
            <Label htmlFor="store-name">스토어 이름</Label>
            <FullInput id="store-name" />
          </>
        )}
      </FormContainer>
      <FuncContainer>
        <CheckContainer>
          <Input type="checkbox" />
          <Label htmlFor="check">
            호두샵의 <Strong>이용약관</Strong> 및 <Strong>개인정보처리방침</Strong>에 대한 내용을 확인하였고 동의합니다.
          </Label>
        </CheckContainer>
        <Button id="check" buttonText="가입하기" isActive={isActive} size="full" />
      </FuncContainer>
    </Container>
  );
}

const Container = styled.section``;

const IdContainer = styled(Container)`
  display: flex;
  gap: 12px;
`;

const CheckContainer = styled(Container)`
  display: flex;
  gap: 6px;
`;

const FuncContainer = styled(Container)`
  padding: 34px 35px 36px;
  text-align: left;
`;

const FormContainer = styled.form`
  padding: 34px 35px 24px;
  border: 1px solid #c4c4c4;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Label = styled.label`
  font-size: 16px;
  line-height: 20px;
  color: #767676;
  margin-bottom: 10px;
  display: block;
  text-align: left;
`;

const Strong = styled.strong`
  font-weight: 600;
  text-decoration: underline;
`;

const Input = styled.input`
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin-bottom: ${(props) => (props.isLast ? '50px' : '12px')};
  font-size: 16px;
  line-height: 20px;
  padding: 17px 16px;
  margin-top: ${(props) => (props.type === 'checkbox' ? '-15px' : null)};
`;

const FullInput = styled(Input)`
  display: block;
  width: calc(100% - 32px);
`;

const PhoneNumInput = styled(Input)`
  width: calc((100% - 130px) / 3);
`;

const FirstPhoneNum = styled.select`
  width: calc((100% - 30px) / 3);
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 20px;
  padding: 17px 16px;
`;

const Option = styled.option``;

const EmailInput = styled(Input)`
  width: calc((100% - 100px) / 2);
`;

const EmailText = styled.strong`
  line-height: 56px;
`;

const InputContainer = styled.article`
  display: flex;
  justify-content: space-between;
`;
