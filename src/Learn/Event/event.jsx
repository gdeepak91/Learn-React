import React from 'react'

const event = () => {
  const check = () => {
    alert("hi");
  }
  return (
    <>
      <h1>Event</h1>
      <button onClick={check}>Click</button>
    </>
  )
}

export default event