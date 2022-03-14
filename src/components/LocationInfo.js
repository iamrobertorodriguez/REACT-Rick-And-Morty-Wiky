import React from 'react';

const LocationInfo = ( { locationData } ) => {

    return (
        <div className='location-info'>
            <h1>{ locationData.name ? locationData.name : "Enter an actual location please" }</h1>
            <p><b>Type: </b>{ locationData.type }</p>
            <p><b>Dimension: </b>{ locationData.dimension }</p>
            <p><b>Population: </b>{ locationData.residents?.length }</p>
            <p><b>ID: </b>{ locationData.id }</p>
        </div>
    );
};

export default LocationInfo;