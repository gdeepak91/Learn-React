import React from 'react'

const DogApi = () => {
  const [src,setSrc] = React.useState('');
  const getData = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    setSrc(data.message);
    // console.log(data.message);
  }

  return (
    <>
      <h2>The Pictures Of Dogs</h2>
      <button onClick={getData}>GetImage</button>
      <br /><br />
      <img src={src} alt="alt" width="200" height="300" />
    </>
  )
}

export default DogApi