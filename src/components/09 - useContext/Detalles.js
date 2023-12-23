import React from 'react';
import { useParams } from 'react-router-dom';

const Detalles = () => {
    const {id} = useParams()
  return (
    <div>
      <h1>DETALLES {id}</h1>
    </div>
  );
}

export default Detalles;
