import React from 'react'

const prop_child = (props) => {
  return (
    <>
      <h1>Props Children Render</h1>
      <p>{props.children}</p>
    </>
  )
}

export default prop_child