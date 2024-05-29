import { useState } from 'react'

import './App.css'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Profile from './Components/Profile'
import Login  from './Components/Login'

function App() {
  

  return (
    
      <UserContextProvider>
      <h1>React with chai and share with important things</h1>
      <Login />
      <Profile />
      </UserContextProvider>
  )
}

export default App
