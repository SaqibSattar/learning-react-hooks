import React from "react";
import useCounter from "./hooks/useCounter";

const CountTwo = () => {
  const [count, increment, decrement, reset] = useCounter(0, 10);

  return (
    <div>
      <h2>CountTwo - {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CountTwo;
