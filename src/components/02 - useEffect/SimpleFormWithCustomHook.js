import React, { useState } from 'react'

import './effects.css'
import './SimpleForm.css'
import useForm from '../../hooks/useForm'

const SimpleFormWithCustomHook = () => {

  const [formValues, handleOnChangeEvent] = useForm({
    name : '',
    email : '',
    age : '',
    password : ''
  })

  const {name, email, age, password} = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log( formValues );
  }


  return (
    <form onSubmit={handleSubmit}>
        <h1>Simple Form {'{ With Custom Hooks }'}</h1>
        <hr />

        <div className='container-Input'>
          <input
            className='form-control'
            type="text" 
            name="name"
            autoComplete='off'
            placeholder='Tu nombre...'
            value={name}
            onChange={handleOnChangeEvent} 
          />
        </div>

        <div className='container-Input'>
          <input
            className='form-control'
            type="text" 
            name="email"
            autoComplete='off'
            placeholder='email@email.com'
            value={email}
            onChange={handleOnChangeEvent} 
          />
        </div>

        <div className='container-Input'>
          <input
            className='form-control'
            type="password" 
            name="password"
            autoComplete="off"
            placeholder='*****'
            value={password}
            onChange={handleOnChangeEvent} 
          />
        </div>

        <div className='container-Input'>
          <input
            className='form-control'
            type="number" 
            name="age"
            autoComplete="off"
            placeholder='Age...'
            value={age}
            onChange={handleOnChangeEvent} 
          />
        </div>
        <button className='btn btn-primary'>
          Send
        </button>
    </form>
  )
}

export default SimpleFormWithCustomHook
