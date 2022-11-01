import { useRef, useState } from "react";
import { MagnifyingGlass, User, Bell, Gear, Moon, Sun } from "phosphor-react"


export default function Topbar() {
    const [darkMode, setDarkMode] = useState(true);

    const changeTheme = () => {
        setDarkMode(!darkMode);
    }
  return (
    <div className="w-full h-12 flex flex-row items-center">
        <SearchInput/>

        <div className="w-full flex flex-row items-center justify-end gap-4 pr-8 overflow-hidden relative">
            <Moon onClick={changeTheme} size={22} className={`absolute right-40 cursor-pointer ${darkMode ? 'animate-rise' : 'animate-set'} [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)]  hover:text-blue-400`}/>
            <Sun onClick={changeTheme} size={22} className={`absolute right-40 cursor-pointer ${!darkMode ? 'animate-rise' : 'animate-set'} [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)]  hover:text-blue-400`}/>
            <Bell  size={22} className="cursor-pointer [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] hover:animate-vibrate hover:text-blue-400" />
            <Gear  size={22} className="cursor-pointer [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] hover:animate-vibrate hover:text-blue-400" />
            <User  size={22} className="cursor-pointer [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] hover:animate-vibrate hover:text-blue-400" />
        </div>
    </div>
  )
}

function SearchInput() {

    const searchRef = useRef(null);


  return (
    <>
        <input placeholder="rechercher..." className="bg-navbar h-8 ml-3 rounded-tl-md rounded-bl-md pl-2 text-sm text-gray-400" type="text" name="search" id="search"/>
        <div className="h-8 w-8 rounded-tr-md rounded-br-md cursor-pointer bg-navbar flex items-center justify-center duration-300 border-2 border-solid border-transparent hover:border-gray-400">
            <MagnifyingGlass  size={22} />
        </div>
    </>
  )
}
