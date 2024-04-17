import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount(count + 1);
  };
  const HandleMinus = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="counter">
        <button onClick={handlePlus} className="btn">
          +1
        </button>
        <span className="text">{count}</span>
        <button onClick={HandleMinus} className="btn">
          -1
        </button>
      </div>
    </>
  );
}
