//useReducer简单使用
import React, { useReducer } from 'react';
function ReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'add':
        return state + 1;
      case 'decrease':
        return state - 1;
      default:
        return state;
    }
  }, 0);
  return (
    <div>
      <h2>现在你有{count}千元</h2>
      <button
        onClick={() => {
          dispatch('add');
        }}
      >
        增加
      </button>
      <button
        onClick={() => {
          dispatch('decrease');
        }}
      >
        减少
      </button>
    </div>
  );
}
export default ReducerDemo;
