import React from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'

const TodoList = ({todos, handleDelete, handleToggle}) => {
  return (
    <div 
              className='todos-container'>
              <ul className='list-group list-group-flush'>
                {
                  todos.length == 0?
                    (
                      <small className='text-secondary'> No hay tareas aun :( </small>
                    )
                    :
                    (
                      todos.map((todo, i) => {
                        return (
                            <TodoListItem
                                key={todo.id}
                                todo={todo}
                                handleDelete={handleDelete}
                                handleToggle={handleToggle}
                                i={i}/>                          
                        )
                      })
                    )
                }
              </ul>
            </div>
  )
}

TodoList.propTypes = {
    todos : PropTypes.array.isRequired,
    handleDelete : PropTypes.func.isRequired,
    handleToggle : PropTypes.func.isRequired
}

export default TodoList