import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import MyHeading from '../components/MyHeading';
const One = dynamic(import('../components/lazyComponent'));
const time = () => {
  const [now, setNow] = useState(Date.now());
  const formatTime = async () => {
    const moment = await import('moment');
    setNow(moment.default(Date.now()).format());
  };
  return (
    <>
      <MyHeading></MyHeading>
      <h2>Now time is {now}</h2>
      <One />
      <button onClick={formatTime}>format tiem</button>
    </>
  );
};
export default time;
