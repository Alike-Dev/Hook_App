import React, { useMemo, useState } from 'react'

import useCounter from '../../hooks/useCounter';

import './Memorize.css'
import { ProcesoPesado } from '../../helpers/ProcesoPesado';

const MemoHook = () => {

    const {state: counter, increment} = useCounter(5000)
    const [visibility, setVisibility] = useState(true)

    const result = useMemo(() => ProcesoPesado(counter), [counter]);

  return (
    <div>
        <h1>Memorize</h1>
        <h3 className='text-secondary'>
            Counter: <small>{counter}</small>
        </h3>
        
        <hr />
        {
            <p>{result}</p>
        }
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

export default MemoHook