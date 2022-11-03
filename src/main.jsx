import React from 'react'
import ReactDOM from 'react-dom/client'

import Dashboard from './routes/Dashboard'
import Team from './routes/Team'
import Clients from './routes/Clients'
import Transactions from './routes/Transactions'
import FAQ from './routes/FAQ'
import Bar from './routes/Bar'
import Pie from './routes/Pie'
import Line from './routes/Line'
import Map from './routes/Map'
import Layout from './Layout'


import './global.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/clients' element={<Clients/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/bar' element={<Bar/>}/>
          <Route path='/pie' element={<Pie/>}/>
          <Route path='/line' element={<Line/>}/>
          <Route path='/map' element={<Map isDashboard={false}/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
