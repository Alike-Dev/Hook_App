import React from 'react'
import PropTypes from 'prop-types'
import useForm from '../../hooks/useForm'

const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleOnChangeEvent, reset] = useForm({
        description : ''
      })
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.trim().length <= 1) {
          alert('Nada que agregar... :|')
          return;
        }
    
        const newToDo = {
          id: new Date().getTime(),
          desc: description,
          done: false
        }

        handleAddTodo(newToDo)
        reset()
    }
    
  return (
    <>
        <h5>Agregar ToDo</h5>
        <hr />
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                className='form-control mb-2'
                placeholder='Recoger la basura...'
                autoComplete='off'
                name="description"
                value={description}
                onChange={handleOnChangeEvent}
            />
            <button
            type='submit'
                className='btn btn-outline-success form-control'>
                    Add ToDo
            </button>
        </form>    
    </>
  )
}

TodoAdd.propTypes = {
    handleAddTodo : PropTypes.func.isRequired
}

export default TodoAdd