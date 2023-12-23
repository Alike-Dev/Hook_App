import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import Detalles from './Detalles'

const People = () => {
    const {id} = useParams()

  return (
    <>
        <div>People {`->`} {id}</div>
        <Link to={'detalles'} element={<Detalles />}> <b>Detalles</b> </Link>
        <Outlet/>
    </> 
  )
}

export default People