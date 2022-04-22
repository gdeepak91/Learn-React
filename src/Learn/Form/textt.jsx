import React , {useState} from 'react';

const Text = () => {
  const [data,setData] = useState(null);
  const inptxt = (val) => {
    console.log(val.target.value);
    setData(val.target.value);
  }
  return (
    <>
    <h1>Text Input</h1>
    <h1>{data}</h1>
      <input type="text" name="name" onChange={inptxt} />
    </>
  )
}

export default Text;