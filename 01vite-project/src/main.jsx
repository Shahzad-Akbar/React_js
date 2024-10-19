import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function CustomFunction(){
  return(
  <a href="https://google.com" target='_blank'>Visit Google</a>
  )
}

const newElement=(
  <a href="https://google.com" target='_blank'>Visit Google Again</a>
)
const anotherElement = React.createElement(
  'a',
  {href: "https://google.com" , target:"_blank"},
 'visit Google third time'

)



ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
  //<CustomFunction />
 // newElement
  //anotherElement
  
  
)
