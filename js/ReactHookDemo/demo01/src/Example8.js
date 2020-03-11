import React, { useState, useEffect, useCallback } from 'react';

function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  }, []);
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return size;
}
function Example8() {
  const size = useWinSize();
  return (
    <div>
      页面宽度:{size.width},页面高度:{size.height}
    </div>
  );
}
export default Example8;
