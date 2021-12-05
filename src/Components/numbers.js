import React, { useState } from 'react';
import Header from "./header";
import Footer from "./footer";

const Numbers = () => {
  const [numbers, setNumbers] = useState(['one','two','three']);
  const [letters, setLetters] = useState(['a','b','c']);

  const addNumber = () => {
    setNumbers([...numbers,'four'])
  }

  return(
    <React.Fragment>
      <h1>Numbers</h1>
      {
        numbers.map( num => {
          return <h4>{num}</h4>
        })
      }
      <button onClick={addNumber}>Add Number</button>
    </React.Fragment>
  )
}

export default Numbers;