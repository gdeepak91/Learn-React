import React from 'react'

const HideShow = () => {
  const [status,setStatus] = React.useState(false);
  return (
    <>
      <h1>Hide Show Element</h1>
      <h1>{status?<h3>Data !</h3>:null}</h1>
      <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button>
    </>
  )
}

export default HideShow