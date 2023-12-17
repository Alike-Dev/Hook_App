import React from 'react'

export const ProcesoPesado = (iteraciones) => {
  
    for (let i = 0; i < iteraciones; i++) {
        console.log('   Ahi vamos!...   ');
        
    }
  
    return `${iteraciones} Iteraciones realizadas`
}
