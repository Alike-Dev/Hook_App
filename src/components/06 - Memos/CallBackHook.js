import React, { useCallback, useState } from 'react'

import './Memorize.css'
import ShowIncrement from './ShowIncrement';

const CallBackHook = () => {

    const [counter, setCounter] = useState(0);

    const increment = useCallback((num) => {
            setCounter( (c) => c + num);
          }, [ setCounter ]);

  return (
    <div>
        <h1>UseCallBackHook</h1>
        <h5 
        className='text-secondary'>
            {`Counter : ${counter}`}
        </h5>
        <hr />
        <ShowIncrement increment={increment}/>

    </div>
  )
}

export default CallBackHook