import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './routes/Dashboard'
import Map from './routes/Map'
import Clients from './routes/Clients'
import Team from './routes/Team'
import Transactions from './routes/Transactions'
import Layout from './Layout'
import './global.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='/clients' element={<Clients/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
          <Route path='/map' element={<Map/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
