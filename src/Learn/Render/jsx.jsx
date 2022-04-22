import React from 'react'

const b = 'Gupta';
const a = <h1>Hi Deepak {b}</h1>;
function formatName(user){
  return user.firstName+""+user.lastName;
}
const user = {
  firstName : "Deepa",
  lastName : "yadav"
};
const l1 = <a href="https://www.google.com">Link</a>
// const m = <img src={a.jpg}/>
const jsx = () => {
  return (
    <>
      {a}  `{l1}`
      {formatName(user)}

    </>
  )
}

export default jsx