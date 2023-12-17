import React, { useState } from 'react'

import useCounter from '../../hooks/useCounter';

import Small from './Small';

import './Memorize.css'

const Memorize = () => {

    const {state: counter, increment} = useCounter(10)
    const [visibility, setVisibility] = useState(true)

  return (
    <div>
        <h1>Memorize</h1>
        <h3 className='text-secondary'>
            Counter: <Small value={counter} />
        </h3>
        
        <hr />

        <button
            className='btn btn-outline-primary'
            onClick={() => increment()}
        >
            +1
        </button>

        <button
            className='btn btn-success mx-3'
            onClick={()=> setVisibility(!visibility)}>
                Show/Hide {JSON.stringify(visibility)}
        </button>
    </div>
  )
}

export default Memorize