import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { Layout } from './Layout.jsx'
import Home from './components/home/home.jsx'
import { About } from './components/about/about.jsx'
import { Contact } from './components/conatact/contact.jsx'
import { User } from './components/user/user.jsx'
// import { Github } from './components/github/github.jsx'
import Github, {githubInfoLoader} from './components/github/github.jsx'

// const router= createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children:[
//       {
//       path:'',
//       element:<Home />
//     },
//     {
//       path:'about',
//       element:<About />
//     },
//     {
//       path:'contact',
//       element:< Contact />
//     }
//   ]

//   }
// ])

                                   //second method for routing
 
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:Userid' element={<User/>} />
      <Route
      loader={githubInfoLoader} 
      path='github' element={<Github/>} />
      <Route path='src' element={<App/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
