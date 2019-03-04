import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

const Header = () => {

  return (
    <header>
      <span id='header-logo'>PhoneBook</span>
      <ul id='menu-nav'>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/add' >Add</NavLink></li>
      </ul>
    </header>
  )
}

export default Header