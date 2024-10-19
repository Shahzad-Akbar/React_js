import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [borderColor, setBorderColor] = useState('red')

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "@#$%^&*!~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, characterAllowed, numberAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])


  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 4)

    window.navigator.clipboard.writeText(password)
    if (borderColor == "red") {
      setBorderColor('green')
    }
    else {
      setBorderColor("red")
    }
  }, [password, borderColor, setBorderColor])

  const borderChanger = () => {
    if (borderColor == "red") {
      setBorderColor('green')
    }
    else {
      setBorderColor("red")
    }
  }


  return (

    <div
      className='mx-w-medium mx-auto shadow-md 
               text-center px-4 py-3 my-6px  text-4xl bg-blue-300 rounded-lg'>
      <h1>Password Generator</h1>
      <div
        className=' rounded-lg overflow-hidden mb-4'
      >
        <input
          type="text"
          placeholder='password'
          value={password}
          className='py-1 px-3 rl-50% rounded'
          ref={passwordRef}

        />
        <button
          onClick={copyPasswordToClipBoard}
          style={{ borderColor }}
          className='text-blue-500 bg-red-400  py-1 px-2 rounded border-2 '
        >copy</button>
      </div>
      <div className=' inline-flex text-sm gap-x-5 text-white'>
        <div className='flex item-center gap-x-1 text-lg '>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer py-1px'
            onChange={(e) => { setLength(e.target.value) }}

          />
          <label>Length : {length}</label>
        </div>
        <div className='flex gap-x-1 text-lg '>
          <input
            type="checkbox"
            defaultValue={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="numberInput">Number</label>
        </div>
        <div className='flex gap-x-1 text-lg '>
          <input
            type="checkbox"
            defaultValue={characterAllowed}
            id='numberInput'
            onChange={() => {
              setCharacterAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Character</label>
        </div>

      </div>
    </div>

  )
}

export default App
