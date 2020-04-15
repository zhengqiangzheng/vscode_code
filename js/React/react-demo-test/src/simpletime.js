import React, { useState, useEffect } from 'react';
function Simpletime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  });
  useEffect(() => {
    const id = setInterval(() => {
      setCount((x) => x + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      <p>{time}</p>
      <p>{count}</p>
      <button>+1</button>
    </div>
  );
}
export default Simpletime;
