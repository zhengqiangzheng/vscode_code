import React, { Component } from 'react';

function Button({ onClick, label, children }) {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
      {/* 相当于插槽 */}
      {children}
    </div>
  );
}
export default Button;
