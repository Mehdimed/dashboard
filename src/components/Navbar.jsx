import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaretDoubleRight, House,UsersFour, AddressBook , Handshake , UserCirclePlus, Calendar, Question, ChartBar ,ChartPie, ChartLineUp ,MapTrifold} from 'phosphor-react'
import  cat  from '../assets/cat.png'

export default function Navbar({ isOpen, setIsOpen }) {
  
  return (
    <div className={`flex flex-col fixed top-0 left-0 h-screen text-dark dark:text-light bg-navbar dark:bg-dark-navbar items-center pt-3 ease-in-out duration-500 overflow-hidden ${isOpen ? 'w-64' : 'w-16'}`}>

        <div className={`relative text-xl font-bold mb-5 ease-in-out duration-500 ${isOpen ? 'opacity-100 -translate-x-5' : 'opacity-0 -translate-x-20' }`}>AdminPanel</div>

        <CaretDoubleRight className={`absolute cursor-pointer ease-in-out duration-500 ${isOpen ? '-rotate-180 translate-x-24' : '' }`} size={32} onClick={()=>{setIsOpen(!isOpen)}} />

          <img src={cat} alt='cat' className={`rounded-full bg-firefox dark:bg-dark-firefox ease-in-out duration-500 ${isOpen ? 'w-28' : 'w-10 translate-y-4' }`}/>

          <div className={`text-xl ease-in-out duration-500 mt-2 ${isOpen ? '' : 'text-sm opacity-0 translate-y-4' }`}>Mehdimed</div>

          <div className={`w-full h-full pt-8 flex flex-col items-start gap-3 text-sm`}>

            <NavLink isOpen={isOpen} label='Tableau de bord' to='/' icon={House}/>

            <div className={`relative font-semibold dark:text-input ease-in-out duration-500 ${isOpen? 'translate-x-3' :'translate-x-64'}`}>Data</div>

            <NavLink isOpen={isOpen} label='Gestion team' to='/team' icon={UsersFour}/>
            <NavLink isOpen={isOpen} label='Clients' to='/clients' icon={AddressBook}/>
            <NavLink isOpen={isOpen} label='Transactions' to='/transactions' icon={Handshake}/>

            <div className={`relative font-semibold dark:text-input ease-in-out duration-500 ${isOpen? 'translate-x-3' :'translate-x-64'}`}>Outils</div>
            
            <NavLink isOpen={isOpen} label='Ajout client' to='/' icon={UserCirclePlus}/>
            <NavLink isOpen={isOpen} label='Calendrier' to='/' icon={Calendar}/>
            <NavLink isOpen={isOpen} label='FAQ' to='/faq' icon={Question}/>

            <div className={`relative font-semibold dark:text-input ease-in-out duration-500 ${isOpen? 'translate-x-3' :'translate-x-64'}`}>Diagramme</div>
            
            <NavLink isOpen={isOpen} label='Barre' to='/bar' icon={ChartBar}/>
            <NavLink isOpen={isOpen} label='Circulaire' to='/pie' icon={ChartPie}/>
            <NavLink isOpen={isOpen} label='Courbe' to='/line' icon={ChartLineUp}/>
            <NavLink isOpen={isOpen} label='Carte' to='/map' icon={MapTrifold}/>

          </div>

    </div>
  )
}


const NavLink = ({isOpen ,label, to, icon}) => {

  return (
    <Link className={`relative group flex flex-row items-end justify-center w-full hover:text-blue-400`} to={to}>
      {React.createElement(icon, {size: 22, className: `relative [transition:color_.5s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] group-hover:[transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? 'origin-[-3.5rem] -translate-x-16 group-hover:animate-vibrate-open' :' group-hover:animate-vibrate'}`})}
      <div className={`absolute [transition:color_.5s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] hover:[transition:color_.1s,transform_.5s_cubic-bezier(0.4,0,0.2,1)] ${isOpen? 'translate-x-3' :'translate-x-64'}`}>{label}</div>
    </Link>
  )
}