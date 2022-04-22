import React from 'react'

const Tern2 = () => {
  const [cond,setCond] = React.useState(3);
  return (
    <>
      <h1>Ternary Operator Multiplex</h1>
      {cond===1?<h1>Deepak</h1>:cond===2?<h2>Kumar</h2>:<h3>Gupta</h3>}
      <button onClick={()=>setCond(2)}>Click</button>
    </>
  )
}

export default Tern2