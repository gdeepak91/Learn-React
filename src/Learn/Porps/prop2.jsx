import React from 'react'

const Car = (props) => {
  return <h3>{props.name.name}</h3>
}

const prop2 = () => {
  // const name = "Deepak Gupta";
  const info = {"name":"Suraj","surname":"Gupta"};
  return (
    <>
      <h2>Props are Pass By one component to another componets</h2>
      <Car name={info}/>
    </>
  )
}

export default prop2