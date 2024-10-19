import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
//import tailwindConfig from '../tailwind.config'
function App() {
  let myObj={
    Name: "shahzad",
    ser: "REact",
    by: "Chai aur code" 
  }
 

  return (
    <>
      <h1 className="bg-green-400 text-blue-400 text-4.5xl font-bold  rounded-xl mb-5" >Tailwind Test</h1>
     <Card  Channel='Chai aur code' userName={myObj}/>
      <Card  btnText="click me"/>
      <Card btnText="Visit me"/>
     </>
    
  )
}

export default App
