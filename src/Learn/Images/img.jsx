import React from 'react'
import Img from './images';

const img = () => {
  return (
    <>
      {
        Img.map((a)=>
          <p key={a.id}>
            <img src={a.images} alt="Images" height={200} width={250}/>
          </p>
      
        )
      }
    </>
  )
}

export default img