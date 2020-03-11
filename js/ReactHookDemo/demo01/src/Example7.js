import React, { useRef, useState, useEffect } from 'react';

function Example7() {
  const inputEl = useRef(null);
  const [text, setText] = useState('113');
  const textRef = useRef();
  useEffect(() => {
    textRef.current = text;
    console.log(text);
  });

  const handlClick = () => {
    inputEl.current.value = 'hello world';
    console.log(inputEl);
  };
  return (
    <>
      <input ref={inputEl} />
      <button onClick={handlClick}>在input 上展现文字</button>
      <br />
      <br />
      <input
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
    </>
  );
}
export default Example7;
