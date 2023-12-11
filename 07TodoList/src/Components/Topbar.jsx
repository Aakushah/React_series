import React from 'react'

import {Link} from 'react-router-dom';

function Topbar() {
  return (
    <>    
      <nav>Get Ready To Complete Your Daily Goals</nav>
      <div className='header'>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </div>
    </>


  )
}

export default Topbar