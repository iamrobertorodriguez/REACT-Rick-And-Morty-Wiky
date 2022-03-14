import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ResidentInfo = ( { character } ) => {

    const [ characterInfo, setCharacterInfo ] = useState( {} )

    useEffect( (  ) => {
        axios
          .get( `${ character }` )
          .then( ( res ) => {
            setCharacterInfo( res.data )
          } )
    }, [ character ] )

    const aliveStatus = {
      backgroundColor: 'green',
      color: 'white'
    }

    const deadStatus = {
      backgroundColor: 'red',
      color: 'white'
    }

    const unknownStatus = {
      backgroundColor: 'blue',
      color: 'white'
    }

    return (
        <div className='resident-card'>
          <h2>{ characterInfo.name }</h2>
          <div className='image-wrapper'>
            <img src={ characterInfo.image } alt="resident" />
          </div>
          <div className='info'>
            <p 
              style={ 
                ( characterInfo.status === "Alive" ) ? aliveStatus : 
                ( characterInfo.status === "Dead" ) ? deadStatus : 
                  unknownStatus }>
                <b>Status: </b>{ characterInfo.status }
            </p>
            <p><b>Gender: </b>{ characterInfo.gender }</p>
            <p><b>Location: </b>{ characterInfo.location?.name }</p>
            <p><b>Origin: </b>{ characterInfo.origin?.name }</p>
            <p><b>Species: </b>{ characterInfo.species }</p>
            <p><b>With appearances in { characterInfo.episode?.length } { ( characterInfo.episode?.length === 1 ) ? 'episode' : 'episodes' }</b></p>
          </div>
        </div>
    );
};

export default ResidentInfo;