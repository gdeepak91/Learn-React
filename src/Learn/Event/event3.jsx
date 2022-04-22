import React from 'react'

const event3 = () => {
  const test = (a,b) =>
  {
    alert(b.type);
  }
  return (
    <>
      <button onDoubleClick={(event) => test("event",event)}>Press Me</button>
    </>
  )
}

export default event3