import React from 'react';

const Good = () => {
  return <h2>Good</h2>;
}
const Bad = () => {
  return <h2>Bad</h2>;
}
const Tern = (props) => {
  const isCond = props.cond;
  return (
    <>
      <h1>Ternary Condition </h1>
      { isCond ? <Good/> : <Bad/>}
    </>
  )
}

export default Tern;