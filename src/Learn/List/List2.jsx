import React from 'react'

const List2 = () => {
  const nums = [0,1,2,3,4,5,6,7,8,9,10];
  const square = nums.map((s) => <li>{s*2}</li> );
  const cube = nums.map((c) => <li>{c*3}</li> )
  return (
    <>
      <h1>List2 Example</h1>
      <h3>Square</h3>
      <ul>{square}</ul>
      <h3>Cube</h3>
      <ul>{cube}</ul>
    </>
  )
}

export default List2;