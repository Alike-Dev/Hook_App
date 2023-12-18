
const initialState = [{
    id: 1,
    todo: 'Buscar el pan',
    done: false
}]

const todoReducer = (state = initialState, action) => {

    if(action?.type === 'add'){
        return (
            [
                ...state,
                action.payload
            ]
        )
    }
    else if (action?.type === 'del') {
        
    }

    return state
}

let todos = todoReducer()


const newTodo = {
    id: 1,
    todo: 'Buscar huevos',
    done: false
}

const addTodo = {
            type: 'add',
            payload: newTodo
        }

todos = todoReducer(todos, addTodo)




console.log(todos);