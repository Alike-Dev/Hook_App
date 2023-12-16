import { useState } from "react"

const useCounter = (initialState = 10) => {
  
    const [state, setState] = useState(initialState)

    const increment = (factor = 1) => {
        return setState( state + factor)
    }
    const decrement = (factor = 1) => {
        return setState( state - factor)
    }
    const reset = () => {
        return setState(initialState)
    }
    return ({
        state,
        increment,
        decrement,
        reset
    })
}

export default useCounter

