import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

const Header = () => {

  return (
    <header>
      <p id='header-logo'>Phone Directory</p>
      <ul id='menu-nav'>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/add' >Add</NavLink></li>
      </ul>
    </header>
  )
}

export default Header