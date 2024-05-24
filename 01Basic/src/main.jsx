import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai aur code"

const reactElement = React.createElement(
    'a',
    {
      href: 'https://google.com',
      target: '_blank'
    },
    'Visit Google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
  
)
