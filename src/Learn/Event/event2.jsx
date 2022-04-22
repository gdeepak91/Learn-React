import React from 'react'

const event2 = () => {
  const test = (a) =>
  {
    alert(a,"Hi ");
  }
  return (
    <>
      <button onClick={() => test("event Trigered")}>Press Me</button>
    </>
  )
}

export default event2