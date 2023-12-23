import React, { useContext } from 'react'
import UserContext from './UserContext';

const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const myUser = {
    id : 123,
    name : 'Aleso'
  }

  return (
    <div>
      <h1>Login Screen</h1>
      <hr />
      <button onClick={()=> setUser(myUser)}>
        Login
      </button>
    </div>
  )
}

export default LoginScreen
