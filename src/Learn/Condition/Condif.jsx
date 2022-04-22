import React from 'react'

const TrueComp = () => {
  return <h1>Condition Is True</h1>
}
const FalseComp = () => {
  return <h1>Condition Is False</h1>
}
const Condif = (props) => {
  const isCheck = props.cond;
  if(isCheck){
    return <TrueComp/>;
  }
    return <FalseComp/>;
}

export default Condif;