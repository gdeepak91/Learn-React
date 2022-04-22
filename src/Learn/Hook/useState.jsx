import React,{useState} from 'react';

const HookA = () => {
  const [name , setName] = useState("Deepak");
  return(
    <>
      <h1>Hooks {name}</h1>
      <button onClick={() =>setName("red")}>Red</button>
    </>
  )
}

export default HookA;