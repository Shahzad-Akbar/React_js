import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const val="chai aur react"
 let [num, setNum]=useState(0)           //useState is hook which is used to change all values placed on different places on UI
const addValue= ()=>{
  if(num<=19){
    num=num+1
    setNum(num)
    console.log("value Added", num)
  }
  else{
    console.log(" value greater than 20 is not acceptable")
  }
}
function RemoveValue(){
  if(num>=1){
    num=num-1
    setNum(num)
    console.log("value Removed", num)
  }
  else{
    console.log("Negative value not acceptable")
  }

 
}

  return (
    <>
      <h1>Fun series by {val}</h1>
      <h3>Value is: {num}</h3>  
      <h4>value= {num}</h4>  
      <h5>5value= {num}</h5>  
      <h5>value= {num}</h5>  
      <h6>value= {num}</h6>  
      <button 
      onClick={addValue} 
      >Add Value</button>
      <br />
      <button
      onClick={RemoveValue}
      >Remove value</button>
    </>
  )
}

export default App
