import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevState => prevState + 1)
    }
  }
  
  return (
    <div>
      Count {count}
      <button
        onClick={() => {
          setCount(prevState => prevState + 1)
        }}
      >
        {" "}
        Increment
      </button>
      <button
        onClick={() => {
          setCount(prevState => prevState - 1)
        }}
      >
        {" "}
        Decrement
      </button>
      <button
        onClick={incrementFive}
      >
        {" "}
        Increment by 5
      </button>
      <button
        onClick={() => {
          setCount(initialCount);
        }}
      >
        {" "}
        Reset
      </button>
    </div>
  );
};

export default HookCounterTwo;
