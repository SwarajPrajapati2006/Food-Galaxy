import React, { useState } from 'react'
import Header from './UI/Header'
import Footer from './UI/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  const [cartCount, setCartCount] = useState(0)

  return (
    <>
    <Header cartCount={cartCount}/>
    <div className="pt-20"> 
      <Outlet context={{ setCartCount }}/>
    </div>
    <Footer/>
    </>
  )
}

export default AppLayout