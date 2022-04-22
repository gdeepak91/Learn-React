import React from 'react'

const Prosp = (props) => {
  return (
    <>
      <h1>Props Properties</h1>
      {/* {props.name?<p>{props.name}</p>: <p>Enter The Name</p>} */}
      {props.name.map((name) => (
        <h1>Hello {name}</h1>
      ))}
    </>
  )
}

export default Prosp;