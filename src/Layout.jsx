import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className={`ease-in-out duration-500 ${isOpen ? 'ml-64' : 'ml-16'}`}>
          <Outlet isOpen={isOpen}/>
        </div>
    </>
  )
}
