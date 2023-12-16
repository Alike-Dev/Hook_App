import { useState } from "react"

const useForm = (initialState) => {
    const [dataFrom, setDataFrom ] = useState(initialState)
    
    const handleOnChangeEvent = ({target})=>{
        setDataFrom({
        ...dataFrom,
        [target.name] : target.value
        })
    }
  return [dataFrom, handleOnChangeEvent]
}

export default useForm
