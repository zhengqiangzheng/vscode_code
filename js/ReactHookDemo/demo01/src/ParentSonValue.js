import React, { useState, createContext, useContext } from 'react';

const valueContext = createContext();
function SonComponent() {
  let parentvalue = useContext(valueContext);
  return (
    <h2>
      {parentvalue.count}and 我有{parentvalue.money}
    </h2>
  );
}
function ParentSonValue() {
  const [count, setCount] = useState(0);
  const [money, setMoney] = useState(100);
  let valuetoson = { money, count };

  return (
    <div>
      <p>you click {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <valueContext.Provider value={valuetoson}>
        <SonComponent></SonComponent>
      </valueContext.Provider>
    </div>
  );
}
export default ParentSonValue;
