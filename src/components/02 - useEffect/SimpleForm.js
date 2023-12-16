import React, { useState } from 'react'

import Message from './Message'

import './effects.css'
import './SimpleForm.css'

const SimpleForm = () => {
  
    const [dataFrom, setDataFrom ] = useState({
        name : '',
        email : ''
    })

    const {name: user , email} = dataFrom

    
    // useEffect(()=>{
    //     console.log('Se modifica el email!');
    // },[email])
    
    // useEffect(()=>{
    //     console.log('Se modifica el nombre!');
    // },[user])
    
    const handleOnChangeEvent = ({target})=>{
        setDataFrom({
        ...dataFrom,
        [target.name] : target.value
        })
    }

  return (
    <>
        <h1>Simple Form {'{ Use Effect }'}</h1>
        <hr />

        <div className='container-Imput'>
          <input
            className='form-control'
            type="text" 
            name="name"
            autoComplete='off'
            placeholder='Tu nombre...'
            value={user}
            onChange={handleOnChangeEvent} 
          />
        </div>

        <div className='container-Imput'>
          <input
            className='form-control'
            type="text" 
            name="email"
            autoComplete="off"
            placeholder='email@email.com'
            value={email}
            onChange={handleOnChangeEvent} 
          />
        </div>

        {(user==='Alike') && <Message />}

    </>
  )
}

export default SimpleForm
