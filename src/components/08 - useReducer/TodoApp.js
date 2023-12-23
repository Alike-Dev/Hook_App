import React, { useEffect, useReducer } from 'react';

import todoReducer from './todoReducer';

import TodoList from './TodoList';

import './TodoApp.css'
import TodoAdd from './TodoAdd';

const init = ()=> {
  
  return JSON.parse(localStorage.getItem('ToDos')) || [];
}

const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('ToDos', JSON.stringify(todos))
    return () => {
      
    };
  }, [todos]);

  const handleAddTodo = (newToDo) => {
    const action = {
      type: 'add',
      payload: newToDo
    }
    dispatch(action)   

  }
  
  const handleDelete = (todoId) => {

    const action = {
      type: 'del',
      payload: todoId
    }

    dispatch(action)
  }

  const handleToggle = (todoId) => { 

    dispatch({
      type : 'toggle',
      payload : todoId
    })
   }

  return (
    <div 
      className='Todo-App text-center '>
        <h1 className='mt-3'>ToDo's {`{ ${todos.length} }`}</h1>
        <hr />
        <div className='row'>
          <div className="col-9">

            <TodoList 
              todos={todos} 
              handleDelete={handleDelete}
              handleToggle={handleToggle} />

          </div>
          <div className="col-3">
            
            <TodoAdd handleAddTodo={handleAddTodo}/>

          </div>

        </div>
    </div>
  );
}

export default TodoApp;
