import { useEffect, useRef, useState } from "react";
import { MagnifyingGlass, User, Bell, Gear, Moon, Sun } from "phosphor-react"


export default function Topbar({darkMode, setDarkMode}) {
    
    const [swapping, setSwapping] = useState(false);
    const root = document.documentElement;
  
    useEffect(() => {
      root.classList.add('dark');
    }, [])

    const changeTheme = () => {
        if(swapping) return;
        setDarkMode(!darkMode);
        setSwapping(true);
        setTimeout(() => {
          darkMode ? root.classList.remove('dark') : root.classList.add('dark');
        }, 500);
        setTimeout(() => {
            setSwapping(false);
        }, 1000);
    }

  return (
    <div className="w-full h-12 flex flex-row items-center text-dark dark:text-light bg-firefox dark:bg-dark-firefox ease-in-out duration-500">
        <SearchInput/>

        <div className="w-full h-full flex flex-row items-center justify-end gap-4 pr-8 overflow-hidden relative">
            <Moon onClick={changeTheme} size={22} className={`absolute right-40 cursor-pointer ${darkMode ? 'animate-rise' : 'animate-set'} [transition:color_.5s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] hover:[transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)]  hover:text-blue-400`}/>
            <Sun onClick={changeTheme} size={22} className={`absolute right-40 cursor-pointer ${!darkMode ? 'animate-rise' : 'animate-set'} [transition:color_.5s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] hover:[transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)]  hover:text-blue-400`}/>
            <Bell  size={22} className="cursor-pointer [transition:color_.5s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] hover:[transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] hover:animate-vibrate hover:text-blue-400" />
            <Gear  size={22} className="cursor-pointer [transition:color_.5s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] hover:[transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] hover:animate-vibrate hover:text-blue-400" />
            <User  size={22} className="cursor-pointer [transition:color_.5s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] hover:[transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] hover:animate-vibrate hover:text-blue-400" />
        </div>
    </div>
  )
}

function SearchInput() {

    const searchRef = useRef(null);


  return (
    <>
        <input placeholder="rechercher..." className="text-dark dark:text-input placeholder:text-dark dark:placeholder:text-input bg-navbar dark:bg-dark-navbar h-8 ml-3 rounded-tl-md rounded-bl-md pl-2 text-sm ease-in-out duration-500" type="text" name="search" id="search"/>
        <div className="[transition:color_.5s_cubic-bezier(0.4,0,0.2,1),background_.5s_cubic-bezier(0.4,0,0.2,1),border_.3s_cubic-bezier(0.4,0,0.2,1)] text-dark dark:text-light bg-navbar dark:bg-dark-navbar h-8 w-8 rounded-tr-md rounded-br-md cursor-pointer flex items-center justify-center border-2 border-solid border-transparent hover:border-dark-input dark:hover:border-input ">
            <MagnifyingGlass  size={22} />
        </div>
    </>
  )
}
