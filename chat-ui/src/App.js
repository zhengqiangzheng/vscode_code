import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Button';
import Button from './Button';
import useColorSwitch from './useColorSwitch';

function App() {
  // const [color, setColor] = useState('#ff0000');
  const [color, handleButtonClick] = useColorSwitch();
  const [color2, handleButton2Click] = useColorSwitch('yellow', 'red');
  const handleClick1 = () => {
    //setColor('green');
    handleButtonClick();
  };
  const handleClick2 = () => {
    console.log('button2');
    handleButton2Click();
  };

  return (
    <div className="App">
      <Button label="按钮1" onClick={handleClick1} width="120px">
        <span>&gt;</span>
      </Button>
      <Button label="按钮2" onClick={handleClick2}>
        <span>&gt;</span>
      </Button>
      <p style={{ color }}>color change</p>
      <p style={{ color: color2 }}>color change</p>
    </div>
  );
}

export default App;
