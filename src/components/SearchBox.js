import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBox = ( { setLocationData } ) => {

    const [ inputValue, setInputValue ] = useState( "" )

    const search = (  ) => {
        axios
            .get( `https://rickandmortyapi.com/api/location/${ inputValue }` )
            .then( ( res ) => {
                setLocationData( res.data )
            } )
    }

    const [ locationsArray, setLocationsArray ] = useState( [  ] )

    useEffect( (  ) => {
        let aux = [  ]
        for ( let i = 1; i < 127; i++ ) {
            axios
                .get( `https://rickandmortyapi.com/api/location/${ i }` )
                .then( ( res ) => {
                    let obj = {
                        name: res.data?.name,
                        id: res.data?.id
                    }
                    aux.push( obj )
                } ) }
        setLocationsArray( aux )
    }, [  ] )

    const [ filter, setFilter ] = useState( [  ] )

    const searchSuggestion = ( id ) => {
        axios
        .get( `https://rickandmortyapi.com/api/location/${ id }` )
        .then( ( res ) => {
            setLocationData( res.data )
        } )
    }

    const handleFilter = ( value ) => {
        const searchFor = value.toLocaleLowerCase(  )
        const newFilter = locationsArray.filter( ( value ) => {
            return value.name.toLocaleLowerCase(  ).includes( searchFor )
        } )
        setFilter( newFilter )
    }

    const closeSuggestions = ( event ) => {
        if ( event === "" ) {
            setFilter( [] )
        }
    }

    const idLimit = (  ) => {
        if ( inputValue > 126 ) {
            return <h3 className='id-exceeded'>
                        Location IDs cannot exceed #126
                    </h3>
        }
    }

    return (
        <div className='search-box'>
            <input 
                className='input-box'
                type="text"
                onChange={ ( e ) => {
                     setInputValue( e.target.value )
                     handleFilter( e.target.value )
                     closeSuggestions( e.target.value )
                } }
                onKeyDown={ e => {
                    if ( e.key === 'Enter' ) {
                        search(  )
                        setFilter( [  ] )
                    }
                } }
                value={ inputValue }
                placeholder="Search location by name or ID number"
            />
            <button onClick={ search }>
                <i className="fa-solid fa-magnifying-glass-location"></i>
            </button>
            { filter.length !== 0 && (
            <div className='autocomplete'>
                { filter.map( ( value ) => {
                    return <li key={value.id} onClick={ (  ) => {
                        setInputValue( value.name )
                        searchSuggestion( value.id )
                        setFilter( [  ] )
                    } }>
                            {value.name}
                        </li>
                } ) }
            </div>) }
            { idLimit(  ) }
        </div>
    );
};

export default SearchBox;