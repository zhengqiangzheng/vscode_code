import React, { Component, useState } from 'react';
function useColorSwitch(initialColor = 'red', switchColor = 'green') {
  const [color, setColor] = useState(initialColor);
  const handleButtonClick = () => {
    setColor(switchColor);
  };
  return [color, handleButtonClick];
}
export default useColorSwitch;
