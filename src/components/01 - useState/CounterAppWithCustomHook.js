import React from 'react'

import './CounterAppWithCustomHook.css'
import useCounter from '../../hooks/useCounter'

const CounterAppWithCustomHook = () => {

    const {state : counter, increment, decrement, reset} =  useCounter(0)

  return (
    <>
        <h1>Counter With Hook :: {counter}</h1>
        <hr />
        
        <button 
        className='btn btn-primary'
        onClick={() => increment(2)}>
            +1
        </button>
        
        <button 
        className='btn btn-warning'
        onClick={reset}>
            Reset
        </button>
        
        <button 
        className='btn btn-danger'
        onClick={() => decrement()}>
            -1
        </button>

    </>
  )
}

export default CounterAppWithCustomHook
