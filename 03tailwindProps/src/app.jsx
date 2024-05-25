import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Card from './components/card'

export function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <h1 className='bg-green-400 text-black rounded-xl mb-4'>Tailwind Test</h1>
    <Card username="chaiaurcode" button="click Me." />
    <Card username="hitesh" />
    
    </>
  )
}
