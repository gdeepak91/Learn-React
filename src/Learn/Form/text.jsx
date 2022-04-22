import React from 'react'

const text = () => {
  const formControl = (e) => {
    e.preventDefault();
    alert("Hi, Hello");
  }

  return (
    <>
      <form onSubmit={formControl}>
        <label htmlFor="#">
          Name :
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="#">
          Address :
          <textarea cols="30" rows="3"></textarea>
        </label>
        <label>
          <input type="checkbox" name="checkbox"/>Male
        </label>
        <label>
          <input type="radio" name="checkbox"/>Male
        </label>
        <label>
          <input type="file" name="checkbox"/>Male
        </label>
        <label>
          <select name="option" id="1">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
            <option value="e">e</option>
          </select>
        </label>
        <button type='submit'>Submit</button>

      </form>
    </>
  )
}

export default text;