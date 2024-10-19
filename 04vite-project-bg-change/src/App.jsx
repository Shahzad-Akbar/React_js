import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Color, setColor] = useState('#414141');
  // let red=()=>{
  //   setColor('red')
  // }
  return (
    <div className='w-full h-full duration-200' style={{ backgroundColor: Color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <div className='flex flex-wrap bg-white gap-3 rounded-full size shadow-lg px-4 py-2 '>

          <button onClick={()=>setColor('red')} className='outline-none text-white 
      px-3 py-0 rounded-full shadow-lg' style={{ backgroundColor: "rgb(199, 68, 88)" }} >RED</button>
          <button onClick={()=>setColor('yellow')}  className='outline-none text-white 
      px-3 py-0 rounded-full shadow-lg' style={{ backgroundColor: "rgb(118, 118, 34)" }}>YELLOW</button>
          <button onClick={()=>setColor('pink')} className='outline-none text-white 
      px-3 py-0 rounded-full shadow-lg' style={{ backgroundColor: "pink" }}>PINK</button>
          <button onClick={()=>setColor('blue')} className='outline-none text-white 
      px-3 py-0 rounded-full shadow-lg' style={{ backgroundColor: "blue" }}>BLUE</button>
          <button onClick={()=>setColor('magenta')} className='outline-none text-white 
      px-3 py-0 rounded-full shadow-lg' style={{ backgroundColor: "magenta" }}> MAGENTA</button>

        </div>
      </div>
    </div>
  )
}

export default App
