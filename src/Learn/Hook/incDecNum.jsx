import React , { useState } from 'react'

const DecEvent = () => {
  const [count,setCount] = useState(1);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
    </>
  )
}

export default DecEvent