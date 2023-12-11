import { useState } from 'react'

import './App.css';

function App() {
  var [count, setCount] = useState(0);
 

  const addV = () => {
    count=count + 1;

    if(count > 10){
      count=10;
      setCount(count);
    }
    else{
      setCount(count);
    }
   
  }
  const removeV = () => {
    count=count - 1;
    if(count < 0){
      count=0;
      setCount(count);
    }
    setCount(count);
  }

  return (
    <>
     
      <h1> Counter App </h1>
      <h2>counter value: {count}</h2>
      <button onClick={addV}>increase value</button>
      <br />
      <br />
      <button onClick={removeV}>decrease value</button>
     


    </>
  )
}

export default App
