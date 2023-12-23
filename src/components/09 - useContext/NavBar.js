import React from 'react'
import { Link } from 'react-router-dom'

import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import AboutScreen from './AboutScreen'

import './styles.css'

const NavBar = () => {
  return (
    <>
      <nav className='Header'>
        <div className='title'>
          <h1>Test App React Router</h1>      
        </div>
        <ul className='lista-navbar'>
          <li>
            <Link to='/' element={ <HomeScreen /> }>Home</Link>
          </li>
          
          <li>
            <Link to='/login' element={ <LoginScreen /> }>Login</Link>
          </li>
          
          <li>
            <Link to='/about' element={ <AboutScreen /> }>About...</Link>
          </li>

        </ul>
      </nav>
    </>
  )
}

export default NavBar
