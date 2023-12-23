import React from 'react'

import { Route, Routes } from 'react-router-dom'


import NavBar from './NavBar'
import AboutScreen from './AboutScreen'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'

import './styles.css'
import People from './People'
import Detalles from './Detalles'
import Error from './Error'

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <div className='container-routes'>
        <Routes>
          
          <Route path='/' element={<HomeScreen />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/login' element={<LoginScreen />} />          
          <Route path='/about/:id' element={<People/>}> 
            <Route path='detalles' element={<Detalles />} />
          </Route>

          <Route path='/*' element={<Error />}/>         

        </Routes>
      </div>
    </>

  )
}

export default AppRouter
