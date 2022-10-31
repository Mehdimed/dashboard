import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './routes/Dashboard'
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
          <Route path='/map' element={<Map/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
