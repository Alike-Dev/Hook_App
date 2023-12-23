import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import AppRouter from './AppRouter'

import UserContext from './UserContext'
// import './styles.css'

const MainApp = () => {
  return (
    <UserContext.Provider value={''}>
      <Router>
    
        <AppRouter />
  
      </Router>
    </UserContext.Provider>
  )
}

export default MainApp
