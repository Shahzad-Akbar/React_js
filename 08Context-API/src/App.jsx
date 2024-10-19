import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import { Login } from './Components/Login'
import { Profile } from './Components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h2>Hey man! Assalam 0 Alaikum</h2>
      <Login/>
      <Profile/>

    </UserContextProvider>
    
  )
}

export default App
