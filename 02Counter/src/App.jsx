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
  // setCounter(Prevcounter => Prevcounter + 1)
  // setCounter(Prevcounter => Prevcounter + 1)
  // setCounter(Prevcounter => Prevcounter + 1)   {this is a interview question so the fiber store the privious value and one click you wnat to increse 3 or 2 time so used the this type of code }
  // setCounter(Prevcounter => Prevcounter + 1)
  // setCounter(Prevcounter => Prevcounter + 1)
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
