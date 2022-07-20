import React from 'react';
import styled from 'styled-components';

export default function Button({ isActive, buttonText, onClick }) {
  return (
    <Btn isActive={isActive} onClick={onClick}>
      {buttonText}
    </Btn>
  );
}

const Btn = styled.button`
  width: 100%;
  background-color: ${(props) => (props.isActive ? '#21BF48' : '#C4C4C4')};
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  padding: 19px 0;
`;
