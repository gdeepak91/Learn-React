import React from 'react'

const rend = () => {
  const name = "Deepak";
  const surname = "Gupta";
  const element = (
    <div>
      <h1>Element {name} {surname}</h1>
      
    </div>
  )
  return (
    <>
      {element}
    </>
  )
}

export default rend