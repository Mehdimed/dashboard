import { useState } from 'react'
import { CaretDoubleRight} from 'phosphor-react'
import  cat  from '../assets/cat.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={`flex flex-col fixed top-0 left-0 h-screen bg-navbar items-center pt-3 ease-in-out duration-500 ${isOpen ? 'w-64' : 'w-16'}`}>

        <div className={`relative text-white text-xl font-bold transition mb-5 ease-in-out duration-500 ${isOpen ? 'opacity-100 -translate-x-5' : 'opacity-0 -translate-x-20' }`}>Admin</div>

        <CaretDoubleRight className={`absolute cursor-pointer ease-in-out duration-500 ${isOpen ? '-rotate-180 translate-x-20' : '' }`} size={32} onClick={()=>{setIsOpen(!isOpen)}} />

          <img src={cat} alt='cat' className={`w-28 rounded-full bg-firefox ease-in-out duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 -translate-x-20' }`}/>

    </div>
  )
}
