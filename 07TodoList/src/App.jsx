import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Topbar from './Components/Topbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Footer from './Components/Footer'


function App() {
  

  return (
    <>
      <Router>
        
        <Topbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>

        <Footer/>
        
        
        
      </Router>
          
    </>
  )
}

export default App
