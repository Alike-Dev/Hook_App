import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import AppRouter from './AppRouter'

import UserContext from './UserContext'
// import './styles.css'

const MainApp = () => {
  
  const [user, setUser] = useState({});
  
  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      <Router>
    
        <AppRouter />
  
      </Router>
    </UserContext.Provider>
  )
}

export default MainApp
