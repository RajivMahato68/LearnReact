import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)
  
  // let counter = 5
const addVlaue = () => {
  console.log("clicked", counter);
  // counter = counter + 1
  if(counter < 20)
  setCounter(counter + 1)
}

const decreaseValue = () => {
  if (counter > 0) {
    setCounter(counter - 1);
  }
}
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter Vlaue : {counter}   </h2>
      <button
      onClick={addVlaue}
      >Add Value {counter} </button> 
      <br />
      <button
      onClick={decreaseValue}
      >Decrease Value {counter}</button>
      
  
    </>
  )
}

export default App
