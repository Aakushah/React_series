import React from 'react'
import './Header.scss'
import logo from './logo.png'
import { HiSearch } from "react-icons/hi";


function Header() {

  return (
    
       <nav className='header'>
        <img src={logo} alt="neftlixlogo" />
        
        <div className='link'>
          <a href="">TV Shows</a>
          <a href="">Movies</a>
          <a href="">Recently Added</a>
          <a href="">My List</a>
        </div>
        <HiSearch />
       </nav>
    
  )
}

export default Header