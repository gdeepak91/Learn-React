import React from 'react'

const Toggle = () => {
  const [show,setShow] = React.useState(true);
  return (
    <>
        <button onClick={()=>setShow(!show)}>Toggle</button>
        {show ? <h1>Hello</h1>:null} <br />
    </>
  )
}

export default Toggle