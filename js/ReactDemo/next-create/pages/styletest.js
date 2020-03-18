import React, { useState } from 'react';
import Head from 'next/head';

const style = () => {
  const [color, setColor] = useState('blue');
  function ChangeColor() {
    setColor(color == 'blue' ? 'red' : 'blue');
  }

  return (
    <>
      <Head>
        <title>颜色</title>
        <meta charSet="utf-8"></meta>
      </Head>
      <h2>hello world</h2>
      <button onClick={ChangeColor}>改变颜色</button>
      <style jsx>{`
        h2 {
          color: ${color};
        }
      `}</style>
    </>
  );
};
export default style;
