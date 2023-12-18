import React from 'react'
import PropTypes from 'prop-types'

const TodoListItem = ({todo, handleDelete, handleToggle, i}) => {
  return (
    <li key={todo.id}
        className={`list-group-item mt-2 mb-2 
                ${todo.done && 'finished'}`}
        onClick={()=> handleToggle(todo.id)}
        >
        <p 
        className=''
        
        ><b>{i + 1} ::</b> {todo.desc}</p>
        <button 
        className='btn btn-danger'
        onClick={()=> handleDelete(todo.id)}>
            Borrar
        </button>
    </li>
  )
}

TodoListItem.propTypes = {
    todo : PropTypes.object.isRequired,
    handleDelete : PropTypes.func.isRequired,
    handleToggle : PropTypes.func.isRequired
}

export default TodoListItem