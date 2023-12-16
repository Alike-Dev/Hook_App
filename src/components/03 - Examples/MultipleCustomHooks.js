
import React, { useEffect } from 'react';

import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

import './MultipleCustomHooks.css'

const MultipleCustomHooks = () => {

  const {state: counter, increment, decrement} = useCounter(1)
  console.log('mostrandoContador',counter);

  const state = useFetch(`https://www.anapioficeandfire.com/api/houses/${counter}`)
  
  const {data, loading, error} = state
  const {name , region, coatOfArms} = data
  
  console.log(state);

  const isLoading = () => {
    if(loading === true){
      return (
        <div className='alert alert-info text-center'>
          Loading...
        </div>
      )
    }
  }

  return (
    <div>
      <h1>Game of Thrones Houses</h1>
      <h6>Multiple Custom Hooks</h6>
      <hr />
      {
      isLoading()
      }

      <div className='Container-Card'>
        <div className="card" style={{width: '16rem'}}>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className={`card-subtitle mb-2 text-body-secondary ${region? '' : 'text-secondary'}`}>{region? region : 'No Region'}</h6>
            <p className={`card-text ${coatOfArms? '' : 'text-secondary'}`}>{coatOfArms? coatOfArms : 'No Coat of Arms'}</p>
            <div className='Buttons-Container'>
              <button className='btn btn-primary' onClick={() => decrement()} disabled={counter === 1}>{'<'} Back</button>
              <button className='btn btn-success' onClick={() => increment()} disabled={counter === 444}>Next {'>'}</button>
            </div>
            {/* <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a> */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default MultipleCustomHooks;