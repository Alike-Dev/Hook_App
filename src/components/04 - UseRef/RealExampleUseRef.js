import React, { useState } from 'react'
import MultipleCustomHooks from "../03 - Examples/MultipleCustomHooks";

import './FocusScreen.css';

const RealExampleUseRef = () => {

    const [show, setShow] = useState(false)

  return (
    <div>
        <h1>RealExampleUseRef</h1>
        <hr />
        <button
            className='btn btn-outline-success'
            onClick={()=> setShow(!show)}>
                Show/Hide
            </button>
            {
                show && <MultipleCustomHooks />
            }
    </div>

  )
}

export default RealExampleUseRef