import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaretDoubleRight, House,UsersFour, AddressBook , Handshake , UserCirclePlus, Calendar, Question, ChartBar ,ChartPie, ChartLineUp ,MapTrifold} from 'phosphor-react'
import  cat  from '../assets/cat.png'

export default function Navbar({ isOpen, setIsOpen }) {
  
  return (
    <div className={`flex flex-col fixed top-0 left-0 h-screen bg-navbar items-center pt-3 ease-in-out duration-500 overflow-hidden ${isOpen ? 'w-64' : 'w-16'}`}>

        <div className={`relative text-white text-xl font-bold mb-5 ease-in-out duration-500 ${isOpen ? 'opacity-100 -translate-x-5' : 'opacity-0 -translate-x-20' }`}>AdminPanel</div>

        <CaretDoubleRight className={`absolute cursor-pointer ease-in-out duration-500 ${isOpen ? '-rotate-180 translate-x-24' : '' }`} size={32} onClick={()=>{setIsOpen(!isOpen)}} />

          <img src={cat} alt='cat' className={`w-28 rounded-full bg-firefox ease-in-out duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 -translate-x-20' }`}/>

          <div className={`text-white text-xl ease-in-out duration-500 mt-2 ${isOpen ? 'opacity-100' : 'opacity-0 -translate-x-20' }`}>Mehdimed</div>

          <div className={`w-full h-full pt-8 flex flex-col items-start gap-3 text-sm`}>

            <Link className={`relative flex flex-row items-end justify-center w-full hover:text-blue-400`} to="/">
              <House size={22} className={`relative [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? '-translate-x-16' :''}`}/> 
              <div className={`absolute [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? 'translate-x-3' :'translate-x-64'}`}>Tableau de bord</div>
            </Link>

            <div className={`relative font-semibold text-gray-400 ease-in-out duration-500 ${isOpen? 'translate-x-3' :'translate-x-64'}`}>Data</div>

            <Link className={`relative flex flex-row items-end justify-center w-full hover:text-blue-400`} to="/">
              <UsersFour size={22} className={`relative [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? '-translate-x-16' :''}`}/> 
              <div className={`absolute [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? 'translate-x-3' :'translate-x-64'}`}>Gestion team</div>
            </Link>

            <Link className={`relative flex flex-row items-end justify-center w-full hover:text-blue-400`} to="/">
              <AddressBook size={22} className={`relative [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? '-translate-x-16' :''}`}/> 
              <div className={`absolute [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? 'translate-x-3' :'translate-x-64'}`}>Clients</div>
            </Link>

            <Link className={`relative flex flex-row items-end justify-center w-full hover:text-blue-400`} to="/">
              <Handshake size={22} className={`relative [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? '-translate-x-16' :''}`}/> 
              <div className={`absolute [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? 'translate-x-3' :'translate-x-64'}`}>Transactions</div>
            </Link>

            <div className={`relative font-semibold text-gray-400 ease-in-out duration-500 ${isOpen? 'translate-x-3' :'translate-x-64'}`}>Outils</div>
            
            <Link className={`relative flex flex-row items-end justify-center w-full hover:text-blue-400`} to="/">
              <UserCirclePlus size={22} className={`relative [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? '-translate-x-16' :''}`}/> 
              <div className={`absolute [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? 'translate-x-3' :'translate-x-64'}`}>Ajout Client</div>
            </Link>

            <Link className={`relative flex flex-row items-end justify-center w-full hover:text-blue-400`} to="/">
              <Calendar size={22} className={`relative [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? '-translate-x-16' :''}`}/> 
              <div className={`absolute [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? 'translate-x-3' :'translate-x-64'}`}>Calendrier</div>
            </Link>

            <Link className={`relative flex flex-row items-end justify-center w-full hover:text-blue-400`} to="/">
              <Question size={22} className={`relative [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? '-translate-x-16' :''}`}/> 
              <div className={`absolute [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? 'translate-x-3' :'translate-x-64'}`}>FAQ</div>
            </Link>

            <div className={`relative font-semibold text-gray-400 ease-in-out duration-500 ${isOpen? 'translate-x-3' :'translate-x-64'}`}>Diagramme</div>
            
            <Link className={`relative flex flex-row items-end justify-center w-full hover:text-blue-400`} to="/">
              <ChartBar size={22} className={`relative [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? '-translate-x-16' :''}`}/> 
              <div className={`absolute [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? 'translate-x-3' :'translate-x-64'}`}>Barre</div>
            </Link>

            <Link className={`relative flex flex-row items-end justify-center w-full hover:text-blue-400`} to="/">
              <ChartPie size={22} className={`relative [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? '-translate-x-16' :''}`}/> 
              <div className={`absolute [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? 'translate-x-3' :'translate-x-64'}`}>Circulaire</div>
            </Link>

            <Link className={`relative flex flex-row items-end justify-center w-full hover:text-blue-400`} to="/">
              <ChartLineUp size={22} className={`relative [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? '-translate-x-16' :''}`}/> 
              <div className={`absolute [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? 'translate-x-3' :'translate-x-64'}`}>Courbe</div>
            </Link>

            <Link className={`relative flex flex-row items-end justify-center w-full hover:text-blue-400`} to="/">
              <MapTrifold size={22} className={`relative [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? '-translate-x-16' :''}`}/> 
              <div className={`absolute [transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? 'translate-x-3' :'translate-x-64'}`}>Carte</div>
            </Link>

          </div>

    </div>
  )
}
