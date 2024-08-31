import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Header from './component/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Sidebar from './component/Sidebar'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='main d-flex'>
        <div className='sidebarwrapper'>
          <Sidebar/>
        </div>

        <div className='content'>

          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

        </div>
      </div>


    </BrowserRouter>
  )
}

export default App