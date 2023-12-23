import React from 'react'
import { Link } from 'react-router-dom'

const AboutScreen = () => {
  const personas = ['Alejandro', 'Tiki', 'Milvia', 'Ernesto']
  return (
    <div>
      <h1>About Screen</h1>
      <hr />
      <ul>
        {
          personas.map(persona => {
            
            return (
            <li key={persona}>
              <Link to={`/about/${persona}`}> ❤️ {persona} </Link>
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default AboutScreen
