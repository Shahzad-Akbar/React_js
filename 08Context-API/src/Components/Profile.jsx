import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

export function Profile() {

    const {User}=useContext(UserContext)


    if(!User)  return <div>Please Login</div> 
    
    
    return <div>Welcome: {User.username}</div>
   

   
}
