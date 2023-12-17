
import React, { useLayoutEffect, useRef, useState } from 'react';

import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

import './Layout.css'

const Layout = () => {

  const {state: counter, increment, decrement} = useCounter(1)

  const state = useFetch(`https://www.anapioficeandfire.com/api/houses/${counter}`)
  
  const {data} = state
  const {name , region, coatOfArms} = !!data && data

  const cardRef = useRef()

  const [cardSizeInfo, setCardSizeInfo] = useState({});

  useLayoutEffect(() => {
    setCardSizeInfo( cardRef.current.getBoundingClientRect() );

  }, [data])

  return (
    <div>
        <h1>Game of Thrones Houses</h1>
        <h6>LayoutEffect</h6>
        <hr />
        <div className='Container-Card'>
            <div className="card" style={{width: '16rem'}}>
                <div className="card-body" ref={cardRef}>
                    <h5 className={`card-title ${name? '' : 'text-secondary'}`}>{name? name : 'No Name'}</h5>
                    <h6 className={`card-subtitle mb-2 text-body-secondary ${region? '' : 'text-secondary'}`}>{region? region : 'No Region'}</h6>
                    <p className={`card-text ${coatOfArms? '' : 'text-secondary'}`}>{coatOfArms? coatOfArms : 'No Coat of Arms'}</p>
                    <div className='Buttons-Container'>
                        <button className='btn btn-primary' onClick={() => decrement()} disabled={counter === 1}>Back</button>
                        <button className='btn btn-success' onClick={() => increment()} disabled={counter === 444}>Next</button>
                    </div>
                </div>
            </div>
            <pre>
                {
                    JSON.stringify(cardSizeInfo,null, 2)
                }
            </pre>
        </div>
    </div>
  );
}

export default Layout;