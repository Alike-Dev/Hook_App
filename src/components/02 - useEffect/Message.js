import React, { useState, useEffect } from 'react'

const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});
    const {x, y} = coords

    useEffect(() => {
        console.log('Componente montado');

        const mouseMove = (e) => {
            const coords = {x : e.x, y: e.y}
            setCoords(coords)
        }


        window.addEventListener('mousemove',mouseMove)
      return () => {
        console.log('Componente Desmontado');
        window.removeEventListener('mousemove', mouseMove)
      };
    }, []);

  return (
    <div>
      <h3>Eres lo máximo </h3>
      <p>
        x: {x} :: y: {y}
      </p>
    </div>
  )
}

export default Message
