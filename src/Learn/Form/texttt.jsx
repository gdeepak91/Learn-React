import React , {useState} from 'react';

const Text = () => {
  const [data,setData] = useState(null);
  const [print , setPrint] = useState(false);
  const getData = (val) => {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  return (
    <>
    <h1>Text Input</h1>
    <h1>{print?data:null}</h1>
      <input type="text" name="name" onChange={getData} />
      <button onClick={() => setPrint(true)}>Click</button>
    </>
  )
}

export default Text;