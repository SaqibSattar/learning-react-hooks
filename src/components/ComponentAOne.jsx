import React, { useContext } from 'react'
import { CountContext } from '../App';

const ComponentAOne = () => {
  const countContext = useContext(CountContext);
  console.log(countContext)
  return (
    <div>
    ComponentAOne - {countContext.countState}
    <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  )
}

export default ComponentAOne