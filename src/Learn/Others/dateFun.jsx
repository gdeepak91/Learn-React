import React from 'react'

const dateFun = () => {
  return (
    <>
      <h1>Date Functions</h1>
      <h3>{new Date().toDateString()}</h3>
      <h3>{new Date().toTimeString()}</h3>
      <h3>{new Date().toLocaleDateString()}</h3>
      <h3>{new Date().toLocaleString()}</h3>
      <h3>{new Date().toLocaleTimeString()}</h3>
      <h3>{new Date().toUTCString()}</h3>
      <h3>{new Date().toISOString()}</h3>
    </>
  )
}

export default dateFun