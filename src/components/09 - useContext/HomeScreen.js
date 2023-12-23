import React, { useContext } from 'react'

import './styles.css'
import UserContext from './UserContext';

const HomeScreen = () => {

  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Home Screen</h1>
      <hr />
      <pre>
        {
          JSON.stringify(user, null, 4)
        }
      </pre>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Odio repudiandae repellendus nemo in veritatis temporibus 
        porro, itaque libero saepe voluptates nam atque! Obcaecati 
        sapiente, totam tempora culpa delectus modi nulla!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Odio repudiandae repellendus nemo in veritatis temporibus 
        porro, itaque libero saepe voluptates nam atque! Obcaecati 
        sapiente, totam tempora culpa delectus modi nulla!
      </p>
    </div>
  )
}

export default HomeScreen
