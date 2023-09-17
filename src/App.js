
import React, { useState } from 'react';
 import './index.css';


const  App = () => {
  const state = useState();
// console.log(useState);
const [count, setCount] = useState(0);

const IncNum = () => {
  setCount(count+1);
  console.log('clicked'+count);
};
const dcrNum = () => {
  setCount(count-1);
  console.log('clicked'+count);
};

      return (
        <>
        <h1 className='heading'>{count}</h1>
        <button onClick= {IncNum} className='btn'>+</button>
        <button onClick= {dcrNum} className='btn'>-</button>
        </>
      )
}

export default App;