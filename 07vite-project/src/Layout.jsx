import React from 'react'
import Header from 'C:/Users/Shahzad Akbar/React_js/07vite-project/src/components/header/header.jsx'
import Footer from 'C:/Users/Shahzad Akbar/React_js/07vite-project/src/components/footer/footer.jsx'
import { Outlet } from 'react-router-dom'

export function Layout(props) {
    

    return (
        <>
          <Header />
          < Outlet />
          <Footer />
        </>
    )
}
