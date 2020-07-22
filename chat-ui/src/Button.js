import React, { Component } from 'react';
import styled from 'styled-components';

const StyleButton = styled.div`
  width: ${(props) => props.width || '80px'};
  background-color: ${({ theme }) => theme.primaryColor};
`;

function Button({ width, onClick, label, children }) {
  return (
    <StyleButton width={width}>
      <button onClick={onClick}>{label}</button>
      {/* 相当于插槽 */}
      {children}
    </StyleButton>
  );
}
export default Button;
