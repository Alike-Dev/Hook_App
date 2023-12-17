import React from 'react'

//Se debe usar tambien el memo
const ShowIncrement = React.memo(({increment}) => {

    console.log('Me volvi a ejecutar!!');
  return (
    <button
        className='btn btn-primary'
        onClick={()=> increment(5)}>
            +1
        </button>
  )
})

export default ShowIncrement