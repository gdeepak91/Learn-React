import React from 'react'

const List3 = (props) => {
  // console.log(props.nums);
  const items = props.nums;
  console.log(items);
  const nums = items.map((num) => num);
  return (
    <>
      <h1>List3 Example</h1>
      <ul>{nums}</ul>
    </>
  )
}

export default List3;