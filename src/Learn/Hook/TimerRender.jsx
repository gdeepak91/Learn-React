import React,{useEffect} from 'react'

const TimerRender = () => {
  const [count,setCount] = React.useState(0);
  
  useEffect(()=>{
    setTimeout(()=>{
      setCount((count) => count+1);
    },1000);
  });
  return (
    <div>TimerRender {count}</div>
  )
}

export default TimerRender