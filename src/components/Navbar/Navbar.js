import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar-icons'>
         <NavLink to='/'><i class="fa-solid fa-house"></i></NavLink>
         <NavLink to='/Projects'><i class="fa-brands fa-r-project"></i></NavLink>
         <NavLink to='/Certificates'><i class="fa-solid fa-stamp"></i></NavLink>
         <NavLink to='/Contact'><i class="fa-solid fa-phone"></i></NavLink>
      </div>
    </div>
  )
}

export default Navbar