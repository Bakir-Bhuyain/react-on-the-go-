import React, { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountries}) => {
      const [visited, setVisited] = useState(false);
      // console.log(country.name.common);
      // console.log(country.flags.flags.png);
      // console.log(country.population.population)

      const handleVisited = () => {

            //First System(Basic)
            // if(visited){
            //       setVisited(false)
            // }else{
            //       setVisited(true)
            // }

            //Second System
            // setVisited(visited ? false : true);

            //Third System
            setVisited(!visited);
            handleVisitedCountries(country)
      }
      return (
            <div className={`country ${visited && 'country-visited'}`}>
                  <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
                  <h3>Name: {country.name.common}</h3>
                  <p>Population: {country.population.population}</p>
                  <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "small Country"}</p>
                  <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>

            </div>
      );
};

export default Country;