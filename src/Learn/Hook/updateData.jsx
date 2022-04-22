import React , {useState} from 'react'

const UpdateData = () => {
  const [data , setData] = useState("Deepak");
  const Data = () => { setData("Gupta")};
  return (
    <>
      <h1>Update Data {data}</h1>
      <button onClick={Data}>Update</button>
    </>
  )
}

export default UpdateData