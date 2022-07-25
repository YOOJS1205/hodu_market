import React from 'react';
import styled from 'styled-components';

export default function Button({ isActive, buttonText, onClick, size }) {
  return (
    <Btn isActive={isActive} onClick={onClick} size={size}>
      {buttonText}
    </Btn>
  );
}

const Btn = styled.button`
  width: ${(props) =>
    props.size === 'full' ? '100%' : props.size === 'large' ? '70%' : props.size === 'medium' ? '30%' : null};
  background-color: ${(props) => (props.isActive ? '#21BF48' : '#C4C4C4')};
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: ${(props) => (props.size === 'full' || 'large' ? '18px' : props.size === 'medium' ? '16px' : null)};
  line-height: ${(props) => (props.size === 'full' ? '22px' : props.size === 'medium' ? '20px' : null)};
  color: #ffffff;
  padding: ${(props) => (props.size === 'full' || 'large' ? '19px 0' : props.size === 'medium' ? '17px 0' : null)};
`;
