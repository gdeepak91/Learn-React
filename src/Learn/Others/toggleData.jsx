import React from 'react'

const ToggleData = () => {
  const [status,setStatus] = React.useState(true);
  return (
    <>
      <h1>Toggle Hide And Show Data</h1>
      {status?<h2>Data !</h2> : null}
      <button onClick={()=>setStatus(!status)}>Toggle</button>
    </>
  )
}

export default ToggleData