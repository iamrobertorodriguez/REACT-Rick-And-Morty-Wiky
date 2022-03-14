import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LocationInfo from './components/LocationInfo';
import SearchBox from './components/SearchBox';
import ResidentList from './components/ResidentList';
import Footer from './components/Footer';

function App() {

  const [ locationData, setLocationData ] = useState( {  } )

  useEffect( (  ) => {

    const random = Math.floor( Math.random(  ) * 126 ) + 1

    axios
      .get( `https://rickandmortyapi.com/api/location/${ random }` )
      .then( ( res ) => {
        setLocationData( res.data )
      } )
  }, [  ] )

  return (
    <div className="App">
      <nav>
        < SearchBox setLocationData={ setLocationData }/>
      </nav>
      < LocationInfo locationData={ locationData } />
      < ResidentList characters={ locationData.residents } />
      < Footer />
    </div>
  );
}

export default App;