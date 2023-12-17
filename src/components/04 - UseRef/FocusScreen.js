import React, { useRef } from 'react'

import './FocusScreen.css';

const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select()
    }

  return (
    <div>
        <h1>FocusScreen</h1>
        <hr />

        <input 
            ref = {inputRef}
            type="text"
            className='form-control'
            placeholder='Tu nombre...'
         />

         <button
            className='btn btn-outline-primary mt-2'
            onClick={handleClick}>Focus</button>
    </div>
  )
}

export default FocusScreen