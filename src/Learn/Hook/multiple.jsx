import {useState} from 'react';

const MulState = () => {
  const [name , setName] = useState("Deepak");
  const [color , setColor] = useState("Green");
  const [animal , setAnimal] = useState("Tiger");
  const [book , setBook] = useState("Wing Of Fire");
  const [brand , setBrand] = useState("Audi");
  return( 
  <>
    <h1>Multiple Hook State</h1>
    <h2>I am a {name}</h2>
    <p>my favorite color is {color}</p>
    <p>animal is {animal}</p>
    <p>this is a {book}</p>
    <p>My favorite Brand is {brand}</p>

    <button onClick={()=>setName("Suraj")}>Name</button> 
    <button onClick={()=>setColor("Red")}>Color</button>
    <button onClick={()=>setAnimal("Monkey")}>Animal</button>
    <button onClick={()=>setBook("Letus C")}>Book</button>
    <button onClick={()=>setBrand("ONN")}>Brand</button>
  </>
  );
};

export default MulState;