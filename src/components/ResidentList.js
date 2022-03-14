import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ( { characters } ) => {

    const listRender = (  ) => {
        if ( characters?.length === 0 ) {
            return <h2 className='warning' >No population over here</h2>
        }
        else{
            return (characters?.map( ( character ) => (
                <div className='list' key={ character }>
                    < ResidentInfo character={ character } />
                </div>
            ) ))
        }
    }
    return (
        <div className='resident-list'>
            { listRender(  ) }
        </div>
    );
};

export default ResidentList;