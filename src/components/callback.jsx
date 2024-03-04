import React, { useState } from 'react'
import { useCallback } from 'react';

const Callback = () => {

    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1); // Using the functional form of setCount
      }, []);
  return (
    <div>
        <sapn>Count: {count}</sapn>
        <button onClick={handleClick}>add</button>
    </div>
  )
}

export default Callback


