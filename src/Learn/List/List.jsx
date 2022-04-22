import React from 'react'

const list = () => {
  const num = [1,2,3,4,5,6,7];
  const double = num.map((a) => a*2);
  // console.log(double);
  return (
    <>
      <h1>List</h1>
      <h1>{double}</h1>
    </>
  )
}

export default list