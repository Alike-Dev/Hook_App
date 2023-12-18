import { useState } from "react"

const useForm = (initialState) => {
    const [dataFrom, setDataFrom ] = useState(initialState)

    const reset = ()=> {
      setDataFrom(initialState)
    }
    
    const handleOnChangeEvent = ({target})=>{
        setDataFrom({
        ...dataFrom,
        [target.name] : target.value
        })
    }
  return [dataFrom, handleOnChangeEvent, reset]
}

export default useForm
