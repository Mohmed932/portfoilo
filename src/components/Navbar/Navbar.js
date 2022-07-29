import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar-icons'>
         <Link to='/'><i class="fa-solid fa-house"></i></Link>
         <Link to='/Projects'><i class="fa-brands fa-r-project"></i></Link>
         <Link to='/Certificates'><i class="fa-solid fa-stamp"></i></Link>
         <Link to='/Contact'><i class="fa-solid fa-phone"></i></Link>
      </div>
    </div>
  )
}

export default Navbar