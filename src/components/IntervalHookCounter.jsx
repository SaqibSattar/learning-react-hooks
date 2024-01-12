import React, { useEffect, useState } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => { prevCount + 1 })
  };

  useEffect(() => {
    function doSomething() {    // TIP:   put function call code inside useEffect to properly set the dependencies
        console.log(someProp)
    }

    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [someProp]);

  return <div>{count}</div>;
};

export default IntervalHookCounter;
