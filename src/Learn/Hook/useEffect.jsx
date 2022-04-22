import React , {useEffect} from 'react'

const UseEf = () => {
  const [count,setCount] = React.useState(0);
  const [num,setNum] = React.useState(20);
  useEffect(()=>{
    alert("hi");
  },[count]);

  return (
    <>
      <h1>Hook useEffect Example</h1>
      {/* {count===1?<h1>Hello</h1>:<h2>Hey</h2>} */}
      <p>Count {count} Num : {num}</p>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setNum(num+10)}>-</button>
      <button onClick={()=>setCount(count-1)}>Reset/Clear</button>
    </>
  )
}

export default UseEf