import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [ count , mango ]  = useState(1)

 
  const addValue = () => {
       count += 1;
       mango(count);
       if( count >= 20){
          count === 20;
       }
  }

  const removeValue = () => {
    mango(count - 1);
    if( count <= 0){
      count === 0;
    }
  }


  return (
    <>
      <h1> hello </h1>
      <h2> i want {count} </h2>

      <button 
      onClick={addValue}
      > add </button>
      
      <br/>

      <button
      onClick={ removeValue}
      > sub </button>
    </>
  )
}

export default App
