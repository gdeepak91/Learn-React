import React, { useEffect } from 'react'

const Counter = () => {
  const [count,setCount] = React.useState(0);

  useEffect(() => {
    document.title = {count};
  });
  return (
    <>
      <p>Counter {count}</p>
      <button onClick={()=>setCount(count+1)}>Count {count}</button>
    </>
  )
}

export default Counter