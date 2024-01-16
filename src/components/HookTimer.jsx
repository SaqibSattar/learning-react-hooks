import React, { useEffect, useRef, useState } from 'react'

const HookTimer = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
        setTimer(prevState => prevState + 1)
      }, 1000)
    
      return () => {
        clearInterval(intervalRef.current)
      }
    }, [])
    
  return (
    <div>
        HookTimer - {timer}
        <button
          onClick={() => {
            clearInterval(intervalRef.current);
          }}
        >
          {" "}
          Clear Timer
        </button>
        </div>
  )
}

export default HookTimer