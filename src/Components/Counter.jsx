import React from 'react'
import { useState } from 'react'



const Counter = () => {
  const [current,setNext] = useState(0);
  const increment = ()=>{
    setNext(current+1)
  }
  const decrement = ()=>{
    if(current > 0){
        setNext(current-1)
    }
    
  }
  return (
    <div>
      <h1>Counter</h1>
      <h3>{current}</h3>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter
