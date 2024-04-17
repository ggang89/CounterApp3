import { useState } from "react";
import React from "react";

function App() {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount(count+1);
  };
  const HandleMinus = () => {
    setCount(count-1);
  };
  return (
    <div>
      <h1>Counter App 3</h1>
      <div>
        <button onClick={handlePlus}>+1</button>
        <span>{count}</span>
        <button onClick={HandleMinus}>-1</button>
      </div>
    </div>
  );
}

export default App;
