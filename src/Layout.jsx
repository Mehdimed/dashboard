import  {  useState } from 'react'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'
import { Outlet, } from 'react-router-dom'

export default function Layout() {
  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  
  

  return (
    <>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className={`ease-in-out duration-500 w-full h-full text-dark dark:text-light bg-firefox dark:bg-dark-firefox ${isOpen ? 'pl-64' : 'pl-16'}`}>
          <Topbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Outlet context={darkMode}/>
        </div>
    </>
  )
}
