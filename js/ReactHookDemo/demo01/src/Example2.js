import React, { useState } from 'react';
function Example2() {
  const [age, setAge] = useState(23);
  const [sex, setSex] = useState('男');
  return (
    <div>
      <p>
        小明是个{sex}的,今年{age}了
      </p>
    </div>
  );
}
export default Example2;
